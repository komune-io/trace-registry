package io.komune.registry.control.core.cccev.certification.service

import f2.spring.exception.NotFoundException
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.api.commons.utils.toJson
import io.komune.registry.control.core.cccev.certification.entity.BadgeCertification
import io.komune.registry.control.core.cccev.certification.entity.CertificationRepository
import io.komune.registry.control.core.cccev.certification.entity.RequirementCertification
import io.komune.registry.control.core.cccev.certification.entity.SupportedValue
import io.komune.registry.control.core.cccev.certification.entity.isFulfilled
import io.komune.registry.control.core.cccev.concept.entity.InformationConcept
import io.komune.registry.control.core.cccev.concept.entity.InformationConceptRepository
import io.komune.registry.control.core.cccev.unit.model.DataUnitType
import io.komune.registry.infra.neo4j.session
import io.komune.registry.infra.neo4j.transaction
import io.komune.registry.s2.commons.model.CertificationId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.RequirementCertificationId
import io.komune.sel.SelExecutor
import io.komune.sel.isTruthy
import io.komune.sel.normalize
import io.komune.sel.normalizeJsonElement
import kotlinx.datetime.Clock
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonPrimitive
import org.neo4j.ogm.session.SessionFactory
import org.springframework.stereotype.Service
import s2.spring.utils.logger.Logger
import java.util.UUID

@Service
class CertificationValuesFillerService(
    private val certificationRepository: CertificationRepository,
    private val informationConceptRepository: InformationConceptRepository,
    private val sessionFactory: SessionFactory
) {
    companion object {
        val selExecutor = SelExecutor(nullOnError = true)
    }

    private val logger by Logger()

    /**
     * Add the given values to the relevant certifications,
     * then update the fulfillment indicators of said certifications,
     * then compute the values of auto-computable information concepts that depends on the given values,
     * and repeat the previous steps until everything is updated.
     */
    suspend fun fillValues(values: Map<InformationConceptIdentifier, String?>, context: Context) = sessionFactory.transaction { _, _->
        certificationRepository.findAllSupportedValues(context.certificationId, context.rootRequirementCertificationId)
            .forEach { context.registerJsonValue(it.concept.identifier, it.value) }

        values.forEach { (informationConceptIdentifier, value) ->
            val requirementCertifications = certificationRepository.findRequirementCertificationsLinkedToInformationConcept(
                context.certificationId, context.rootRequirementCertificationId, informationConceptIdentifier
            )

            logger.debug("fill value: [$informationConceptIdentifier]: [$value]")
            val informationConcept = informationConceptRepository.findByIdentifier(informationConceptIdentifier)
                ?: throw NotFoundException("InformationConcept", informationConceptIdentifier)

            if (informationConcept.expressionOfExpectedValue != null) {
                return@forEach // computable values cannot be set manually
            }

            // will throw if conversion is impossible
            value.convertTo(informationConcept.unit.type)

            val supportedValue = SupportedValue().also { supportedValue ->
                supportedValue.id = UUID.randomUUID().toString()
                supportedValue.value = value
                supportedValue.concept = informationConcept
            }

            requirementCertifications.fillValue(informationConceptIdentifier, supportedValue, context)
        }


        computeValuesOfConsumersOf(values.keys, context)
    }

    private suspend fun List<RequirementCertification>.fillValue(
        informationConceptIdentifier: InformationConceptIdentifier,
        supportedValue: SupportedValue,
        context: Context
    ): Unit = sessionFactory.session { session ->
        context.registerJsonValue(informationConceptIdentifier, supportedValue.value)

        this.onEach { requirementCertification ->
            val relevantBadgeCertifications = requirementCertification.badges.filter {
                it.badge.informationConcept.identifier == informationConceptIdentifier
            }
            val existingValue = requirementCertification.values.firstOrNull { it.concept.identifier == informationConceptIdentifier }
                ?: relevantBadgeCertifications.firstOrNull { it.value?.concept?.identifier == informationConceptIdentifier }?.value


            if (existingValue == null) {
                requirementCertification.values.add(supportedValue)
                relevantBadgeCertifications.updateValues(supportedValue)
            } else {
                existingValue.value = supportedValue.value
                relevantBadgeCertifications.updateValues(supportedValue)
            }

            session.save(requirementCertification, 3)
        }.forEach { it.updateFulfillment(context) }

        certificationRepository.findSupportingEvidenceFor(supportedValue.id)?.let { evidence ->
            supportedValue.evidences.add(evidence)
            session.save(supportedValue, 1)
        }
    }

    private suspend fun List<BadgeCertification>.updateValues(value: SupportedValue) = forEach { badgeCertification ->
        badgeCertification.value = value
        badgeCertification.level = badgeCertification.badge
            .levels
            .sortedByDescending { it.level }
            .firstOrNull { level ->
                evaluateBooleanExpression(
                    expression = level.expression,
                    dependencies = setOf(badgeCertification.badge.informationConcept.identifier),
                    values = mapOf(badgeCertification.badge.informationConcept.identifier to value?.value)
                )
            }
    }

    private suspend fun computeValuesOfConsumersOf(
        informationConceptIdentifiers: Set<InformationConceptIdentifier>,
        context: Context
    ) {
        val consumers = informationConceptIdentifiers.mapAsync { informationConceptIdentifier ->
            informationConceptRepository.findDependingOn(informationConceptIdentifier)
        }.flatten()
            .distinctBy(InformationConcept::identifier)

        consumers.computeValues(context)
    }

    private suspend fun List<InformationConcept>.computeValues(context: Context) {
        val computableConcepts = this.filter { concept ->
            concept.expressionOfExpectedValue != null
                    && concept.dependencies.all { it.identifier in context.knownValues }
        }

        val expressionDataJson = context.knownValues.toJson()

        computableConcepts.forEach { concept ->
            logger.debug("compute value: [${concept.identifier}]")

            val certifications = certificationRepository.findRequirementCertificationsLinkedToInformationConcept(
                context.certificationId, context.rootRequirementCertificationId, concept.identifier
            ).ifEmpty { return@forEach }

            val value = selExecutor.evaluateToJson(concept.expressionOfExpectedValue!!, expressionDataJson)
                .also { context.registerJsonValue(concept.identifier, it) }
                .let {
                    SupportedValue().also { supportedValue ->
                        supportedValue.id = UUID.randomUUID().toString()
                        supportedValue.value = it
                        supportedValue.concept = concept
                    }
                }

            certifications.fillValue(concept.identifier, value, context)
        }
    }

    private suspend fun RequirementCertification.updateFulfillment(context: Context) {
        logger.debug("update fulfillment: [$id] (requirement: [${requirement.identifier}])")
        var changed: Boolean

        val mappedValues = values.associate {
            it.concept.identifier to it.value.normalize()
        }

        hasAllValues = requirement.concepts.all { mappedValues[it.identifier] != null }
            .also { changed = it != hasAllValues }

        isEnabled = evaluateBooleanExpression(
            requirement.enablingCondition,
            requirement.enablingConditionDependencies.map(InformationConcept::identifier).toSet(),
            context.knownValues + mappedValues
        ).also { changed = changed || it != isEnabled }

        isValidated = evaluateBooleanExpression(
            requirement.validatingCondition,
            requirement.validatingConditionDependencies.map(InformationConcept::identifier).toSet(),
            context.knownValues + mappedValues
        ).also { changed = changed || it != isValidated }

        isFulfilled = isFulfilled()
            .also { changed = changed || it != isFulfilled }

        if (changed) {
            certificationRepository.save(this)
            certificationRepository.findParentsOf(id)
                .forEach { parent -> parent.updateFulfillment(context) }
        }
    }

    private suspend fun evaluateBooleanExpression(
        expression: String?,
        dependencies: Set<InformationConceptIdentifier>,
        values: Map<InformationConceptIdentifier, Any?>
    ): Boolean {
        if (expression == null) {
            return true
        }

        if (dependencies.any { it !in values }) {
            return false
        }

        return selExecutor.evaluate(expression, values.toJson()).isTruthy()
    }

    private fun String?.convertTo(type: DataUnitType): Any? = when (type) {
        DataUnitType.BOOLEAN -> this?.toBoolean()
        DataUnitType.NUMBER -> this?.toDouble()
        DataUnitType.STRING -> this
    }

    class Context(
        val certificationId: CertificationId,
        val rootRequirementCertificationId: RequirementCertificationId?,
    ) {
        private val values: MutableMap<InformationConceptIdentifier, Any?> = genericParams()

        val knownValues: Map<InformationConceptIdentifier, Any?> = values

        fun registerJsonValue(conceptIdentifier: InformationConceptIdentifier, value: String?) {
            val jsonElement = if (value?.firstOrNull() in listOf('{', '[')) {
                value?.let { Json.parseToJsonElement(it) }
            } else {
                value?.let { JsonPrimitive(it) }
            }

            values[conceptIdentifier] = jsonElement?.normalizeJsonElement()
        }

        private fun genericParams(): MutableMap<String, Any?> {
            val now = Clock.System.now()
            return mutableMapOf(
                "now" to now.toEpochMilliseconds(),
                "currentYear" to now.toLocalDateTime(TimeZone.UTC).year
            )
        }
    }
}

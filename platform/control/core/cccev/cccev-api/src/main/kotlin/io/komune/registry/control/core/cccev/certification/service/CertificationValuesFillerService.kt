package io.komune.registry.control.core.cccev.certification.service

import f2.spring.exception.NotFoundException
import io.komune.registry.api.commons.utils.toJson
import io.komune.registry.control.core.cccev.certification.entity.BadgeCertification
import io.komune.registry.control.core.cccev.certification.entity.Certification
import io.komune.registry.control.core.cccev.certification.entity.Evidence
import io.komune.registry.control.core.cccev.certification.entity.RequirementCertification
import io.komune.registry.control.core.cccev.certification.entity.SupportedValue
import io.komune.registry.control.core.cccev.certification.entity.isFulfilled
import io.komune.registry.control.core.cccev.concept.entity.InformationConcept
import io.komune.registry.control.core.cccev.unit.model.DataUnitType
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.sel.SelExecutor
import io.komune.sel.isTruthy
import io.komune.sel.normalizeJsonElement
import kotlinx.datetime.Clock
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonPrimitive
import java.util.LinkedList
import java.util.UUID

object CertificationValuesFillerService {
    val selExecutor = SelExecutor(nullOnError = true)

    /**
     * Add the given values to the certification, compute the computed values and update the fulfillment of the requirements.
     */
    fun fillValues(certification: Certification, values: Map<InformationConceptIdentifier, String?>): Certification {
        val context = Context(certification)

        values.forEach { (conceptIdentifier, newValue) ->
            val informationConcept = context.informationConcepts[conceptIdentifier]
                ?: throw NotFoundException("InformationConcept", conceptIdentifier)

            if (informationConcept.expressionOfExpectedValue != null) {
                return@forEach // computable values cannot be set manually
            }

            saveValue(context, informationConcept, newValue)
        }

        computeValuesOfConsumersOf(context, values.keys)

        certification.completionRate = certification.requirementCertifications
            .mapNotNull { it.updateFulfillment(context) }
            .merge()
            .computeRate()

        return certification
    }

    private fun saveValue(context: Context, informationConcept: InformationConcept, newValue: String?) {
        // will throw if conversion is impossible
        newValue.convertTo(informationConcept.unit.type)

        val supportedValue = context.supportedValues[informationConcept.identifier]
            ?.also { supportedValue -> supportedValue.value = newValue }
            ?: SupportedValue().also { supportedValue ->
                supportedValue.id = UUID.randomUUID().toString()
                supportedValue.value = newValue
                supportedValue.concept = informationConcept
            }

        val supportedValueEvidenceIds = supportedValue.evidences.map { it.id }.toSet()
        context.supportingEvidences[informationConcept.identifier]
            ?.filter { it.id in supportedValueEvidenceIds }
            ?.let(supportedValue.evidences::addAll)

        context.registerSupportedValue(supportedValue)

        context.requirementCertifications[informationConcept.identifier]?.forEach { requirementCertification ->
            if (requirementCertification.values.none { it.id == supportedValue.id }) {
                requirementCertification.values.add(supportedValue)
            }
        }

        context.badges[informationConcept.identifier]?.fillValue(supportedValue)
    }

    private fun Collection<BadgeCertification>.fillValue(value: SupportedValue) = forEach { badgeCertification ->
        badgeCertification.value = value
        badgeCertification.level = badgeCertification.badge
            .levels
            .sortedByDescending { it.level }
            .firstOrNull { level ->
                evaluateBooleanExpression(
                    expression = level.expression,
                    dependencies = setOf(badgeCertification.badge.informationConcept.identifier),
                    values = mapOf(badgeCertification.badge.informationConcept.identifier to value.value)
                )
            }
    }

    private fun computeValuesOfConsumersOf(context: Context, informationConceptIdentifiers: Set<InformationConceptIdentifier>) {
        val consumers = LinkedList(informationConceptIdentifiers.flatMap { context.informationConceptConsumers[it].orEmpty() })

        while (consumers.isNotEmpty()) {
            val consumer = consumers.removeFirst()

            val canBeComputed = consumer.dependencies.all { it.identifier in context.parsedValues }
            if (!canBeComputed) {
                continue
            }

            val expressionDataJson = context.parsedValues.toJson()
            val computedValue = selExecutor.evaluateToJson(consumer.expressionOfExpectedValue!!, expressionDataJson)
            saveValue(context, consumer, computedValue)

            consumers.addAll(context.informationConceptConsumers[consumer.identifier].orEmpty())
        }
    }

    private fun RequirementCertification.updateFulfillment(context: Context): CompletionData? {
        val childrenCompletionData = subCertifications.mapNotNull { it.updateFulfillment(context) }.merge()

        val filledConceptIdentifiers = values.map { it.concept.identifier }.toSet()
        val emptyConceptIdentifiers = requirement.concepts.map { it.identifier }.toSet() - filledConceptIdentifiers
        hasAllValues = emptyConceptIdentifiers.isEmpty()

        isEnabled = evaluateBooleanExpression(
            requirement.enablingCondition,
            requirement.enablingConditionDependencies.map(InformationConcept::identifier).toSet(),
            context.parsedValues
        )

        isValidated = evaluateBooleanExpression(
            requirement.validatingCondition,
            requirement.validatingConditionDependencies.map(InformationConcept::identifier).toSet(),
            context.parsedValues
        )

        isFulfilled = isFulfilled()

        if (requirement.concepts.isEmpty() && childrenCompletionData.isEmpty()) {
            completionRate = 100.0
            return null
        }

        val completionData = CompletionData(
            filledConceptIdentifiers = filledConceptIdentifiers + childrenCompletionData.filledConceptIdentifiers,
            emptyConceptIdentifiers = emptyConceptIdentifiers + childrenCompletionData.emptyConceptIdentifiers
        )
        completionRate = completionData.computeRate()

        return completionData.takeIf { isEnabled }
    }

    private fun evaluateBooleanExpression(
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

    private fun Collection<CompletionData>.merge(): CompletionData {
        val filledConceptIdentifiers = mutableSetOf<InformationConceptIdentifier>()
        val emptyConceptIdentifiers = mutableSetOf<InformationConceptIdentifier>()
        forEach { completionData ->
            filledConceptIdentifiers += completionData.filledConceptIdentifiers
            emptyConceptIdentifiers += completionData.emptyConceptIdentifiers
        }
        return CompletionData(filledConceptIdentifiers, emptyConceptIdentifiers)
    }

    class Context(
        val certification: Certification
    ) {
        private val mutableSupportedValues = mutableMapOf<InformationConceptIdentifier, SupportedValue>()
        private val mutableParsedValues: MutableMap<InformationConceptIdentifier, Any?> = genericParams()
        private val mutableInformationConcepts = mutableMapOf<InformationConceptIdentifier, InformationConcept>()
        private val mutableInformationConceptConsumers = mutableMapOf<InformationConceptIdentifier, MutableList<InformationConcept>>()
        private val mutableRequirementCertifications = mutableMapOf<InformationConceptIdentifier, MutableList<RequirementCertification>>()
        private val mutableBadges = mutableMapOf<InformationConceptIdentifier, MutableList<BadgeCertification>>()
        private val mutableSupportingEvidences = mutableMapOf<InformationConceptIdentifier, MutableList<Evidence>>()

        val supportedValues: Map<InformationConceptIdentifier, SupportedValue> = mutableSupportedValues
        val parsedValues: Map<InformationConceptIdentifier, Any?> = mutableParsedValues
        val informationConcepts: Map<InformationConceptIdentifier, InformationConcept> = mutableInformationConcepts
        val informationConceptConsumers: Map<InformationConceptIdentifier, List<InformationConcept>> = mutableInformationConceptConsumers
        val requirementCertifications: Map<InformationConceptIdentifier, List<RequirementCertification>> = mutableRequirementCertifications
        val badges: Map<InformationConceptIdentifier, List<BadgeCertification>> = mutableBadges
        val supportingEvidences: Map<InformationConceptIdentifier, List<Evidence>> = mutableSupportingEvidences

        init {
            val queue = LinkedList(certification.requirementCertifications)
            while (queue.isNotEmpty()) {
                val requirementCertification = queue.removeFirst()
                requirementCertification.values.forEach(::registerSupportedValue)

                requirementCertification.requirement.concepts.registerFor(requirementCertification)
                requirementCertification.requirement.enablingConditionDependencies.registerFor(requirementCertification)
                requirementCertification.requirement.validatingConditionDependencies.registerFor(requirementCertification)

                requirementCertification.badges.forEach { badgeCertification ->
                    val concept = badgeCertification.badge.informationConcept
                    mutableBadges.getOrPut(concept.identifier) { mutableListOf() }.add(badgeCertification)
                    registerInformationConcept(concept)
                }

                requirementCertification.evidences.forEach { evidence ->
                    evidence.evidenceType.concepts.forEach { concept ->
                        mutableSupportingEvidences.getOrPut(concept.identifier) { mutableListOf() }.add(evidence)
                    }
                }
                queue.addAll(requirementCertification.subCertifications)
            }
        }

        fun registerSupportedValue(supportedValue: SupportedValue) {
            mutableSupportedValues[supportedValue.concept.identifier] = supportedValue
            registerJsonValue(supportedValue.concept.identifier, supportedValue.value)
        }

        fun registerJsonValue(conceptIdentifier: InformationConceptIdentifier, value: String?) {
            val jsonElement = if (value?.firstOrNull() in listOf('{', '[')) {
                value?.let { Json.parseToJsonElement(it) }
            } else {
                value?.let { JsonPrimitive(it) }
            }

            mutableParsedValues[conceptIdentifier] = jsonElement?.normalizeJsonElement()
        }

        fun registerInformationConcept(informationConcept: InformationConcept) {
            mutableInformationConcepts[informationConcept.identifier] = informationConcept
            informationConcept.dependencies.forEach { dependency ->
                mutableInformationConceptConsumers
                    .getOrPut(dependency.identifier) { mutableListOf() }
                    .add(informationConcept)
            }
        }

        private fun genericParams(): MutableMap<String, Any?> {
            val now = Clock.System.now()
            return mutableMapOf(
                "now" to now.toEpochMilliseconds(),
                "currentYear" to now.toLocalDateTime(TimeZone.UTC).year
            )
        }

        private fun Collection<InformationConcept>.registerFor(requirementCertification: RequirementCertification) {
            forEach { concept ->
                registerInformationConcept(concept)
                mutableRequirementCertifications.getOrPut(concept.identifier) { mutableListOf() }.add(requirementCertification)
            }
        }
    }

    private data class CompletionData(
        val filledConceptIdentifiers: Set<InformationConceptIdentifier>,
        val emptyConceptIdentifiers: Set<InformationConceptIdentifier>
    ) {
        fun computeRate(): Double {
            val nbConcepts = filledConceptIdentifiers.size + emptyConceptIdentifiers.size
            return if (nbConcepts == 0) 100.0 else (filledConceptIdentifiers.size.toDouble() / nbConcepts) * 100.0
        }

        fun isEmpty() = filledConceptIdentifiers.isEmpty() && emptyConceptIdentifiers.isEmpty()
    }
}

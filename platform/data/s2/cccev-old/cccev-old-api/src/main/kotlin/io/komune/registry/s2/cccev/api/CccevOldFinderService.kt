package io.komune.registry.s2.cccev.api

import io.komune.registry.s2.cccev.api.entity.concept.InformationConceptOldRepository
import io.komune.registry.s2.cccev.api.entity.concept.toModel
import io.komune.registry.s2.cccev.api.entity.unit.DataUnitOldRepository
import io.komune.registry.s2.cccev.api.entity.unit.toModel
import io.komune.registry.s2.cccev.api.entity.value.SupportedValueEntity
import io.komune.registry.s2.cccev.api.entity.value.SupportedValueOldRepository
import io.komune.registry.s2.cccev.api.entity.value.toModel
import io.komune.registry.s2.cccev.api.processor.compute
import io.komune.registry.s2.cccev.domain.InformationConceptState
import io.komune.registry.s2.cccev.domain.SupportedValueState
import io.komune.registry.s2.cccev.domain.model.AggregatorType
import io.komune.registry.s2.cccev.domain.model.DataUnitModel
import io.komune.registry.s2.cccev.domain.model.InformationConceptModel
import io.komune.registry.s2.cccev.domain.model.SumAggregatorInput
import io.komune.registry.s2.cccev.domain.model.SupportedValueModel
import io.komune.registry.s2.commons.exception.NotFoundException
import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.DataUnitIdentifier
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.SupportedValueId
import org.springframework.stereotype.Service

@Service
class CccevOldFinderService(
    private val conceptRepository: InformationConceptOldRepository,
    private val unitRepository: DataUnitOldRepository,
    private val valueRepository: SupportedValueOldRepository,
) {

    /* ------------------------------ INFORMATION CONCEPT ------------------------------ */

    suspend fun getConceptOrNull(id: InformationConceptId): InformationConceptModel? {
        return conceptRepository.findById(id)
            .orElse(null)
            ?.takeUnless { it.status == InformationConceptState.DELETED }
            ?.toModel()
    }

    suspend fun getConcept(id: InformationConceptId): InformationConceptModel {
        return getConceptOrNull(id)
            ?: throw NotFoundException("InformationConcept", id)
    }

    suspend fun getConceptByIdentifierOrNull(identifier: String): InformationConceptModel? {
        return conceptRepository.findByIdentifier(identifier)
            ?.takeUnless { it.status == InformationConceptState.DELETED }
            ?.toModel()
    }

    suspend fun getConceptByIdentifier(identifier: String): InformationConceptModel {
        return getConceptByIdentifierOrNull(identifier)
            ?: throw NotFoundException("InformationConcept", identifier)
    }

    suspend fun listConcepts(): List<InformationConceptModel> {
        return conceptRepository.findAllByStatus(InformationConceptState.ACTIVE)
            .map { it.toModel() }
    }

    /* ------------------------------ DATA UNIT ------------------------------ */

    suspend fun getUnitOrNull(id: DataUnitId): DataUnitModel? {
        return unitRepository.findById(id)
            .orElse(null)
            ?.toModel()
    }

    suspend fun getUnit(id: DataUnitId): DataUnitModel {
        return getUnitOrNull(id)
            ?: throw NotFoundException("DataUnit", id)
    }

    suspend fun getUnitByIdentifierOrNull(identifier: DataUnitIdentifier): DataUnitModel? {
        return unitRepository.findByIdentifier(identifier)
            ?.toModel()
    }

    suspend fun listUnits(): List<DataUnitModel> {
        return unitRepository.findAll()
            .map { it.toModel() }
    }

    /* ------------------------------ SUPPORTED VALUE ------------------------------ */

    suspend fun getValueOrNull(id: SupportedValueId): SupportedValueModel? {
        return valueRepository.findById(id)
            .orElse(null)
            ?.toModel()
    }

    suspend fun getValue(id: SupportedValueId): SupportedValueModel {
        return getValueOrNull(id)
            ?: throw NotFoundException("SupportedValue", id)
    }

    suspend fun listValues(ids: List<SupportedValueId>): List<SupportedValueModel> {
        return valueRepository.findAllById(ids)
            .map(SupportedValueEntity::toModel)
    }

    suspend fun computeGlobalValueForConcept(id: InformationConceptId): String {
        val aggregatorType = getConcept(id).aggregator?.type
            ?: throw IllegalStateException("Aggregator not defined for concept $id")

        val supportedValues = valueRepository.findAllByConceptIdAndStatus(id, SupportedValueState.VALIDATED)
            .filter { !it.isRange }
        return when (aggregatorType) {
            AggregatorType.SUM -> SumAggregatorInput(supportedValues.map { it.value }).compute()
        }
    }
}

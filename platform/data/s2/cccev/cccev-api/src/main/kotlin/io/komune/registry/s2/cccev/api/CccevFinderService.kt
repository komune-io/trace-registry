package io.komune.registry.s2.cccev.api

import io.komune.registry.s2.cccev.api.entity.concept.InformationConceptRepository
import io.komune.registry.s2.cccev.api.entity.concept.toModel
import io.komune.registry.s2.cccev.api.entity.unit.DataUnitRepository
import io.komune.registry.s2.cccev.api.entity.unit.toModel
import io.komune.registry.s2.cccev.api.entity.value.SupportedValueEntity
import io.komune.registry.s2.cccev.api.entity.value.SupportedValueRepository
import io.komune.registry.s2.cccev.api.entity.value.toModel
import io.komune.registry.s2.cccev.domain.model.DataUnitModel
import io.komune.registry.s2.cccev.domain.model.InformationConceptModel
import io.komune.registry.s2.cccev.domain.model.SupportedValueModel
import io.komune.registry.s2.commons.exception.NotFoundException
import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.DataUnitIdentifier
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.SupportedValueId
import org.springframework.stereotype.Service

@Service
class CccevFinderService(
    private val conceptRepository: InformationConceptRepository,
    private val unitRepository: DataUnitRepository,
    private val valueRepository: SupportedValueRepository,
) {

    /* ------------------------------ INFORMATION CONCEPT ------------------------------ */

    suspend fun getConceptOrNull(id: InformationConceptId): InformationConceptModel? {
        return conceptRepository.findById(id)
            .orElse(null)
            ?.toModel()
    }

    suspend fun getConcept(id: InformationConceptId): InformationConceptModel {
        return getConceptOrNull(id)
            ?: throw NotFoundException("InformationConcept", id)
    }

    suspend fun getConceptByIdentifierOrNull(identifier: String): InformationConceptModel? {
        return conceptRepository.findByIdentifier(identifier)
            ?.toModel()
    }

    suspend fun listConcepts(): List<InformationConceptModel> {
        return conceptRepository.findAll()
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

    suspend fun list(ids: List<SupportedValueId>): List<SupportedValueModel> {
        return valueRepository.findAllById(ids)
            .map(SupportedValueEntity::toModel)
    }
}

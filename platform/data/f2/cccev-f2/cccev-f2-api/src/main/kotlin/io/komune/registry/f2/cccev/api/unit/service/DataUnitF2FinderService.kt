package io.komune.registry.f2.cccev.api.unit.service

import io.komune.registry.f2.cccev.api.unit.model.toDTO
import io.komune.registry.f2.cccev.api.unit.model.toTranslatedDTO
import io.komune.registry.f2.cccev.domain.unit.model.DataUnitDTOBase
import io.komune.registry.f2.cccev.domain.unit.model.DataUnitTranslatedDTOBase
import io.komune.registry.s2.cccev.api.CccevFinderService
import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.DataUnitIdentifier
import io.komune.registry.s2.commons.model.Language
import org.springframework.stereotype.Service

@Service
class DataUnitF2FinderService(
    private val cccevFinderService: CccevFinderService
) {
    suspend fun getOrNull(id: DataUnitId): DataUnitDTOBase? {
        return cccevFinderService.getUnitOrNull(id)?.toDTO()
    }

    suspend fun getTranslatedOrNull(id: DataUnitId, language: Language): DataUnitTranslatedDTOBase? {
        return cccevFinderService.getUnitOrNull(id)?.toTranslatedDTO(language)
    }

    suspend fun getByIdentifierOrNull(identifier: DataUnitIdentifier): DataUnitDTOBase? {
        return cccevFinderService.getUnitByIdentifierOrNull(identifier)?.toDTO()
    }

    suspend fun list(language: Language): List<DataUnitTranslatedDTOBase> {
        return cccevFinderService.listUnits().map { it.toTranslatedDTO(language) }
    }
}

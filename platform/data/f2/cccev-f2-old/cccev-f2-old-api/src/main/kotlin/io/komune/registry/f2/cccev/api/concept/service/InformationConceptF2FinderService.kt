package io.komune.registry.f2.cccev.api.concept.service

import io.komune.registry.api.commons.model.SimpleCache
import io.komune.registry.f2.cccev.api.concept.model.toComputedDTO
import io.komune.registry.f2.cccev.api.concept.model.toDTO
import io.komune.registry.f2.cccev.api.concept.model.toTranslatedDTO
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptComputedDTOBase
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptDTOBase
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptTranslatedDTOBase
import io.komune.registry.s2.cccev.api.CccevOldFinderService
import io.komune.registry.s2.cccev.domain.model.InformationConceptModel
import io.komune.registry.s2.cccev.domain.model.SupportedValueModel
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.api.ConceptFinderService
import org.springframework.stereotype.Service

@Service
class InformationConceptF2FinderService(
    private val cccevOldFinderService: CccevOldFinderService,
    private val conceptFinderService: ConceptFinderService
) {
    suspend fun get(id: InformationConceptId): InformationConceptDTOBase {
        return cccevOldFinderService.getConcept(id).toDTOCached()
    }

    suspend fun getOrNull(id: InformationConceptId): InformationConceptDTOBase? {
        return cccevOldFinderService.getConceptOrNull(id)?.toDTOCached()
    }

    suspend fun getTranslatedOrNull(id: InformationConceptId, language: Language): InformationConceptTranslatedDTOBase? {
        return cccevOldFinderService.getConceptOrNull(id)?.toTranslatedDTOCached(language)
    }

    suspend fun getByIdentifierOrNull(identifier: InformationConceptIdentifier): InformationConceptDTOBase? {
        return cccevOldFinderService.getConceptByIdentifierOrNull(identifier)?.toDTOCached()
    }

    suspend fun listTranslated(language: Language): List<InformationConceptTranslatedDTOBase> {
        val cache = Cache()
        return cccevOldFinderService.listConcepts()
            .filter { it.aggregator?.aggregatedConceptIds.isNullOrEmpty() }
            .map { it.toTranslatedDTOCached(language, cache) }
            .sortedBy { it.name ?: "z".repeat(10) }
    }

    suspend fun getGlobalValue(identifier: InformationConceptIdentifier, language: Language): InformationConceptComputedDTOBase? {
        val concept = cccevOldFinderService.getConceptByIdentifierOrNull(identifier)
            ?: return null

        if (concept.unit == null) {
            return null
        }
        val value = SupportedValueModel(
            id = "",
            conceptId = concept.id,
            unit = concept.unit!!,
            isRange = false,
            value = cccevOldFinderService.computeGlobalValueForConcept(concept.id),
            description = null,
            query = null
        )

        return concept.toComputedDTOCached(value, language)
    }

    private suspend fun InformationConceptModel.toDTOCached(cache: Cache = Cache()) = toDTO(
        getTheme = cache.themes::get,
        getUnit = cache.units::get
    )

    private suspend fun InformationConceptModel.toTranslatedDTOCached(language: Language, cache: Cache = Cache()) = toTranslatedDTO(
        language = language,
        getTheme = cache.themes::get,
        getUnit = cache.units::get
    )

    private suspend fun InformationConceptModel.toComputedDTOCached(
        value: SupportedValueModel, language: Language, cache: Cache = Cache()
    ) = toComputedDTO(
        value = value,
        language = language,
        getTheme = cache.themes::get,
        getUnit = cache.units::get,
        aggregatedValue = ""
    )

    private inner class Cache {
        val themes = SimpleCache(conceptFinderService::get)
        val units = SimpleCache(cccevOldFinderService::getUnit)
    }
}

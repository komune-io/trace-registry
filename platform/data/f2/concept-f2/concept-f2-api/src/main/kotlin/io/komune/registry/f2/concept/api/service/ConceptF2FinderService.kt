package io.komune.registry.f2.concept.api.service

import io.komune.registry.api.config.i18n.I18nService
import io.komune.registry.f2.concept.api.model.toDTO
import io.komune.registry.f2.concept.api.model.toTranslatedDTO
import io.komune.registry.f2.concept.domain.model.ConceptDTOBase
import io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTOBase
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.api.ConceptFinderService
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.concept.domain.ConceptIdentifier
import org.springframework.stereotype.Service

@Service
class ConceptF2FinderService(
    private val conceptFinderService: ConceptFinderService
) : I18nService() {

    suspend fun getOrNull(id: ConceptId): ConceptDTOBase? {
        return conceptFinderService.getOrNull(id)?.toDTO()
    }

    suspend fun getByIdentifierOrNull(identifier: ConceptIdentifier): ConceptDTOBase? {
        return conceptFinderService.getByIdentifierOrNull(identifier)?.toDTO()
    }

    suspend fun getTranslatedOrNull(id: ConceptId, language: Language, otherLanguageIfAbsent: Boolean): ConceptTranslatedDTOBase? {
        val concept = conceptFinderService.getOrNull(id)
            ?: return null

        val selectedLanguage = selectLanguage(concept.prefLabels.keys, language, otherLanguageIfAbsent)
            ?: return null

        return concept.toTranslatedDTO(selectedLanguage)
    }

    suspend fun listByScheme(scheme: String, language: Language): List<ConceptTranslatedDTOBase> {
        return conceptFinderService.listByScheme(scheme).map { it.toTranslatedDTO(language) }
    }
}

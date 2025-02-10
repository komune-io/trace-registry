//package io.komune.registry.program.s2.catalogue.api
//
//import io.komune.registry.api.config.i18n.I18nConfig
//import io.komune.registry.program.s2.catalogue.api.entity.CatalogueRepository
//import io.komune.registry.program.s2.catalogue.api.entity.toModel
//import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
//import io.komune.registry.s2.commons.model.Language
//import kotlin.jvm.optionals.getOrNull
//import org.springframework.beans.factory.annotation.Autowired
//import org.springframework.stereotype.Service
//
//@Service
//class CatalogueModelI18nService(
//    private val catalogueRepository: CatalogueRepository,
//) {
//
//    @Autowired
//    protected lateinit var i18nConfig: I18nConfig
//
//    /**
//     * Selects the language to use for a given set of languages.
//     * If the wanted language is null, an arbitrary language is selected.
//     */
//    protected fun selectLanguage(languages: Set<Language>, wantedLanguage: Language?, otherLanguageIfAbsent: Boolean): Language? {
//        return when {
//            languages.isEmpty() -> return null
//            wantedLanguage != null && wantedLanguage in languages -> return wantedLanguage
//            wantedLanguage != null && !otherLanguageIfAbsent -> return null
//            else -> i18nConfig.orderedLocales.firstOrNull { it in languages }
//                ?: languages.first()
//        }
//    }
//
//    /**
//     * 1. If the desired language is null, skip steps 2 and 4.
//     * 2. If the catalogue is already in the desired language, return it as is.
//     * 3. Else, if the catalogue has no translations:
//     *   - If the catalogue has a language and alternative language is allowed, return it as is.
//     *   - Otherwise, return null.
//     * 4. Else, if the desired language is not in the translations and alternative language is not allowed, return null.
//     * 5. Else, return the catalogue translated to the first existing translation found in the order:
//     *   - Desired language
//     *   - Configured ordered languages list
//     *   - First translation found if none of the above matched any translation.
//     */
//    suspend fun translate(catalogue: CatalogueModel, language: Language?, otherLanguageIfAbsent: Boolean): CatalogueModel? {
//        when {
//            language != null && catalogue.language == language -> return catalogue
//            catalogue.translationIds.isEmpty() -> return when {
//                otherLanguageIfAbsent && catalogue.language != null -> catalogue
//                else -> null
//            }
//            language != null && language !in catalogue.translationIds && !otherLanguageIfAbsent -> return null
//        }
//
//        val selectedLanguage = selectLanguage(catalogue.translationIds.keys, language, otherLanguageIfAbsent)
//            ?: return null
//        val translationId = catalogue.translationIds[selectedLanguage]!!
//
//        val translation = catalogueRepository.findById(translationId).getOrNull()!!.toModel()
//        return catalogue.copy(
//            language = translation.language,
//            title = translation.title,
//            description = translation.description,
//            datasetIds = catalogue.datasetIds + translation.datasetIds,
//            catalogueIds = catalogue.catalogueIds + translation.catalogueIds
//        )
//    }
//}

package io.komune.registry.f2.concept.api.model

import io.komune.registry.f2.concept.domain.model.ConceptDTOBase
import io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTOBase
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.domain.model.ConceptModel

fun ConceptModel.toDTO() = ConceptDTOBase(
    id = id,
    identifier = identifier,
    prefLabels = prefLabels,
    definitions = definitions,
    schemes = schemes
)

fun ConceptModel.toTranslatedDTO(language: Language) = ConceptTranslatedDTOBase(
    id = id,
    identifier = identifier,
    language = language,
    prefLabel = prefLabels[language].orEmpty(),
    definition = definitions[language].orEmpty(),
    schemes = schemes
)

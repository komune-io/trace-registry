package io.komune.registry.f2.entity.api.model

import io.komune.registry.f2.entity.domain.model.EntityRef
import io.komune.registry.f2.entity.domain.model.EntityType
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel

fun CatalogueModel.toRef() = EntityRef(
    id = id,
    identifier = identifier,
    type = EntityType.CATALOGUE,
    name = title,
    language = language,
    availableLanguages = availableLanguages.toList(),
)

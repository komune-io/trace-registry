package io.komune.registry.program.s2.catalogue.api.entity

import io.komune.registry.s2.catalogue.domain.model.CatalogueModel

fun CatalogueEntity.toModel(): CatalogueModel {
    return CatalogueModel(
        id = id,
        identifier = identifier,
        status = status,
        homepage = homepage,
        title = title,
        type = type,
        language = language,
        structure = structure,
        img = "/catalogues/${id}/img",
        description = description,
        translations = translations,
        catalogues = catalogues.toList(),
        datasets = datasets.toList(),
        themes = themes.toList(),
        creator = creator,
        publisher = publisher,
        validator = validator,
        accessRights = accessRights,
        license = license,
        hidden = hidden,
        issued = issued,
        modified = modified,
    )
}

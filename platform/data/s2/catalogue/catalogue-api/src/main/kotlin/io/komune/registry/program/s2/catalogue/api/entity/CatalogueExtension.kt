package io.komune.registry.program.s2.catalogue.api.entity

import io.komune.registry.s2.catalogue.domain.model.CatalogueModel


fun CatalogueEntity.toCatalogue(): CatalogueModel {
    return CatalogueModel(
        id = id,
        identifier = identifier,
        status = status,
        homepage = homepage,
        title = title,
        type = type,
        structure = structure,
        img = img?.let {"/catalogues/${id}/logo" },
        description = description,
        catalogues = catalogues.toList(),
        datasets = datasets.toList(),
        themes = themes.toList(),
        creator = creator,
        publisher = publisher,
        validator = validator,
        accessRights = accessRights,
        license = license,
        issued = issued,
        modified = modified,
    )
}

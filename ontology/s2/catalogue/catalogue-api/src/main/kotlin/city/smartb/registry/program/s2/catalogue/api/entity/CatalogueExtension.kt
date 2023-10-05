package city.smartb.registry.program.s2.catalogue.api.entity

import city.smartb.registry.s2.catalogue.domain.model.CatalogueModel


fun CatalogueEntity.toCatalogue(): CatalogueModel {
    return CatalogueModel(
        id = id,
        identifier = identifier,
        status = status,
        homepage = homepage,
        title = title,
        type = type,
        description = description,
        catalogues = catalogues,
        themes = themes
    )
}

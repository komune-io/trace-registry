package city.smartb.registry.program.s2.catalogue.api.entity

import city.smartb.registry.s2.catalogue.domain.model.DCatApCatalogueModel

fun CatalogueEntity.toCatalogue() = DCatApCatalogueModel(
    identifier = identifier,
    status = status,
    homepage = homepage,
    title = title,
)

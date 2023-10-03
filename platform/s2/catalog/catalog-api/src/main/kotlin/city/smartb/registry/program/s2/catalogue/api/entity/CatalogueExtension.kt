package city.smartb.registry.program.s2.catalogue.api.entity

import city.smartb.registry.s2.catalogue.domain.model.DCatApCatalogModel

fun CatalogueEntity.toCatalogue() = DCatApCatalogModel(
    identifier = identifier,
    status = status,
    homepage = homepage,
    title = title,
)

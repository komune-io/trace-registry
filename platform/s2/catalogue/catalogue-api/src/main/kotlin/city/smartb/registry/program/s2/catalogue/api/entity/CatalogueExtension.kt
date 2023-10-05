package city.smartb.registry.program.s2.catalogue.api.entity

import city.smartb.registry.s2.catalogue.domain.model.CatalogueModel


fun CatalogueEntity.toCatalogue(
    catalogueRepository: CatalogueRepository
): CatalogueModel {
    val cataloguesModel = catalogues.map {
        catalogueRepository.findById(it).orElse(null)
    }.map {
        CatalogueModel(
            id = it.id,
            identifier = identifier,
            status = status,
            homepage = homepage,
            title = title,
            type = type,
            catalogues = emptyList(),
            description = description,
        )
    }
    return CatalogueModel(
        id = id,
        identifier = identifier,
        status = status,
        homepage = homepage,
        title = title,
        type = type,
        description = description,
        catalogues = cataloguesModel,
    )
}

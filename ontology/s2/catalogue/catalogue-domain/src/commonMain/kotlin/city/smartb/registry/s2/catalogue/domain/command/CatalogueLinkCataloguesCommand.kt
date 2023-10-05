package city.smartb.registry.s2.catalogue.domain.command

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueLinkCataloguesCommand(
    override val id: CatalogueId,
    val catalogues: List<CatalogueId> = emptyList()
): CatalogueCommand

@Serializable
data class CatalogueLinkedCataloguesEvent(
    override val id: CatalogueId,
    val catalogues: List<CatalogueId> = emptyList(),
    override val date: Long
): CatalogueEvent

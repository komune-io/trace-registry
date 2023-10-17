package city.smartb.registry.s2.catalogue.domain.command

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueLinkDatasetsCommand(
    override val id: CatalogueId,
    val datasets: List<CatalogueId> = emptyList()
): CatalogueCommand

@Serializable
data class CatalogueLinkedDatasetsEvent(
    override val id: CatalogueId,
    val datasets: List<CatalogueId> = emptyList(),
    override val date: Long
): CatalogueEvent

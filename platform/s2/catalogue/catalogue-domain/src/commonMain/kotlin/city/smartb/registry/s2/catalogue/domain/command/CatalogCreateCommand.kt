package city.smartb.registry.s2.catalogue.domain.command

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueEvent
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueInitCommand
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueCreateCommand(
    val identifier: CatalogueIdentifier,
    val title: String,
    val description: String?,
): CatalogueInitCommand


@Serializable
data class CatalogueCreatedEvent(
    override val id: CatalogueId,
    val identifier: CatalogueIdentifier,
    val title: String,
    val description: String?,
    override val date: Long,
): CatalogueEvent

package city.smartb.registry.s2.catalogue.domain.command

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueEvent
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueInitCommand
import kotlinx.serialization.Serializable

data class CatalogueCreateCommand(
    val name: String,
    val identifier: CatalogueIdentifier,
): CatalogueInitCommand

@Serializable
data class CatalogueCreatedEvent(
    override val id: CatalogueId,
    val identifier: CatalogueIdentifier,
    override val date: Long,
): CatalogueEvent

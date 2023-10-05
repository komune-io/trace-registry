package city.smartb.registry.s2.catalogue.domain.command

import cccev.s2.requirement.domain.D2RequirementPage
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.model.SkosConceptId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable


@Serializable
data class CatalogueAddThemesCommand(
    override val id: CatalogueId,
    val themes: List<CatalogueId> = emptyList()
): CatalogueCommand


@Serializable
data class CatalogueAddedThemesEvent(
    override val id: CatalogueId,
    val themes: List<SkosConceptId> = emptyList(),
    override val date: Long
): CatalogueEvent

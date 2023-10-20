package city.smartb.registry.s2.dataset.domain.command

import city.smartb.registry.dsl.skos.domain.model.SkosConcept
import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import kotlinx.serialization.Serializable


@Serializable
data class DatasetLinkThemesCommand(
    override val id: DatasetId,
    val themes: List<SkosConcept> = emptyList()
): DatasetCommand


@Serializable
data class DatasetLinkedThemesEvent(
    override val id: DatasetId,
    val themes: List<SkosConcept> = emptyList(),
    override val date: Long
): DatasetEvent

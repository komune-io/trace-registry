package io.komune.registry.s2.dataset.domain.command

import io.komune.registry.dsl.skos.domain.model.SkosConcept
import io.komune.registry.s2.commons.model.DatasetId
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

package io.komune.registry.s2.dataset.domain.command

import io.komune.registry.dsl.dcat.domain.model.Activity
import io.komune.registry.dsl.dcat.domain.model.Agent
import io.komune.registry.dsl.skos.domain.model.SkosConcept
import io.komune.registry.dsl.skos.domain.model.SkosConceptScheme
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import io.komune.registry.s2.dataset.domain.automate.DatasetIdentifier
import kotlinx.serialization.Serializable

@Serializable
data class DatasetUpdateCommand(
    override val id: DatasetId,
    val title: String,
    val identifier: String,
    val type: String,
    val temporalResolution: String? = null,
    val wasGeneratedBy: Activity? = null,
    val accessRights: String? = null,
    val conformsTo: List<SkosConceptScheme>? = null,
    val creator: Agent? = null,
    val description: String? = null,
    val releaseDate: String? = null,
    val updateDate: String? = null,
    val language: List<String>? = null,
    val publisher: Agent? = null,
    val theme: List<SkosConcept>? = null,
    val keywords: List<String>? = null,
    val landingPage: String? = null,
    val version: String? = null,
    val versionNotes: String? = null,
    val length: Int? = null,
    val img: String?,
): DatasetCommand

@Serializable
data class DatasetUpdatedEvent(
    override val id: DatasetId,
    val identifier: DatasetIdentifier,
    val title: String,
    val type: String,
    val temporalResolution: String? = null,
    val wasGeneratedBy: Activity? = null,
    val accessRights: String? = null,
    val conformsTo: List<SkosConceptScheme>? = null,
    val creator: Agent? = null,
    val description: String? = null,
    val releaseDate: String? = null,
    val updateDate: String? = null,
    val language: List<String>? = null,
    val publisher: Agent? = null,
    val theme: List<SkosConcept>? = null,
    val keywords: List<String>? = null,
    val landingPage: String? = null,
    val version: String? = null,
    val versionNotes: String? = null,
    val length: Int? = null,
    val img: String?,
    override val date: Long,
): DatasetEvent

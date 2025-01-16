package io.komune.registry.s2.dataset.domain.command

import io.komune.registry.dsl.dcat.domain.model.Activity
import io.komune.registry.dsl.dcat.domain.model.Agent
import io.komune.registry.dsl.skos.domain.model.SkosConcept
import io.komune.registry.dsl.skos.domain.model.SkosConceptScheme
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import kotlinx.serialization.Serializable

@Serializable
data class DatasetCreateCommand(
    val identifier: String,
    val title: String,
    val type: String,
    val description: String? = null,
    val language: List<String>? = null,
    val wasGeneratedBy: Activity? = null,
    val source: String? = null,
    val creator: Agent? = null,
    val publisher: Agent? = null,
    val validator: Agent? = null,
    val accessRights: String? = null,
    val license: String? = null,
    val temporalResolution: String? = null,
    val conformsTo: List<SkosConceptScheme>? = null,
    val format: String?,
    val theme: List<SkosConcept>? = null,
    val keywords: List<String>? = null,
    val landingPage: String? = null,
    val homepage: String? = null,
    val version: String? = null,
    val versionNotes: String? = null,
    val length: Int? = null,
    val releaseDate: String? = null,
): DatasetInitCommand

sealed interface DatasetDataEvent : DatasetEvent {
    override val id: DatasetId
    val title: String
    val type: String
    val description: String?
    val language: List<String>?
    val wasGeneratedBy: Activity?
    val source: String?
    val creator: Agent?
    val publisher: Agent?
    val validator: Agent?
    val accessRights: String?
    val license: String?
    val temporalResolution: String?
    val conformsTo: List<SkosConceptScheme>?
    val format: String?
    val theme: List<SkosConcept>?
    val keywords: List<String>?
    val landingPage: String?
    val homepage: String?
    val version: String?
    val versionNotes: String?
    val length: Int?
    val releaseDate: String?
    override val date: Long
}

@Serializable
data class DatasetCreatedEvent(
    override val id: DatasetId,
    val identifier: String,
    override val title: String,
    override val type: String,
    override val description: String? = null,
    override val language: List<String>? = null,
    override val wasGeneratedBy: Activity? = null,
    override val source: String? = null,
    override val creator: Agent? = null,
    override val publisher: Agent? = null,
    override val validator: Agent? = null,
    override val accessRights: String? = null,
    override val license: String? = null,
    override val temporalResolution: String? = null,
    override val conformsTo: List<SkosConceptScheme>? = null,
    override val format: String?,
    override val theme: List<SkosConcept>? = null,
    override val keywords: List<String>? = null,
    override val landingPage: String? = null,
    override val homepage: String? = null,
    override val version: String? = null,
    override val versionNotes: String? = null,
    override val length: Int? = null,
    override val releaseDate: String? = null,
    override val date: Long,
): DatasetDataEvent

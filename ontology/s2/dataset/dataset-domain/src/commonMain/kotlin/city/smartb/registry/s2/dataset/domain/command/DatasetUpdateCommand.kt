package city.smartb.registry.s2.dataset.domain.command

import city.smartb.registry.s2.catalogue.domain.model.Activity
import city.smartb.registry.s2.catalogue.domain.model.Agent
import city.smartb.registry.s2.catalogue.domain.model.SkosConcept
import city.smartb.registry.s2.catalogue.domain.model.SkosConceptScheme
import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import city.smartb.registry.s2.dataset.domain.automate.DatasetIdentifier
import kotlinx.serialization.Serializable

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

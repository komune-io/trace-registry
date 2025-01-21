package io.komune.registry.s2.dataset.domain.model

import io.komune.registry.dsl.dcat.domain.model.Activity
import io.komune.registry.dsl.dcat.domain.model.Agent
import io.komune.registry.dsl.skos.domain.model.SkosConcept
import io.komune.registry.dsl.skos.domain.model.SkosConceptScheme
import io.komune.registry.s2.dataset.domain.automate.DatasetState
import kotlinx.serialization.Serializable

@Serializable
data class DatasetModel(
    val id: String,
    val identifier: String,
    val status: DatasetState,
    val title: String,
    val img: String?,
    val type: String,
    val description: String?,
    val language: String,
    val wasGeneratedBy: Activity?,
    val source: String?,
    val creator: Agent?,
    val publisher: Agent?,
    val validator: Agent?,
    val accessRights: String?,
    val license: String?,
    val temporalResolution: String?,
    val conformsTo: Collection<SkosConceptScheme>?,
    val format: String?,
    val themes: Collection<SkosConcept>?,
    val keywords: Collection<String>?,
    val homepage: String?,
    val landingPage: String?,
    val version: String?,
    val versionNotes: String?,
    val length: Int?,
    val issued: Long?,
    val modified: Long?,
    val releaseDate: String?,
    val distributions: List<DistributionModel>?
)

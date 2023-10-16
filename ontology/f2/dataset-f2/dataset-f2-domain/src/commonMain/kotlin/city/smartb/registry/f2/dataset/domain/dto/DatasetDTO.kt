package city.smartb.registry.f2.dataset.domain.dto

import city.smartb.registry.s2.catalogue.domain.model.Activity
import city.smartb.registry.s2.catalogue.domain.model.Agent
import city.smartb.registry.s2.dataset.domain.automate.DatasetState
import city.smartb.registry.s2.catalogue.domain.model.DcatDataset
import city.smartb.registry.s2.catalogue.domain.model.SkosConcept
import city.smartb.registry.s2.catalogue.domain.model.SkosConceptScheme
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

@JsExport
interface DatasetDTO{
    val id: String
    val identifier: String
    val type: String
    val temporalResolution: String?
    val wasGeneratedBy: Activity?
    val accessRights: String?
    val conformsTo: List<SkosConceptScheme>?
    val creator: Agent?
    val description: String?
    val title: String
    val releaseDate: String?
    val updateDate: String?
    val language: List<String>?
    val publisher: Agent?
    val theme: List<SkosConcept>?
    val keywords: List<String>?
    val landingPage: String?
    val version: String?
    val versionNotes: String?
    val length: Int?
    val img: String?
    val datasets: List<DatasetRefDTOBase>?
    val themes: List<SkosConcept>?
    val status: DatasetState

    val homepage: String?
    val display: String?
}

@Serializable
data class DatasetDTOBase(
    override val id: String,
    override val identifier: String,
    override val type: String,
    override val temporalResolution: String? = null,
    override val wasGeneratedBy: Activity? = null,
    override val accessRights: String? = null,
    override val conformsTo: List<SkosConceptScheme>? = null,
    override val creator: Agent? = null,
    override val description: String? = null,
    override val title: String,
    override val releaseDate: String? = null,
    override val updateDate: String? = null,
    override val language: List<String>? = null,
    override val publisher: Agent? = null,
    override val theme: List<SkosConcept>? = null,
    override val keywords: List<String>? = null,
    override val landingPage: String? = null,
    override val version: String? = null,
    override val versionNotes: String? = null,
    override val length: Int? = null,
    override val img: String? = null,
    override val datasets: List<DatasetRefDTOBase>? = null,
    override val themes: List<SkosConcept>? = null,
    override val status: DatasetState,
    override val homepage: String? = null,
    override val display: String? = null,

): DatasetDTO

@JsExport
interface DatasetRefDTO {
    val id: String
    val identifier: String
    val title: String
    val type: String
    val description: String?
    val homepage: String?
    val img: String?
    val display: String?
    val themes: List<SkosConcept>?
    val status: DatasetState?
}


@Serializable
data class DatasetRefDTOBase(
    override val id: String,
    override val identifier: String,
    override val title: String,
    override val type: String,
    override val description: String? = null,
    override val homepage: String? = null,
    override val img: String? = null,
    override val display: String? = null,
    override val themes: List<SkosConcept>? = null,
    override val status: DatasetState? = null,
): DatasetRefDTO

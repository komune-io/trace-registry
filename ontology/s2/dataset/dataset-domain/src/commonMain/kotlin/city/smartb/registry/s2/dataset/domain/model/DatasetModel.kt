package city.smartb.registry.s2.dataset.domain.model

import city.smartb.registry.s2.catalogue.domain.model.Activity
import city.smartb.registry.s2.catalogue.domain.model.Agent
import city.smartb.registry.s2.catalogue.domain.model.Attribution
import city.smartb.registry.s2.catalogue.domain.model.CataloguedResource
import city.smartb.registry.s2.catalogue.domain.model.DcatDistribution
import city.smartb.registry.s2.catalogue.domain.model.LicenseDocument
import city.smartb.registry.s2.catalogue.domain.model.Location
import city.smartb.registry.s2.catalogue.domain.model.PeriodOfTime
import city.smartb.registry.s2.catalogue.domain.model.Policy
import city.smartb.registry.s2.catalogue.domain.model.Relationship
import city.smartb.registry.s2.catalogue.domain.model.Rights
import city.smartb.registry.s2.catalogue.domain.model.SkosConcept
import city.smartb.registry.s2.catalogue.domain.model.SkosConceptScheme
import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import city.smartb.registry.s2.dataset.domain.automate.DatasetState
import kotlinx.serialization.Serializable

@Serializable
data class DatasetModel(
    val id: String,
    val identifier: String,
    val type: String,
    val temporalResolution: String? = null,
    val wasGeneratedBy: Activity? = null,
    val accessRights: String? = null,
    val conformsTo: List<SkosConceptScheme>? = null,
    val creator: Agent? = null,
    val description: String? = null,
    val title: String,
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
    val img: String? = null,
    val datasets: List<DatasetId>? = null,
    val themes: List<SkosConcept>? = null,
    val status: DatasetState,
)


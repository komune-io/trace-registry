package city.smartb.registry.s2.catalogue.domain.model

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueState
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

@JsExport
interface DcatApCatalogue: CataloguedResource {
    override val identifier: String
    val homepage: String?
    val img: String?
    val themes: List<SkosConcept>?
    val cataloguedResource: List<CataloguedResource>?
    val datasets: List<DcatDataset>?
    val services: List<DataService>?
    val catalogues: List<DcatApCatalogue>?
    val catalogueRecords: List<DcatCatalogueRecord>?
}

@JsExport
interface DcatCatalogue: CataloguedResource {
    override val identifier: String
    val homepage: String
    val img: String
    val themes: List<SkosConcept>?
    val cataloguedResources: List<CataloguedResource>?
    val datasets: List<DcatDataset>?
    val services: List<DataService>?
    val catalogues: List<DcatCatalogue>?
    val catalogueRecords: List<DcatCatalogueRecord>?
}

@JsExport
interface DcatCatalogueRecord {
    val identifier: String
    val title: String
    val description: String?
    val listingDate: String?
    val updateDate: String?
    val primaryTopic: CataloguedResource?
    val conformsTo: List<SkosConceptScheme>?
}

@JsExport
interface DcatDistribution {
    val identifier: String
    val accessURL: String?
    val accessService: DataService?
    val downloadURL: String?
    val byteSize: Long?
    val spatialResolution: String?
    val temporalResolution: String?
    val conformsTo: List<SkosConceptScheme>?
    val mediaType: String?
    val format: String?
    val compressionFormat: String?
    val packagingFormat: String?
    val checksum: Checksum?
}

@JsExport
interface DataService {
    val identifier: String
    val endpointURL: String
    val endpointDescription: String?
    val servesDataset: List<DcatDataset>?
}

@JsExport
sealed interface CataloguedResource {
    val title: String
    val type: String
    val accessRights: String?
    val conformsTo: List<SkosConceptScheme>?
    val contactPoint: String?
    val creator: Agent?
    val description: String?
    val releaseDate: String?
    val updateDate: String?
    val language: List<String>?
    val publisher: Agent?
    val identifier: String?
    val theme: List<SkosConcept>?
    val relation: List<Relationship>?
    val qualifiedRelation: List<Relationship>?
    val keywords: List<String>?
    val landingPage: String?
    val qualifiedAttribution: List<Attribution>?
    val license: LicenseDocument?
    val rights: Rights?
    val hasPart: List<CataloguedResource>?
    val hasPolicy: List<Policy>?
    val isReferencedBy: List<CataloguedResource>?
    val previousVersion: CataloguedResource?
    val hasVersion: List<CataloguedResource>?
    val currentVersion: CataloguedResource?
    val replaces: CataloguedResource?
    val version: String?
    val versionNotes: String?
    val status: CatalogueState?
}

@Serializable
data class Agent(
    val identifier: String,
    // Déjà définie précédemment
)

@Serializable
data class Relationship(
    val relation: Agent,
    val hadRole: Role
)

@Serializable
data class Role(
    val identifier: String,
    // Aucune propriété spécifique dans DCAT
)

@Serializable
data class PeriodOfTime(
    val startDate: String? = null,
    val endDate: String? = null,
    val beginning: String? = null,
    val end: String? = null
)

@Serializable
data class Location(
    val geometry: String? = null,
    val boundingBox: String? = null,
    val centroid: String? = null
)

@Serializable
data class Checksum(
    val algorithm: String,
    val checksumValue: String
)

@Serializable
data class Policy(
    val identifier: String,
)

@Serializable
data class Rights(
    val identifier: String,
)
@Serializable
data class Attribution(
    val identifier: String,
)

@Serializable
data class Activity(
    val identifier: String,
)
@Serializable
data class LicenseDocument(
    val identifier: String,
)

@Serializable
class DCatApCatalogueModel(
    override val identifier: String,
    override val homepage: String? = null,
    override val img: String? = null,
    override val type: String,
    override val themes: List<SkosConcept>? = null,
    override val cataloguedResource: List<CataloguedResource>? = null,
    override val datasets: List<DcatDataset>? = null,
    override val services: List<DataService>? = null,
    override val catalogues: List<DCatApCatalogueModel>? = null,
    override val catalogueRecords: List<DcatCatalogueRecord>? = null,
    override val accessRights: String? = null,
    override val conformsTo: List<SkosConceptScheme>? = null,
    override val contactPoint: String? = null,
    override val creator: Agent? = null,
    override val description: String? = null,
    override val title: String,
    override val releaseDate: String? = null,
    override val updateDate: String? = null,
    override val language: List<String>? = null,
    override val publisher: Agent? = null,
    override val theme: List<SkosConcept>? = null,
    override val relation: List<Relationship>? = null,
    override val qualifiedRelation: List<Relationship>? = null,
    override val keywords: List<String>? = null,
    override val landingPage: String? = null,
    override val qualifiedAttribution: List<Attribution>? = null,
    override val license: LicenseDocument? = null,
    override val rights: Rights? = null,
    override val hasPart: List<CataloguedResource>? = null,
    override val hasPolicy: List<Policy>? = null,
    override val isReferencedBy: List<CataloguedResource>? = null,
    override val previousVersion: CataloguedResource? = null,
    override val hasVersion: List<CataloguedResource>? = null,
    override val currentVersion: CataloguedResource? = null,
    override val replaces: CataloguedResource? = null,
    override val version: String? = null,
    override val versionNotes: String? = null,
    override val status: CatalogueState? = null,
): DcatApCatalogue

@Serializable
data class DcatCatalogModel(
    override val identifier: String,
    override val homepage: String,
    override val img: String,
    override val type: String,
    override val themes: List<SkosConcept>? = null,
    override val cataloguedResources: List<CataloguedResource>? = null,
    override val datasets: List<DcatDataset>? = null,
    override val services: List<DataService>? = null,
    override val catalogues: List<DcatCatalogue>? = null,
    override val catalogueRecords: List<DcatCatalogueRecord>? = null,
//    override val distributions: List<DcatDistribution>? = null,
//    override val frequency: String? = null,
//    override val spatialCoverage: Location? = null,
//    override val spatialResolution: String? = null,
//    override val temporalCoverage: PeriodOfTime? = null,
//    override val temporalResolution: String? = null,
//    override val wasGeneratedBy: Activity? = null,
    override val accessRights: String? = null,
    override val conformsTo: List<SkosConceptScheme>? = null,
    override val contactPoint: String? = null,
    override val creator: Agent? = null,
    override val description: String? = null,
    override val title: String,
    override val releaseDate: String? = null,
    override val updateDate: String? = null,
    override val language: List<String>? = null,
    override val publisher: Agent? = null,
    override val theme: List<SkosConcept>? = null,
    override val relation: List<Relationship>? = null,
    override val qualifiedRelation: List<Relationship>? = null,
    override val keywords: List<String>? = null,
    override val landingPage: String? = null,
    override val qualifiedAttribution: List<Attribution>? = null,
    override val license: LicenseDocument? = null,
    override val rights: Rights? = null,
    override val hasPart: List<CataloguedResource>? = null,
    override val hasPolicy: List<Policy>? = null,
    override val isReferencedBy: List<CataloguedResource>? = null,
    override val previousVersion: CataloguedResource? = null,
    override val hasVersion: List<CataloguedResource>? = null,
    override val currentVersion: CataloguedResource? = null,
    override val replaces: CataloguedResource? = null,
    override val version: String? = null,
    override val versionNotes: String? = null,
    override val status: CatalogueState? = null,
): DcatCatalogue

@Serializable
data class DcatCatalogRecordModel(
    override val identifier: String,
    override val title: String,
    override val description: String? = null,
    override val listingDate: String? = null,
    override val updateDate: String? = null,
    override val primaryTopic: CataloguedResource? = null,
    override val conformsTo: List<SkosConceptScheme>? = null
): DcatCatalogueRecord

@Serializable
data class DcatDistributionModel(
    override val identifier: String,
    override val accessURL: String? = null,
    override val accessService: DataService? = null,
    override val downloadURL: String? = null,
    override val byteSize: Long? = null,
    override val spatialResolution: String? = null,
    override val temporalResolution: String? = null,
    override val conformsTo: List<SkosConceptScheme>? = null,
    override val mediaType: String? = null,
    override val format: String? = null,
    override val compressionFormat: String? = null,
    override val packagingFormat: String? = null,
    override val checksum: Checksum? = null
): DcatDistribution

@Serializable
data class DataServiceModel(
    override val identifier: String,
    override val endpointURL: String,
    override val endpointDescription: String? = null,
    override val servesDataset: List<DcatDataset>? = null
): DataService

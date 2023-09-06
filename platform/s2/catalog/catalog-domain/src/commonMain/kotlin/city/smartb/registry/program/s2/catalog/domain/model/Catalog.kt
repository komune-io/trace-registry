package city.smartb.registry.program.s2.catalog.domain.model

interface DcatApCatalog: DcatDataset {
    override val identifier: String
    val homepage: String
    val themes: List<SkosConcept>?
    val catalogedResources: List<CatalogedResource>?
    val datasets: List<DcatDataset>?
    val services: List<DataService>?
    val catalogs: List<DcatApCatalog>?
    val catalogRecords: List<DcatCatalogRecord>?
}

// DCAT-AP: This interface represents a Dataset Series, a collection of related Datasets.
interface DcatApDatasetSeries : DcatDataset {
    /**
     * Last modification date of the Dataset Series
     */
    val modificationDate: String?

    /**
     * Geographical area covered by the Dataset Series
     */
    val geographicalCoverage: Location?

    /**
     * First dataset in the Series
     */
    val first: DcatApDatasetMember?

    /**
     * Last dataset in the Series
     */
    val last: DcatApDatasetMember?

    /**
     * List of Datasets that are part of this Series
     */
    val seriesMember: List<DcatApDatasetMember>?
}

// DCAT-AP: This interface represents a Dataset that is a member of a Dataset Series.
interface DcatApDatasetMember : DcatDataset {
    /**
     * Title of the Dataset Member
     */
    override val title: String

    /**
     * Reference to the Dataset Series this Dataset is part of
     */
    val inSeries: DcatApDatasetSeries

    /**
     * Reference to the previous Dataset in the Series
     */
    val previous: DcatApDatasetMember?

    /**
     * Reference to the next Dataset in the Series
     */
    val next: DcatApDatasetMember?
}

interface DcatCatalog: DcatDataset {
    override val identifier: String
    val homepage: String
    val themes: List<SkosConcept>?
    val catalogedResources: List<CatalogedResource>?
    val datasets: List<DcatDataset>?
    val service: List<DataService>?
    val catalogs: List<DcatCatalog>?
    val catalogRecords: List<DcatCatalogRecord>?
}

interface DcatCatalogRecord {
    val identifier: String
    val title: String
    val description: String?
    val listingDate: String
    val updateDate: String?
    val primaryTopic: CatalogedResource?
    val conformsTo: List<SkosConceptScheme>?
}

sealed interface DcatDataset: CatalogedResource {
    override val identifier: String
    val distributions: List<DcatDistribution>?
    val frequency: String?
    val spatialCoverage: Location?
    val spatialResolution: String?
    val temporalCoverage: PeriodOfTime?
    val temporalResolution: String?
    val wasGeneratedBy: Activity?
}


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


interface DataService {
    val identifier: String
    val endpointURL: String
    val endpointDescription: String?
    val servesDataset: List<DcatDataset>?
}


sealed interface CatalogedResource {
    val accessRights: String?
    val conformsTo: List<SkosConceptScheme>?
    val contactPoint: String?
    val creator: Agent?
    val description: String?
    val title: String
    val releaseDate: String?
    val updateDate: String?
    val language: List<String>?
    val publisher: Agent?
    val identifier: String?
    val theme: List<SkosConcept>?
    val type: String?
    val relation: List<Relationship>?
    val qualifiedRelation: List<Relationship>?
    val keywords: List<String>?
    val landingPage: String?
    val qualifiedAttribution: List<Attribution>?
    val license: LicenseDocument?
    val rights: Rights?
    val hasPart: List<CatalogedResource>?
    val hasPolicy: List<Policy>?
    val isReferencedBy: List<CatalogedResource>?
    val previousVersion: CatalogedResource?
    val hasVersion: List<CatalogedResource>?
    val currentVersion: CatalogedResource?
    val replaces: CatalogedResource?
    val version: String?
    val versionNotes: String?
    val status: String?
}

data class Agent(
    val identifier: String,
    // Déjà définie précédemment
)

data class Relationship(
    val relation: Agent,
    val hadRole: Role
)

data class Role(
    val identifier: String,
    // Aucune propriété spécifique dans DCAT
)

data class PeriodOfTime(
    val startDate: String? = null,
    val endDate: String? = null,
    val beginning: String? = null,
    val end: String? = null
)

data class Location(
    val geometry: String? = null,
    val boundingBox: String? = null,
    val centroid: String? = null
)

data class Checksum(
    val algorithm: String,
    val checksumValue: String
)

data class Policy(
    val identifier: String,
)

data class Rights(
    val identifier: String,
)

data class Attribution(
    val identifier: String,
)

data class Activity(
    val identifier: String,
)
data class LicenseDocument(
    val identifier: String,
)

class DcatApCatalogModel(
    override val identifier: String,
    override val homepage: String,
    override val themes: List<SkosConcept>? = null,
    override val catalogedResources: List<CatalogedResource>? = null,
    override val datasets: List<DcatDataset>? = null,
    override val services: List<DataService>? = null,
    override val catalogs: List<DcatApCatalog>? = null,
    override val catalogRecords: List<DcatCatalogRecord>? = null,
    override val distributions: List<DcatDistribution>? = null,
    override val frequency: String? = null,
    override val spatialCoverage: Location? = null,
    override val spatialResolution: String? = null,
    override val temporalCoverage: PeriodOfTime? = null,
    override val temporalResolution: String? = null,
    override val wasGeneratedBy: Activity? = null,
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
    override val type: String? = null,
    override val relation: List<Relationship>? = null,
    override val qualifiedRelation: List<Relationship>? = null,
    override val keywords: List<String>? = null,
    override val landingPage: String? = null,
    override val qualifiedAttribution: List<Attribution>? = null,
    override val license: LicenseDocument? = null,
    override val rights: Rights? = null,
    override val hasPart: List<CatalogedResource>? = null,
    override val hasPolicy: List<Policy>? = null,
    override val isReferencedBy: List<CatalogedResource>? = null,
    override val previousVersion: CatalogedResource? = null,
    override val hasVersion: List<CatalogedResource>? = null,
    override val currentVersion: CatalogedResource? = null,
    override val replaces: CatalogedResource? = null,
    override val version: String? = null,
    override val versionNotes: String? = null,
    override val status: String? = null
): DcatApCatalog

class DcatApDatasetMemberModel(
    override val title: String,
    override val inSeries: DcatApDatasetSeries,
    override val previous: DcatApDatasetMember? = null,
    override val next: DcatApDatasetMember? = null,
    override val identifier: String,
    override val distributions: List<DcatDistribution>? = null,
    override val frequency: String? = null,
    override val spatialCoverage: Location? = null,
    override val spatialResolution: String? = null,
    override val temporalCoverage: PeriodOfTime? = null,
    override val temporalResolution: String? = null,
    override val wasGeneratedBy: Activity? = null,
    override val accessRights: String? = null,
    override val conformsTo: List<SkosConceptScheme>? = null,
    override val contactPoint: String? = null,
    override val creator: Agent? = null,
    override val description: String? = null,
    override val releaseDate: String? = null,
    override val updateDate: String? = null,
    override val language: List<String>? = null,
    override val publisher: Agent? = null,
    override val theme: List<SkosConcept>? = null,
    override val type: String? = null,
    override val relation: List<Relationship>? = null,
    override val qualifiedRelation: List<Relationship>? = null,
    override val keywords: List<String>? = null,
    override val landingPage: String? = null,
    override val qualifiedAttribution: List<Attribution>? = null,
    override val license: LicenseDocument? = null,
    override val rights: Rights? = null,
    override val hasPart: List<CatalogedResource>? = null,
    override val hasPolicy: List<Policy>? = null,
    override val isReferencedBy: List<CatalogedResource>? = null,
    override val previousVersion: CatalogedResource? = null,
    override val hasVersion: List<CatalogedResource>? = null,
    override val currentVersion: CatalogedResource? = null,
    override val replaces: CatalogedResource? = null,
    override val version: String? = null,
    override val versionNotes: String? = null,
    override val status: String? = null
): DcatApDatasetMember

data class DcatCatalogModel(
    override val identifier: String,
    override val homepage: String,
    override val themes: List<SkosConcept>? = null,
    override val catalogedResources: List<CatalogedResource>? = null,
    override val datasets: List<DcatDataset>? = null,
    override val service: List<DataService>? = null,
    override val catalogs: List<DcatCatalog>? = null,
    override val catalogRecords: List<DcatCatalogRecord>? = null,
    override val distributions: List<DcatDistribution>? = null,
    override val frequency: String? = null,
    override val spatialCoverage: Location? = null,
    override val spatialResolution: String? = null,
    override val temporalCoverage: PeriodOfTime? = null,
    override val temporalResolution: String? = null,
    override val wasGeneratedBy: Activity? = null,
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
    override val type: String? = null,
    override val relation: List<Relationship>? = null,
    override val qualifiedRelation: List<Relationship>? = null,
    override val keywords: List<String>? = null,
    override val landingPage: String? = null,
    override val qualifiedAttribution: List<Attribution>? = null,
    override val license: LicenseDocument? = null,
    override val rights: Rights? = null,
    override val hasPart: List<CatalogedResource>? = null,
    override val hasPolicy: List<Policy>? = null,
    override val isReferencedBy: List<CatalogedResource>? = null,
    override val previousVersion: CatalogedResource? = null,
    override val hasVersion: List<CatalogedResource>? = null,
    override val currentVersion: CatalogedResource? = null,
    override val replaces: CatalogedResource? = null,
    override val version: String? = null,
    override val versionNotes: String? = null,
    override val status: String? = null
): DcatCatalog


data class DcatCatalogRecordModel(
    override val identifier: String,
    override val title: String,
    override val description: String? = null,
    override val listingDate: String,
    override val updateDate: String? = null,
    override val primaryTopic: CatalogedResource? = null,
    override val conformsTo: List<SkosConceptScheme>? = null
): DcatCatalogRecord


data class DcatDatasetModel(
    override val identifier: String,
    override val distributions: List<DcatDistribution>? = null,
    override val frequency: String? = null,
    override val spatialCoverage: Location? = null,
    override val spatialResolution: String? = null,
    override val temporalCoverage: PeriodOfTime? = null,
    override val temporalResolution: String? = null,
    override val wasGeneratedBy: Activity? = null,
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
    override val type: String? = null,
    override val relation: List<Relationship>? = null,
    override val qualifiedRelation: List<Relationship>? = null,
    override val keywords: List<String>? = null,
    override val landingPage: String? = null,
    override val qualifiedAttribution: List<Attribution>? = null,
    override val license: LicenseDocument? = null,
    override val rights: Rights? = null,
    override val hasPart: List<CatalogedResource>? = null,
    override val hasPolicy: List<Policy>? = null,
    override val isReferencedBy: List<CatalogedResource>? = null,
    override val previousVersion: CatalogedResource? = null,
    override val hasVersion: List<CatalogedResource>? = null,
    override val currentVersion: CatalogedResource? = null,
    override val replaces: CatalogedResource? = null,
    override val version: String? = null,
    override val versionNotes: String? = null,
    override val status: String? = null
): DcatDataset


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

data class DataServiceModel(
    override val identifier: String,
    override val endpointURL: String,
    override val endpointDescription: String? = null,
    override val servesDataset: List<DcatDataset>? = null
): DataService

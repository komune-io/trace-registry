import city.smartb.registry.program.s2.catalog.domain.model.SkosConcept
import city.smartb.registry.program.s2.catalog.domain.model.SkosConceptScheme

interface DcatApCatalog: DcatDataset {
    override val identifier: String
    val homepage: String
    val themes: List<SkosConcept>?
    val resources: List<Resource>?
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
    val resources: List<Resource>?
    val datasets: List<DcatDataset>?
    val services: List<DataService>?
    val catalogs: List<DcatCatalog>?
    val catalogRecords: List<DcatCatalogRecord>?

}

interface DcatCatalogRecord {
    val identifier: String
    val title: String
    val description: String?
    val listingDate: String
    val updateDate: String?
    val primaryTopic: Resource?
    val conformsTo: List<SkosConceptScheme>?
}

sealed interface DcatDataset: Resource {
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


sealed interface Resource {
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
    val hasPart: List<Resource>?
    val hasPolicy: List<Policy>?
    val isReferencedBy: List<Resource>?
    val previousVersion: Resource?
    val hasVersion: List<Resource>?
    val currentVersion: Resource?
    val replaces: Resource?
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


interface Catalog: Dataset {
    override val identifier: String
    val homepage: String
    val themes: List<Concept>?
    val resources: List<Resource>?
    val datasets: List<Dataset>?
    val services: List<DataService>?
    val catalogs: List<Catalog>?
    val catalogRecords: List<CatalogRecord>?

}

interface CatalogRecord {
    val identifier: String
    val title: String
    val description: String?
    val listingDate: String
    val updateDate: String?
    val primaryTopic: Resource?
    val conformsTo: List<ConceptScheme>?
}

sealed interface Dataset: Resource {
    override val identifier: String
    val distributions: List<Distribution>?
    val frequency: String?
    val spatialCoverage: Location?
    val spatialResolution: String?
    val temporalCoverage: PeriodOfTime?
    val temporalResolution: String?
    val wasGeneratedBy: Activity?
}

interface Distribution {
    val identifier: String
    val accessURL: String?
    val accessService: DataService?
    val downloadURL: String?
    val byteSize: Long?
    val spatialResolution: String?
    val temporalResolution: String?
    val conformsTo: List<ConceptScheme>?
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
    val servesDataset: List<Dataset>?
}


sealed interface Resource {
    val accessRights: String?
    val conformsTo: List<ConceptScheme>?
    val contactPoint: String?
    val creator: Agent?
    val description: String?
    val title: String
    val releaseDate: String?
    val updateDate: String?
    val language: List<String>?
    val publisher: Agent?
    val identifier: String?
    val theme: List<Concept>?
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

data class ConceptScheme(
    val identifier: String,
    // Aucune propriété spécifique dans DCAT
)

data class Concept(
    val identifier: String,
    // Aucune propriété spécifique dans DCAT
)

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
    // Aucune propriété spécifique dans DCAT
)

data class Rights(
    val identifier: String,
    // Aucune propriété spécifique dans DCAT
)

data class Attribution(
    val identifier: String,
    // Aucune propriété spécifique dans DCAT
)

data class Activity(
    val identifier: String,
    // Aucune propriété spécifique dans DCAT
)
data class LicenseDocument(
    val identifier: String,
    // Aucune propriété spécifique dans DCAT
)
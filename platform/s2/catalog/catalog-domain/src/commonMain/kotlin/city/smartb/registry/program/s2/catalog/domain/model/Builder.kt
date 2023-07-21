fun catalog(block: CatalogBuilder.() -> Unit): Catalog = CatalogBuilder().apply(block).build()

class CatalogBuilder {
    var identifier: String = ""
    var homepage: String = ""
    var themes: MutableList<Concept> = mutableListOf()
    var resources: MutableList<CatalogedResource> = mutableListOf()
    var datasets: MutableList<Dataset> = mutableListOf()
    var services: MutableList<DataService> = mutableListOf()
    var catalogs: MutableList<Catalog> = mutableListOf()
    var catalogRecords: MutableList<CatalogRecord> = mutableListOf()

    fun themes(block: THEMES.() -> Unit) = themes.addAll(THEMES().apply(block))
    fun THEMES.theme(block: ConceptBuilder.() -> Unit) = add(ConceptBuilder().apply(block).build())

    fun resources(block: RESOURCES.() -> Unit) = resources.addAll(RESOURCES().apply(block))
//    fun RESOURCES.resource(block: CatalogedResourceBuilder.() -> Unit) = add(CatalogedResourceBuilder().apply(block).build())

    fun datasets(block: DATASETS.() -> Unit) = datasets.addAll(DATASETS().apply(block))
    fun DATASETS.dataset(block: DatasetBuilder.() -> Unit) = add(DatasetBuilder().apply(block).build())

    fun services(block: SERVICES.() -> Unit) = services.addAll(SERVICES().apply(block))
    fun SERVICES.service(block: DataServiceBuilder.() -> Unit) = add(DataServiceBuilder().apply(block).build())

    fun catalogs(block: CATALOGS.() -> Unit) = catalogs.addAll(CATALOGS().apply(block))
    fun CATALOGS.catalog(block: CatalogBuilder.() -> Unit) = add(CatalogBuilder().apply(block).build())

    fun catalogRecords(block: CATALOGRECORDS.() -> Unit) = catalogRecords.addAll(CATALOGRECORDS().apply(block))
    fun CATALOGRECORDS.catalogRecord(block: CatalogRecordBuilder.() -> Unit) = add(CatalogRecordBuilder().apply(block).build())

    fun build() = Catalog(identifier, homepage, themes, resources, datasets, services, catalogs, catalogRecords)
}

fun dataset(block: DatasetBuilder.() -> Unit): Dataset = DatasetBuilder().apply(block).build()

class DatasetBuilder {
    var identifier: String = ""
    var distributions: MutableList<Distribution> = mutableListOf()
    var frequency: String? = null
    var spatialCoverage: Location? = null
    var spatialResolution: String? = null
    var temporalCoverage: PeriodOfTime? = null
    var temporalResolution: String? = null
    var wasGeneratedBy: Activity? = null

    fun distributions(block: DISTRIBUTIONS.() -> Unit) = distributions.addAll(DISTRIBUTIONS().apply(block))
    fun DISTRIBUTIONS.distribution(block: DistributionBuilder.() -> Unit) = add(DistributionBuilder().apply(block).build())

    fun build() = Dataset(identifier, distributions, frequency, spatialCoverage, spatialResolution, temporalCoverage, temporalResolution, wasGeneratedBy)
}


fun dataService(block: DataServiceBuilder.() -> Unit): DataService = DataServiceBuilder().apply(block).build()

class DataServiceBuilder {
    var identifier: String = ""
    var endpointURL: String = ""
    var endpointDescription: String? = null
    var servesDataset: MutableList<Dataset> = mutableListOf()

    fun servesDataset(block: SERVESDATASET.() -> Unit) = servesDataset.addAll(SERVESDATASET().apply(block))
    fun SERVESDATASET.dataset(block: DatasetBuilder.() -> Unit) = add(DatasetBuilder().apply(block).build())

    fun build() = DataService(identifier, endpointURL, endpointDescription, servesDataset)
}


fun catalogRecord(block: CatalogRecordBuilder.() -> Unit): CatalogRecord = CatalogRecordBuilder().apply(block).build()

class CatalogRecordBuilder {
    val identifier: String? = null
    val title: String? = null
    val listingDate: String? = null
    val description: String? = null
    val updateDate: String? = null
    val primaryTopic: CatalogedResource? = null
    val conformsTo: MutableList<ConceptScheme>? = null

//    fun primaryTopic(block: CatalogedResourceBuilder.() -> Unit) {
//        primaryTopic = CatalogedResourceBuilder().apply(block).build()
//    }

    fun conformsTo(block: CONFORMSTO.() -> Unit) = conformsTo?.addAll(CONFORMSTO().apply(block))
    fun CONFORMSTO.conceptScheme(block: ConceptSchemeBuilder.() -> Unit) = add(ConceptSchemeBuilder().apply(block).build())


    fun build() = CatalogRecord(identifier!!, title!!, description, listingDate!!, updateDate, primaryTopic, conformsTo)
}

fun distribution(block: DistributionBuilder.() -> Unit): Distribution = DistributionBuilder().apply(block).build()

class DistributionBuilder {
    var identifier: String = ""
    var accessURL: String? = null
    var accessService: DataService? = null
    var downloadURL: String? = null
    var byteSize: Long? = null
    var spatialResolution: String? = null
    var temporalResolution: String? = null
    var conformsTo: MutableList<ConceptScheme> = mutableListOf()
    var mediaType: String? = null
    var format: String? = null
    var compressionFormat: String? = null
    var packagingFormat: String? = null
    var checksum: Checksum? = null

    fun accessService(block: DataServiceBuilder.() -> Unit) {
        accessService = DataServiceBuilder().apply(block).build()
    }

    fun conformsTo(block: CONFORMSTO.() -> Unit) = conformsTo.addAll(CONFORMSTO().apply(block))
    fun CONFORMSTO.conceptScheme(block: ConceptSchemeBuilder.() -> Unit) = add(ConceptSchemeBuilder().apply(block).build())

    fun checksum(block: ChecksumBuilder.() -> Unit) {
        checksum = ChecksumBuilder().apply(block).build()
    }

    fun build() = Distribution(identifier, accessURL, accessService, downloadURL, byteSize, spatialResolution, temporalResolution, conformsTo, mediaType, format, compressionFormat, packagingFormat, checksum)
}

fun concept(block: ConceptBuilder.() -> Unit): Concept = ConceptBuilder().apply(block).build()

class ConceptBuilder {
    var identifier: String = ""

    fun build() = Concept(identifier)
}

fun conceptScheme(block: ConceptSchemeBuilder.() -> Unit): ConceptScheme = ConceptSchemeBuilder().apply(block).build()

class ConceptSchemeBuilder {
    var identifier: String = ""

    fun build() = ConceptScheme(identifier)
}

fun agent(block: AgentBuilder.() -> Unit): Agent = AgentBuilder().apply(block).build()

class AgentBuilder {
    var identifier: String = ""

    fun build() = Agent(identifier)
}

fun role(block: RoleBuilder.() -> Unit): Role = RoleBuilder().apply(block).build()

class RoleBuilder {
    var identifier: String = ""

    fun build() = Role(identifier)
}

fun periodOfTime(block: PeriodOfTimeBuilder.() -> Unit): PeriodOfTime = PeriodOfTimeBuilder().apply(block).build()

class PeriodOfTimeBuilder {
    var startDate: String? = null
    var endDate: String? = null
    var beginning: String? = null
    var end: String? = null

    fun build() = PeriodOfTime(startDate, endDate, beginning, end)
}

fun location(block: LocationBuilder.() -> Unit): Location = LocationBuilder().apply(block).build()

class LocationBuilder {
    var geometry: String? = null
    var boundingBox: String? = null
    var centroid: String? = null

    fun build() = Location(geometry, boundingBox, centroid)
}

fun checksum(block: ChecksumBuilder.() -> Unit): Checksum = ChecksumBuilder().apply(block).build()

class ChecksumBuilder {
    var algorithm: String = ""
    var checksumValue: String = ""

    fun build() = Checksum(algorithm, checksumValue)
}

fun policy(block: PolicyBuilder.() -> Unit): Policy = PolicyBuilder().apply(block).build()

class PolicyBuilder {
    var identifier: String = ""

    fun build() = Policy(identifier)
}

fun rights(block: RightsBuilder.() -> Unit): Rights = RightsBuilder().apply(block).build()

class RightsBuilder {
    var identifier: String = ""

    fun build() = Rights(identifier)
}

fun attribution(block: AttributionBuilder.() -> Unit): Attribution = AttributionBuilder().apply(block).build()

class AttributionBuilder {
    var identifier: String = ""

    fun build() = Attribution(identifier)
}

fun activity(block: ActivityBuilder.() -> Unit): Activity = ActivityBuilder().apply(block).build()

class ActivityBuilder {
    var identifier: String = ""

    fun build() = Activity(identifier)
}

fun licenseDocument(block: LicenseDocumentBuilder.() -> Unit): LicenseDocument = LicenseDocumentBuilder().apply(block).build()

class LicenseDocumentBuilder {
    var identifier: String = ""

    fun build() = LicenseDocument(identifier)
}


typealias DISTRIBUTIONS = ArrayList<Distribution>

typealias THEMES = ArrayList<Concept>
typealias RESOURCES = ArrayList<CatalogedResource>
typealias DATASETS = ArrayList<Dataset>
typealias SERVICES = ArrayList<DataService>
typealias CATALOGS = ArrayList<Catalog>
typealias CATALOGRECORDS = ArrayList<CatalogRecord>


typealias SERVESDATASET = ArrayList<Dataset>
typealias CONFORMSTO = ArrayList<ConceptScheme>
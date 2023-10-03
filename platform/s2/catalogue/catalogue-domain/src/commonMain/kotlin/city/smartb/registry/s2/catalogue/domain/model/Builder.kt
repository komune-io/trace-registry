package city.smartb.registry.s2.catalogue.domain.model


@DslMarker
annotation class DCatDsl

fun catalogue(block: CatalogueBuilder.() -> Unit): DCatApCatalogueModel = CatalogueBuilder().apply(block).build()

@DCatDsl
class CatalogueBuilder {
    var identifier: String = ""
    var homepage: String = ""
    var title: String = ""
    var img: String = ""
    var description: String = ""
    var type: String = ""
    var themes: MutableList<SkosConcept> = mutableListOf()
    var cataloguedResources: MutableList<CataloguedResource> = mutableListOf()
    var datasets: MutableList<DcatDataset> = mutableListOf()
    var services: MutableList<DataService> = mutableListOf()
    var catalogues: MutableList<DcatApCatalogue> = mutableListOf()
    var catalogueRecords: MutableList<DcatCatalogueRecord> = mutableListOf()

    fun themes(block: THEMES.() -> Unit) = themes.addAll(THEMES().apply(block))
    fun THEMES.theme(block: SkosConceptBuilder.() -> Unit) = add(SkosConceptBuilder().apply(block).build())

    fun resources(block: RESOURCES.() -> Unit) = cataloguedResources.addAll(RESOURCES().apply(block))
//    fun RESOURCES.resource(block: CataloguedResourceBuilder.() -> Unit) = add(CataloguedResourceBuilder().apply(block).build())
    operator fun DcatDataset.unaryPlus() { this@CatalogueBuilder.datasets.add(this) }
    fun datasets(block: DATASETS.() -> Unit) = datasets.addAll(DATASETS().apply(block))
    fun DATASETS.dataset(block: DatasetBuilder.() -> Unit) = +DatasetBuilder().apply(block).build()

    fun services(block: SERVICES.() -> Unit) = services.addAll(SERVICES().apply(block))
    fun SERVICES.service(block: DataServiceBuilder.() -> Unit) = add(DataServiceBuilder().apply(block).build())

    fun catalogues(block: CATALOGS.() -> Unit) = catalogues.addAll(CATALOGS().apply(block))
    fun CATALOGS.catalogue(block: CatalogueBuilder.() -> Unit) = add(CatalogueBuilder().apply(block).build())

    fun catalogueRecords(block: CATALOGRECORDS.() -> Unit) = catalogueRecords.addAll(CATALOGRECORDS().apply(block))
    fun CATALOGRECORDS.catalogueRecord(block: CatalogRecordBuilder.() -> Unit) = add(CatalogRecordBuilder().apply(block).build())

    fun build() = DCatApCatalogueModel(
        identifier = identifier,
        homepage = homepage,
        img = img,
        description = description,
        type = type,
        themes = themes,
        cataloguedResource = cataloguedResources,
        datasets = datasets,
        services = services,
        catalogues = catalogues,
        title = title,
        catalogueRecords = catalogueRecords
    )
}

fun dataset(block: DatasetBuilder.() -> Unit): DcatDataset = DatasetBuilder().apply(block).build()

@DCatDsl
class DatasetBuilder {
    var identifier: String = ""
    var title: String = ""
    var description: String = ""
    var conformsTo: MutableList<SkosConceptScheme> = mutableListOf()
    var type: String? = null
    var length: Int? = null
    var distributions: MutableList<DcatDistribution> = mutableListOf()
    var frequency: String? = null
    var themes: MutableList<SkosConcept> = mutableListOf()
    var spatialCoverage: Location? = null
    var spatialResolution: String? = null
    var temporalCoverage: PeriodOfTime? = null
    var temporalResolution: String? = null
    var wasGeneratedBy: Activity? = null

    fun distributions(block: DISTRIBUTIONS.() -> Unit) = distributions.addAll(DISTRIBUTIONS().apply(block))
    fun DISTRIBUTIONS.distribution(block: DistributionBuilder.() -> Unit) = add(DistributionBuilder().apply(block).build())

    fun themes(block: THEMES.() -> Unit) = themes.addAll(THEMES().apply(block))
    fun THEMES.theme(block: SkosConceptBuilder.() -> Unit) = add(SkosConceptBuilder().apply(block).build())

    fun conformsTo(block: CONFORMSTO.() -> Unit) = conformsTo.addAll(CONFORMSTO().apply(block))
    fun CONFORMSTO.conformsTo(block: SkosConceptSchemeBuilder.() -> Unit) = add(SkosConceptSchemeBuilder().apply(block).build())

    fun build() = DcatDatasetModel(
        identifier = identifier,
        title = title,
        length = length,
        description = description,
        distributions = distributions,
        frequency = frequency,
        type = type,
        spatialCoverage = spatialCoverage,
        spatialResolution = spatialResolution,
        temporalCoverage = temporalCoverage,
        temporalResolution = temporalResolution,
        wasGeneratedBy = wasGeneratedBy
    )
}

fun dataService(block: DataServiceBuilder.() -> Unit): DataService = DataServiceBuilder().apply(block).build()

@DCatDsl
class DataServiceBuilder {
    var identifier: String = ""
    var endpointURL: String = ""
    var endpointDescription: String? = null
    var servesDataset: MutableList<DcatDataset> = mutableListOf()

    fun servesDataset(block: SERVESDATASET.() -> Unit) = servesDataset.addAll(SERVESDATASET().apply(block))
    fun SERVESDATASET.dataset(block: DatasetBuilder.() -> Unit) = add(DatasetBuilder().apply(block).build())

    fun build() = DataServiceModel(identifier, endpointURL, endpointDescription, servesDataset)
}


fun catalogRecord(block: CatalogRecordBuilder.() -> Unit): DcatCatalogueRecord = CatalogRecordBuilder().apply(block).build()

@DCatDsl
class CatalogRecordBuilder {
    var identifier: String? = null
    var title: String? = null
    var listingDate: String? = null
    var description: String? = null
    var updateDate: String? = null
    var primaryTopic: CataloguedResource? = null
    var conformsTo: MutableList<SkosConceptScheme>? = null

//    fun primaryTopic(block: CatalogedResourceBuilder.() -> Unit) {
//        primaryTopic = CatalogedResourceBuilder().apply(block).build()
//    }

    fun conformsTo(block: CONFORMSTO.() -> Unit) = conformsTo?.addAll(CONFORMSTO().apply(block))
    fun CONFORMSTO.conceptScheme(block: SkosConceptSchemeBuilder.() -> Unit) = add(SkosConceptSchemeBuilder().apply(block).build())


    fun build() = DcatCatalogRecordModel(identifier!!, title!!, description, listingDate, updateDate, primaryTopic, conformsTo)
}

fun distribution(block: DistributionBuilder.() -> Unit): DcatDistribution = DistributionBuilder().apply(block).build()

@DCatDsl
class DistributionBuilder {
    var identifier: String = ""
    var accessURL: String? = null
    var accessService: DataService? = null
    var downloadURL: String? = null
    var byteSize: Long? = null
    var spatialResolution: String? = null
    var temporalResolution: String? = null
    var conformsTo: MutableList<SkosConceptScheme> = mutableListOf()
    var mediaType: String? = null
    var format: String? = null
    var compressionFormat: String? = null
    var packagingFormat: String? = null
    var checksum: Checksum? = null

    fun accessService(block: DataServiceBuilder.() -> Unit) {
        accessService = DataServiceBuilder().apply(block).build()
    }

    fun conformsTo(block: CONFORMSTO.() -> Unit) = conformsTo.addAll(CONFORMSTO().apply(block))
    fun CONFORMSTO.conceptScheme(block: SkosConceptSchemeBuilder.() -> Unit) = add(SkosConceptSchemeBuilder().apply(block).build())

    fun checksum(block: ChecksumBuilder.() -> Unit) {
        checksum = ChecksumBuilder().apply(block).build()
    }

    fun build() = DcatDistributionModel(
        identifier,
        accessURL,
        accessService,
        downloadURL,
        byteSize,
        spatialResolution,
        temporalResolution,
        conformsTo,
        mediaType,
        format,
        compressionFormat,
        packagingFormat,
        checksum
    )
}

infix fun String.toThat(value: String): Pair<String, String> = this to value

operator fun <K, V> HashMap<K, V>.invoke(init: HashMap<K, V>.() -> Unit): HashMap<K, V> {
    this.init()
    return this
}


fun agent(block: AgentBuilder.() -> Unit): Agent = AgentBuilder().apply(block).build()

@DCatDsl
class AgentBuilder {
    var identifier: String = ""

    fun build() = Agent(identifier)
}

fun role(block: RoleBuilder.() -> Unit): Role = RoleBuilder().apply(block).build()

@DCatDsl
class RoleBuilder {
    var identifier: String = ""

    fun build() = Role(identifier)
}

fun periodOfTime(block: PeriodOfTimeBuilder.() -> Unit): PeriodOfTime = PeriodOfTimeBuilder().apply(block).build()

@DCatDsl
class PeriodOfTimeBuilder {
    var startDate: String? = null
    var endDate: String? = null
    var beginning: String? = null
    var end: String? = null

    fun build() = PeriodOfTime(startDate, endDate, beginning, end)
}

fun location(block: LocationBuilder.() -> Unit): Location = LocationBuilder().apply(block).build()

@DCatDsl
class LocationBuilder {
    var geometry: String? = null
    var boundingBox: String? = null
    var centroid: String? = null

    fun build() = Location(geometry, boundingBox, centroid)
}

fun checksum(block: ChecksumBuilder.() -> Unit): Checksum = ChecksumBuilder().apply(block).build()

@DCatDsl
class ChecksumBuilder {
    var algorithm: String = ""
    var checksumValue: String = ""

    fun build() = Checksum(algorithm, checksumValue)
}

fun policy(block: PolicyBuilder.() -> Unit): Policy = PolicyBuilder().apply(block).build()

@DCatDsl
class PolicyBuilder {
    var identifier: String = ""

    fun build() = Policy(identifier)
}

fun rights(block: RightsBuilder.() -> Unit): Rights = RightsBuilder().apply(block).build()

@DCatDsl
class RightsBuilder {
    var identifier: String = ""

    fun build() = Rights(identifier)
}

fun attribution(block: AttributionBuilder.() -> Unit): Attribution = AttributionBuilder().apply(block).build()

@DCatDsl
class AttributionBuilder {
    var identifier: String = ""

    fun build() = Attribution(identifier)
}

fun activity(block: ActivityBuilder.() -> Unit): Activity = ActivityBuilder().apply(block).build()

@DCatDsl
class ActivityBuilder {
    var identifier: String = ""

    fun build() = Activity(identifier)
}

fun licenseDocument(block: LicenseDocumentBuilder.() -> Unit): LicenseDocument = LicenseDocumentBuilder().apply(block).build()

@DCatDsl
class LicenseDocumentBuilder {
    var identifier: String = ""

    fun build() = LicenseDocument(identifier)
}


typealias DISTRIBUTIONS = ArrayList<DcatDistribution>

typealias THEMES = ArrayList<SkosConcept>
typealias RESOURCES = ArrayList<CataloguedResource>
typealias DATASETS = ArrayList<DcatDataset>
typealias SERVICES = ArrayList<DataService>
typealias CATALOGS = ArrayList<DCatApCatalogueModel>
typealias CATALOGRECORDS = ArrayList<DcatCatalogueRecord>


typealias SERVESDATASET = ArrayList<DcatDataset>
typealias CONFORMSTO = ArrayList<SkosConceptScheme>

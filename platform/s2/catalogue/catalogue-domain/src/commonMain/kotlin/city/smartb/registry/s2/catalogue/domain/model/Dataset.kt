package city.smartb.registry.s2.catalogue.domain.model

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueState
import kotlin.js.JsExport

// DCAT-AP: This interface represents a Dataset Series, a collection of related Datasets.
@JsExport
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
@JsExport
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

@JsExport
sealed interface DcatDataset: CataloguedResource {
    override val identifier: String
    val distributions: List<DcatDistribution>?
    val frequency: String?
    val spatialCoverage: Location?
    val spatialResolution: String?
    val temporalCoverage: PeriodOfTime?
    val temporalResolution: String?
    val wasGeneratedBy: Activity?
    val length: Int?
}

@Suppress("LongParameterList")
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
    override val length: Int?
): DcatApDatasetMember

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
    override val length: Int? = null,
): DcatDataset

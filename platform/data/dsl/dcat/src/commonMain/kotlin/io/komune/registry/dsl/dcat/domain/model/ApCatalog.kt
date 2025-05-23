package io.komune.registry.dsl.dcat.domain.model

import io.komune.registry.dsl.skos.domain.model.SkosConcept
import io.komune.registry.dsl.skos.domain.model.SkosConceptScheme
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.structure.domain.model.Structure
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

@JsExport
interface DcatApCatalogue: CataloguedResource {
    override val identifier: String
    val img: String?
    val themes: List<SkosConcept>?
    val cataloguedResource: List<CataloguedResource>?
    val datasets: List<DcatDataset>?
    val services: List<DataService>?
    val catalogues: List<DcatApCatalogue>?
    val catalogueRecords: List<DcatCatalogueRecord>?
    val structure: Structure?
}

@Serializable
data class DCatApCatalogueModel(
    override val identifier: String,
    override val homepage: String? = null,
    override val img: String? = null,
    override val type: String,
    override val structure: Structure? = null,
    override val themes: List<SkosConcept>? = null,
    override val cataloguedResource: List<CataloguedResource>? = null,
    override val datasets: List<DcatDataset>? = null,
    override val services: List<DataService>? = null,
    val translations: Map<Language, DCatApCatalogueModel>? = null,
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
    override val language: String,
    override val publisher: Agent? = null,
    override val validator: Agent? = null,
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
//    override val status: CatalogueState? = null,
): DcatApCatalogue

package city.smartb.registry.dsl.dcat.domain.model

import city.smartb.registry.dsl.skos.domain.model.SkosConcept
import city.smartb.registry.dsl.skos.domain.model.SkosConceptScheme
import kotlin.js.JsExport


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
//    val status: CatalogueState?
}

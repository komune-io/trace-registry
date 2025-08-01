package io.komune.registry.s2.catalogue.domain.model

import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueType
import io.komune.registry.s2.commons.model.CertificationId
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.Location
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.UserId
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.license.domain.LicenseId
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueModel(
    val id: String,
    val identifier: String,
    val description: String?,
    val homepage: String?,
    val title: String,
    val img: String?,
    val imageFsPath: FilePath?,
    val type: CatalogueType,
    val language: String?,
    val configuration: CatalogueConfigurationModel?,
    val themeIds: Set<ConceptId>,
    val translationIds: Map<Language, CatalogueId>,
    val isTranslationOf: CatalogueId?,
    val childrenCatalogueIds: Set<CatalogueId>,
    val relatedCatalogueIds: Map<String, Set<CatalogueId>>?,
    val childrenDatasetIds: Set<DatasetId>,
    val referencedDatasetIds: Set<DatasetId>,
    val metadataDatasetId: DatasetId?,
    val status: CatalogueState,
    val creatorId: UserId?,
    val creatorOrganizationId: OrganizationId?,
    val ownerOrganizationId: OrganizationId?,
    val validatorId: UserId?,
    val validatorOrganizationId: OrganizationId?,
    val stakeholder: String?,
    val accessRights: CatalogueAccessRight,
    val licenseId: LicenseId?,
    val location: Location?,
    val order: Int?,
    val hidden: Boolean,
    val issued: Long,
    val modified: Long,
    val version: Int,
    val versionNotes: String?,
    val integrateCounter: Boolean?,
    val certificationIds: Set<CertificationId>,
) {
    val availableLanguages = translationIds.keys
    val flatRelatedCatalogueIds = relatedCatalogueIds?.flatMap { (relation, catalogueIds) ->
        catalogueIds.map { flattenRelation(relation, it) }
    }

    companion object {
        const val RELATION_SEPARATOR = "///"

        fun flattenRelation(relation: String, catalogueId: CatalogueId) = "$relation$RELATION_SEPARATOR$catalogueId"

        fun unflattenRelation(flatRelation: String): Pair<String, CatalogueId> {
            return flatRelation.split(RELATION_SEPARATOR).let { it[0] to it[1] }
        }
    }
}

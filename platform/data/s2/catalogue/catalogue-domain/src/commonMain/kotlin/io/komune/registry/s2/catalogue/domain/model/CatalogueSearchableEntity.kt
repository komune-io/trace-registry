package io.komune.registry.s2.catalogue.domain.model

import io.komune.registry.s2.commons.model.BadgeId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueType
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.Location
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.UserId
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.license.domain.LicenseId
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueSearchableEntity(
    val id: String,
    val identifier: String,
    val description: String?,
    val title: String,
    val type: CatalogueType,
    val language: String?,
    val themeIds: Set<ConceptId>,
    val translationIds: Map<Language, CatalogueId>,
    val isTranslationOf: CatalogueId,
    val childrenCatalogueIds: Set<CatalogueId>,
    val relatedCatalogueIds: Map<String, Set<CatalogueId>>?,
    val creatorId: UserId?,
    val creatorOrganizationId: OrganizationId?,
    val ownerOrganizationId: OrganizationId?,
    val accessRights: CatalogueAccessRight,
    val licenseId: LicenseId?,
    val location: Location?,
    val hidden: Boolean,
    val badgeIds: Set<BadgeId>?,
    val issued: Long,
    val modified: Long,
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

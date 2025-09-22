package io.komune.registry.s2.catalogue.domain.model

import io.komune.registry.s2.commons.model.BadgeCertificationId
import io.komune.registry.s2.commons.model.BadgeId
import io.komune.registry.s2.commons.model.BadgeLevelId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueType
import io.komune.registry.s2.commons.model.CertificationId
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
    val badges: List<CatalogueSearchableBadge>?,
    val issued: Long,
    val modified: Long,
) {
    val availableLanguages = translationIds.keys
    val flatRelatedCatalogueIds = relatedCatalogueIds?.flatMap { (relation, catalogueIds) ->
        catalogueIds.map { flattenRelation(relation, it) }
    }

    val badgeIds: Set<BadgeId>? = badges?.map { it.id }?.toSet()
    val badgeNumericalValues: Map<String, Double>? = badges?.groupBy { it.id }
        ?.mapValues { (_, badgeCertifications) ->
            badgeCertifications.mapNotNull { it.value.toDoubleOrNull() }.maxOrNull()
        }?.filterValues { it != null } as Map<String, Double>?

    companion object {
        const val RELATION_SEPARATOR = "///"

        fun flattenRelation(relation: String, catalogueId: CatalogueId) = "$relation$RELATION_SEPARATOR$catalogueId"

        fun unflattenRelation(flatRelation: String): Pair<String, CatalogueId> {
            return flatRelation.split(RELATION_SEPARATOR).let { it[0] to it[1] }
        }
    }
}

@Serializable
data class CatalogueSearchableBadge(
    val id: BadgeId,
    val levelId: BadgeLevelId,
    val certificationId: CertificationId,
    val badgeCertificationId: BadgeCertificationId,
    val value: String
)

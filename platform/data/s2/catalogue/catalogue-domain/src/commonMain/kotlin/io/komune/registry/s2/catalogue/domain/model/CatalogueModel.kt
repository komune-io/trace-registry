package io.komune.registry.s2.catalogue.domain.model

import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.Location
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.UserId
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.structure.domain.model.Structure
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueModel(
    val id: String,
    val identifier: String,
    val description: String?,
    val homepage: String? = null,
    val title: String,
    val img: String? = null,
    val type: String,
    val language: String?,
    var structure: Structure? = null,
    val themeIds: Set<ConceptId>,
    val translationIds: Map<Language, CatalogueId>,
    val isTranslationOf: CatalogueId?,
    val childrenCatalogueIds: Set<CatalogueId>,
    val childrenDatasetIds: Set<DatasetId>,
    val referencedDatasetIds: Set<DatasetId>,
    val status: CatalogueState,
    val creatorId: UserId?,
    val creatorOrganizationId: OrganizationId?,
    val ownerOrganizationId: OrganizationId?,
    val publisherId: UserId?,
    val validatorId: UserId?,
    val accessRights: CatalogueAccessRight,
    val licenseId: LicenseId?,
    val location: Location?,
    val aggregators: List<CatalogueAggregatorModel>,
    val hidden: Boolean,
    val issued: Long,
    val modified: Long,
    val version: Int,
    val versionNotes: String?,
) {
    val availableLanguages = translationIds.keys
}

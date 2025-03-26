package io.komune.registry.f2.catalogue.domain.dto

import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptComputedDTO
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptComputedDTOBase
import io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTO
import io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTOBase
import io.komune.registry.f2.dataset.domain.dto.DatasetDTO
import io.komune.registry.f2.dataset.domain.dto.DatasetDTOBase
import io.komune.registry.f2.license.domain.model.LicenseDTO
import io.komune.registry.f2.license.domain.model.LicenseDTOBase
import io.komune.registry.f2.organization.domain.model.OrganizationRef
import io.komune.registry.f2.organization.domain.model.OrganizationRefDTO
import io.komune.registry.f2.user.domain.model.UserRef
import io.komune.registry.f2.user.domain.model.UserRefDTO
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.Location
import io.komune.registry.s2.commons.model.LocationDTO
import io.komune.registry.s2.structure.domain.model.Structure
import io.komune.registry.s2.structure.domain.model.StructureDTO
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * dcat:Catalog represents a catalog, which is a dataset in which each individual item is a metadata record
 * describing some resource; the scope of dcat:Catalog is collections of metadata about datasets, data services,
 * or other resource types. .
 * @d2 model
 * @title Catalogue
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 10
 */
@JsExport
interface CatalogueDTO : CatalogueAccessDataDTO {
    /**
     * A unique identifier represented as a string.
     *
     * This ID is used to uniquely distinguish different entities
     * within the system. It should be treated as a read-only
     * property to avoid unintended mutations.
     */
    override val id: String

    /**
     * A unique string used to identify a specific entity within a system.
     */
    val identifier: String

    val parent: CatalogueRefDTO?

    /**
     * A nullable string that holds a brief description.
     * This variable can be used to store any text that provides
     * additional information or context where it is utilized.
     */
    val description: String?

    /**
     * The homepage URL of the catalogue. This URL points to the main web page providing
     * more information about the catalogue and its contents.
     */
    val homepage: String?

    /**
     * Title of the catalogue.
     */
    val title: String

    /**
     * Language of this version of the catalogue.
     * @example "en"
     */
    val language: Language

    /**
     * A list of available languages for the catalogue.
     * @example [["fr", "en"]]
     */
    val availableLanguages: List<Language>

    /**
     * A URL to an image representing the catalogue. This image could be a logo, a cover image, or any visual
     * representation that provides context or branding for the catalogue.
     */
    val img: String?

    /**
     * Represents the type of a given entity in the form of a string.
     *
     * The value stored in this variable can be used to identify or categorize the
     * kind of entity being referred to, which can be useful in various contexts
     * such as serialization, interfacing with external services, or simply
     * performing type-specific logic within the application.
     */
    val type: String

    /**
     * Represents the structure of a given catalogue within the catalog metadata.
     * This structure outlines the schema and configuration details necessary for the catalog entry.
     */
    val structure: StructureDTO?

    /**
     * A list of themes categorized as SKOS concepts.
     * This variable holds a list of `SkosConceptDTO` objects, which are used to represent
     * themes in a structured and standardized format. SKOS (Simple Knowledge Organization System)
     * is a common data model for sharing and linking knowledge organization systems via the Web.
     */
    val themes: List<ConceptTranslatedDTO>

    /**
     * Children catalogues owned by this catalogue.
     */
    val catalogues: List<CatalogueRefDTO>

    /**
     * Datasets owned by this catalogue.
     */
    val datasets: List<DatasetDTO>

    /**
     * Datasets owned by other catalogues that are referenced by this catalogue.
     */
    val referencedDatasets: List<DatasetDTO>

    /**
     * Represents the current state of the catalogue in the application.
     * It is an instance of the CatalogueState enumeration, which defines
     * the possible states the catalogue can be in, such as loading, loaded,
     * or error state.
     */
    val status: CatalogueState

    /**
     * The agent responsible for creating the catalogue.
     */
    override val creator: UserRefDTO?

    override val creatorOrganization: OrganizationRefDTO?

    override val ownerOrganization: OrganizationRefDTO?

    /**
     * The agent responsible for making the dataset available.
     */
    val publisher: UserRefDTO?

    /**
     * The agent responsible for validating the content of the dataset.
     */
    val validator: UserRefDTO?

    /**
     * Describes the access rights to the dataset. This can indicate permissions, restrictions, or special authorizations
     * applicable to the dataset.
     */
    override val accessRights: CatalogueAccessRight

    /**
     * A legal document under which the catalogue is made available.
     */
    val license: LicenseDTO?

    val location: LocationDTO?

    /**
     * The date of formal issuance (e.g., publication) of the dataset.
     */
    val issued: Long

    /**
     * Represents the date when the dataset was last updated.
     * This is an optional property and may be null if the date is not available.
     */
    val modified: Long

    /**
     * Whether the catalogue should be filtered out of search results (except from explicitly targeted fetches)
     * @example false
     */
    val hidden: Boolean

    /**
     * Pending drafts of the authenticated user for this catalogue.
     */
    val pendingDrafts: List<CatalogueDraftRefDTO>?

    val aggregators: List<InformationConceptComputedDTO>

    val version: Int
    val versionNotes: String?
}

@Serializable
data class CatalogueDTOBase(
    override val id: String,
    override val identifier: String,
    override val parent: CatalogueRefDTOBase?,
    override val description: String?,
    override val homepage: String? = null,
    override val title: String,
    override val img: String? = null,
    override val type: String,
    override val language: String,
    override val availableLanguages: List<Language>,
    override val structure: Structure? = null,
    override val themes: List<ConceptTranslatedDTOBase>,
    override val catalogues: List<CatalogueRefDTOBase>,
    override val datasets: List<DatasetDTOBase>,
    override val referencedDatasets: List<DatasetDTOBase>,
    override val status: CatalogueState,
    override val creator: UserRef? = null,
    override val creatorOrganization: OrganizationRef? = null,
    override val ownerOrganization: OrganizationRef? = null,
    override val publisher: UserRef? = null,
    override val validator: UserRef? = null,
    override val accessRights: CatalogueAccessRight,
    override val license: LicenseDTOBase? = null,
    override val location: Location? = null,
    override val issued: Long,
    override val modified: Long,
    override val hidden: Boolean = false,
    override val pendingDrafts: List<CatalogueDraftRefDTOBase>? = null,
    override val aggregators: List<InformationConceptComputedDTOBase>,
    override val version: Int,
    override val versionNotes: String? = null,
): CatalogueDTO

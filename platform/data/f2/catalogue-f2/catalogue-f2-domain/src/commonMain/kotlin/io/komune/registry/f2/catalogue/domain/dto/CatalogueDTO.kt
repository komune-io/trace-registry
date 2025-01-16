package io.komune.registry.f2.catalogue.domain.dto

import io.komune.registry.dsl.dcat.domain.model.Agent
import io.komune.registry.dsl.skos.domain.model.SkosConcept
import io.komune.registry.dsl.skos.domain.model.SkosConceptDTO
import io.komune.registry.f2.dataset.domain.dto.DatasetDTO
import io.komune.registry.f2.dataset.domain.dto.DatasetDTOBase
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.structure.domain.model.Structure
import io.komune.registry.s2.structure.domain.model.StructureDto
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * dcat:Catalog represents a catalog, which is a dataset in which each individual item is a metadata record
 * describing some resource; the scope of dcat:Catalog is collections of metadata about datasets, data services,
 * or other resource types. .
 * @d2 model
 * @title Catalogue
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 */
@JsExport
interface CatalogueDTO{
    /**
     * A unique identifier represented as a string.
     *
     * This ID is used to uniquely distinguish different entities
     * within the system. It should be treated as a read-only
     * property to avoid unintended mutations.
     */
    val id: String

    /**
     * A unique string used to identify a specific entity within a system.
     */
    val identifier: String

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
     */
    val language: String

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
    val structure: StructureDto?

    /**
     * A list of themes categorized as SKOS concepts.
     * This variable holds a list of `SkosConceptDTO` objects, which are used to represent
     * themes in a structured and standardized format. SKOS (Simple Knowledge Organization System)
     * is a common data model for sharing and linking knowledge organization systems via the Web.
     *
     * `themes` can be null, indicating that there are no themes available or the data has not been initialized.
     */
    val themes: List<SkosConceptDTO>?

    /**
     * Represents a list of datasets associated with the catalog.
     */
    val datasets: List<DatasetDTO>?

    /**
     * A nullable list of `CatalogueRefDTO` objects.
     * Represents a collection of catalog references.
     */
//    val services: List<DataService>

    val catalogues: List<CatalogueRefDTO>?

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
    val creator: Agent?

    /**
     * The agent responsible for making the dataset available.
     */
    val publisher: Agent?

    /**
     * The agent responsible for validating the content of the dataset.
     */
    val validator: Agent?

    /**
     * Describes the access rights to the dataset. This can indicate permissions, restrictions, or special authorizations
     * applicable to the dataset.
     */
    val accessRights: String?

    /**
     * A legal document under which the dataset is made available.
     * @example "ODbL 1.0"
     */
    val license: String?

    /**
     * The date of formal issuance (e.g., publication) of the dataset.
     */
    val issued: Long?

    /**
     * Represents the date when the dataset was last updated.
     * This is an optional property and may be null if the date is not available.
     */
    val modified: Long?
}

@Serializable
data class CatalogueDTOBase(
    override val id: String,
    override val identifier: String,
    override val description: String?,
    override val homepage: String? = null,
    override val title: String,
    override val img: String? = null,
    override val type: String,
    override val language: String,
    override val structure: Structure? = null,
    override val themes: List<SkosConcept>? = null,
    override val datasets: List<DatasetDTOBase>? = null,
    override val catalogues: List<CatalogueRefDTOBase>? = null,
    override val status: CatalogueState,
    override val creator: Agent? = null,
    override val publisher: Agent? = null,
    override val validator: Agent? = null,
    override val accessRights: String? = null,
    override val license: String? = null,
    override val issued: Long? = null,
    override val modified: Long? = null,
): CatalogueDTO

@JsExport
interface CatalogueRefDTO {
    val id: String
    val identifier: String
    val title: String
    val type: String
    val language: String
    val description: String?
    val homepage: String?
    val img: String?
    val structure: StructureDto?
    val themes: List<SkosConceptDTO>?
    val status: CatalogueState?
}


@Serializable
data class CatalogueRefDTOBase(
    override val id: String,
    override val identifier: String,
    override val title: String,
    override val type: String,
    override val language: String,
    override val description: String? = null,
    override val homepage: String? = null,
    override val img: String? = null,
    override val structure: Structure? = null,
    override val themes: List<SkosConcept>? = null,
    override val status: CatalogueState? = null,
): CatalogueRefDTO

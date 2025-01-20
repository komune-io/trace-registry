package io.komune.registry.f2.dataset.domain.dto

import io.komune.registry.dsl.dcat.domain.model.Activity
import io.komune.registry.dsl.dcat.domain.model.Agent
import io.komune.registry.dsl.skos.domain.model.SkosConcept
import io.komune.registry.dsl.skos.domain.model.SkosConceptDTO
import io.komune.registry.dsl.skos.domain.model.SkosConceptScheme
import io.komune.registry.s2.dataset.domain.automate.DatasetState
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * dcat:Dataset represents a collection of data, published or curated by a single agent or identifiable community.
 * The notion of dataset in DCAT is broad and inclusive, with the intention of accommodating resource
 * types arising from all communities. Data comes in many forms including numbers, text, pixels, imagery,
 * sound and other multi-media, and potentially other types, any of which might be collected into a dataset.
 *
 * @d2 model
 * @title Dataset
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 */
@JsExport
interface DatasetDTO{
    /**
     * A unique identifier for an entity, used for distinguishing it from other entities.
     */
    val id: String

    /**
     * Unique identifier used to distinguish an entity within a system.
     *
     * This variable holds a string that acts as a unique reference, ensuring that each entity can be uniquely identified.
     */
    val identifier: String

    /**
     * A string representing the type of an entity or object.
     *
     * This variable is intended to store a classification or category as a string.
     * It can be used to define the type of a particular entity in a system where
     * differentiation of types is necessary.
     */
    val type: String

    /**
     * Describes the temporal resolution of the dataset, indicating the time intervals at
     * which data within the dataset is sampled or recorded. This could be represented
     * in various formats, such as seconds, minutes, hours, days, months, or years,
     * depending on the nature and requirements of the dataset.
     */
    val temporalResolution: String?

    /**
     * Refers to the activity by which the dataset was generated.
     */
    val wasGeneratedBy: Activity?

    /**
     * Describes the access rights to the dataset. This can indicate permissions, restrictions, or special authorizations
     * applicable to the dataset.
     */
    val accessRights: String?

    /**
     * A list of SKOS (Simple Knowledge Organization System) Concept Schemes that the dataset conforms to.
     * Each concept scheme provides a structured, controlled vocabulary that aids in categorizing
     * and defining the dataset's contents and thematic areas.
     * This property is optional and can be null if no concept scheme has been specified.
     */
    val conformsTo: List<SkosConceptScheme>?

    /**
     * The agent responsible for creating the dataset.
     */
    val creator: Agent?

    /**
     * A brief textual explanation or depiction.
     * This variable may contain a null value if no description is provided.
     */
    val description: String?

    /**
     * Represents the title of a document, article, or any textual content.
     * This variable holds the main heading or caption, which is typically concise and
     * descriptive, summarizing the core subject or purpose of the content it labels.
     */
    val title: String

    /**
     * The release date of the dataset. It denotes the date when the dataset was made available to the public.
     */
    val releaseDate: String?

    /**
     * Language of this version of the dataset. It must be either a BCP 47 language tag or human-readable name.
     */
    val language: String

    /**
     * The agent responsible for making the dataset available.
     */
    val publisher: Agent?

    /**
     * The agent responsible for validating the content of the dataset.
     */
    val validator: Agent?

    /**
     * Represents the thematic classification(s) of the dataset. Themes are organized using
     * Concept schemes such as the Simple Knowledge Organization System (SKOS), and
     * they provide a means of categorizing data into broad topic areas.
     *
     * @see SkosConcept
     */
    val theme: List<SkosConcept>?

    /**
     * Keywords or tags associated with the dataset for categorization or search purposes.
     */
    val keywords: List<String>?

    /**
     * URL of a web page that serves as the main entry point for accessing the dataset.
     * This page typically provides detailed information about the dataset, including
     * its contents, usage instructions, and other relevant metadata.
     */
    val landingPage: String?

    /**
     * Represents the version of the dataset.
     */
    val version: String?

    /**
     * Notes or comments related to the specific version of the dataset.
     */
    val versionNotes: String?

    /**
     * The length, in terms of a relevant unit such as bytes or records,
     * of the dataset represented by this instance. This property can be null.
     */
    val length: Int?

    /**
     * Holds the URL or file path of an image as a string, if available.
     * This can be used to reference an image for display or processing.
     *
     * The value is nullable, indicating that there might be cases where
     * no image is available or the image path/URL hasn't been set yet.
     */
    val img: String?

    /**
     * A variable representing a list of dataset references.
     *
     * This variable holds a list of `DatasetRefDTOBase` objects that
     * may include references to various datasets. It is nullable, meaning
     * it can either contain a list of `DatasetRefDTOBase` objects or be null.
     */
    val datasets: List<DatasetRefDTOBase>?

    /**
     * A list of theme concepts represented as SkosConcept objects.
     * This list can be null, indicating that no themes are available or applicable.
     */
    val themes: List<SkosConcept>?

    /**
     * Represents the current state of a dataset.
     *
     * This variable can hold different states a dataset might be in, such as
     * loading, completed, failed, or any custom state defined in the `DatasetState` class.
     *
     * It is used to track the progress and status of dataset operations within the application.
     */
    val status: DatasetState

    /**
     * The homepage URL of the dataset. This can be a web page providing more information about the dataset.
     * It is an optional field, meaning that if no homepage is available, the value can be null.
     */
    val homepage: String?

    /**
     * The display name or label for the dataset.
     * This is a human-readable string that can be used for displaying the dataset name
     * in user interfaces or presentations.
     * It is optional and can be null if not specified.
     */
    val display: String?

    /**
     * A related resource from which the dataset is derived.
     * @example "Internal Data from IoT sensors
     */
    val source: String?

    /**
     * A legal document under which the dataset is made available.
     * @example "ODbL 1.0"
     */
    val license: String?

    /**
     * The file format (MIME type) of the distribution.
     * @example "application/json"
     */
    val format: String?

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
data class DatasetDTOBase(
    override val id: String,
    override val identifier: String,
    override val type: String,
    override val temporalResolution: String? = null,
    override val wasGeneratedBy: Activity? = null,
    override val accessRights: String? = null,
    override val conformsTo: List<SkosConceptScheme>? = null,
    override val creator: Agent? = null,
    override val description: String? = null,
    override val title: String,
    override val releaseDate: String? = null,
    override val language: String,
    override val publisher: Agent? = null,
    override val theme: List<SkosConcept>? = null,
    override val keywords: List<String>? = null,
    override val landingPage: String? = null,
    override val version: String? = null,
    override val versionNotes: String? = null,
    override val length: Int? = null,
    override val img: String? = null,
    override val datasets: List<DatasetRefDTOBase>? = null,
    override val themes: List<SkosConcept>? = null,
    override val status: DatasetState,
    override val homepage: String? = null,
    override val display: String? = null,
    override val validator: Agent? = null,
    override val source: String? = null,
    override val license: String? = null,
    override val format: String? = null,
    override val issued: Long? = null,
    override val modified: Long? = null,
): DatasetDTO

@JsExport
interface DatasetRefDTO {
    val id: String
    val identifier: String
    val title: String
    val type: String
    val description: String?
    val homepage: String?
    val img: String?
    val display: String?
    val themes: List<SkosConceptDTO>?
    val status: DatasetState?
}


@Serializable
data class DatasetRefDTOBase(
    override val id: String,
    override val identifier: String,
    override val title: String,
    override val type: String,
    override val description: String? = null,
    override val homepage: String? = null,
    override val img: String? = null,
    override val display: String? = null,
    override val themes: List<SkosConcept>? = null,
    override val status: DatasetState? = null,
): DatasetRefDTO

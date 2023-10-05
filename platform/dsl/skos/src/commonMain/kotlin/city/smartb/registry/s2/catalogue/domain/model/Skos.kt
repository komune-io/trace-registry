package city.smartb.registry.s2.catalogue.domain.model

import kotlinx.serialization.Serializable

@Serializable
data class SkosContext(
    val skos: String = "http://www.w3.org/2004/02/skos/core#"
)

typealias SkosConceptId = String

// Concept
@Serializable
data class SkosConcept(
    val id: SkosConceptId,
    val type: String = "skos:Concept",
    val prefLabels: Map<String, String>,
    val definitions: Map<String, String>,
    val broader: String? = null
)

@Serializable
// Concept Scheme
data class SkosConceptScheme(
    val id: String,
    val type: String = "skos:ConceptScheme",
    val prefLabel: Map<String, String>,
    val definition: Map<String, String>,
    val hasTopConcept: String,
    val concepts: List<SkosConcept>
)

// Usage

val context = SkosContext()

val scheme = SkosConceptScheme(
    id = "http://example.com/schemes/animals",
    prefLabel = mapOf("en" to "Animal Concept Scheme"),
    definition = mapOf("en" to "A concept scheme about animals"),
    hasTopConcept = "http://example.com/animals/vertebrates",
    concepts = listOf(
        SkosConcept(
            id = "http://example.com/animals/vertebrates",
            prefLabels = mapOf("en" to "Vertebrates"),
            definitions = mapOf("en" to "Animals with a backbone")
        ),
        SkosConcept(
            id = "http://example.com/animals/invertebrates",
            prefLabels = mapOf("en" to "Invertebrates"),
            definitions = mapOf("en" to "Animals without a backbone")
        )
    )
)


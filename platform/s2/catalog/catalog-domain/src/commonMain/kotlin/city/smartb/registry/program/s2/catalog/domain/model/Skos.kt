package city.smartb.registry.program.s2.catalog.domain.model

// Context
data class SkosContext(
    val skos: String = "http://www.w3.org/2004/02/skos/core#"
)

// Concept
data class SkosConcept(
    val id: String,
    val type: String = "skos:Concept",
    val prefLabels: Map<String, String>,
    val definitions: Map<String, String>,
    val broader: String? = null
)

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


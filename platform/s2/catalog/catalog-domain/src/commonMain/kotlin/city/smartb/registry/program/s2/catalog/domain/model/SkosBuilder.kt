package city.smartb.registry.program.s2.catalog.domain.model


@DslMarker
annotation class SkosDsl


fun concept(block: SkosConceptBuilder.() -> Unit): SkosConcept = SkosConceptBuilder().apply(block).build()

@SkosDsl
class SkosConceptBuilder {
    var id: String? = null
    var type: String = "skos:Concept"
    var prefLabels: MutableMap<String, String> = mutableMapOf()
    var definitions: MutableMap<String, String> = mutableMapOf()
    var broader: String? = null

    fun prefLabels(block: PREFLABELS.() -> Unit) = prefLabels.putAll(PREFLABELS().apply(block))
    fun definitions(block: DEFINITIONS.() -> Unit) = definitions.putAll(DEFINITIONS().apply(block))

    fun build() = SkosConcept(id!!, type, prefLabels, definitions, broader)
}

typealias PREFLABELS = HashMap<String, String>
typealias DEFINITIONS = HashMap<String, String>
fun conceptScheme(block: SkosConceptSchemeBuilder.() -> Unit): SkosConceptScheme = SkosConceptSchemeBuilder().apply(block).build()
class SkosConceptSchemeBuilder {
    var id: String? = null
    var type: String = "skos:ConceptScheme"
    var prefLabel: MutableMap<String, String> = mutableMapOf()
    var definition: MutableMap<String, String> = mutableMapOf()
    var hasTopConcept: String? = null
    var concepts: MutableList<SkosConcept> = mutableListOf()

    fun prefLabel(block: PREFLABEL.() -> Unit) = prefLabel.putAll(PREFLABEL().apply(block))
    fun definition(block: DEFINITION.() -> Unit) = definition.putAll(DEFINITION().apply(block))
    fun concepts(block: CONCEPTS.() -> Unit) = concepts.addAll(CONCEPTS().apply(block))

    fun build() = SkosConceptScheme(
        id = id ?: throw IllegalArgumentException("id must be set"),
        type = type,
        prefLabel = prefLabel,
        definition = definition,
        hasTopConcept = hasTopConcept ?: throw IllegalArgumentException("hasTopConcept must be set"),
        concepts = concepts
    )
}

typealias PREFLABEL  = HashMap<String, String>
typealias DEFINITION = HashMap<String, String>
typealias CONCEPTS = ArrayList<SkosConcept>


fun CONCEPTS.concept(block: SkosConceptBuilder.() -> Unit) {
    add(SkosConceptBuilder().apply(block).build())
}


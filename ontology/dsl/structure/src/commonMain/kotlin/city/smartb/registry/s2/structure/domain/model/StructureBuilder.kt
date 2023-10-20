package city.smartb.registry.s2.structure.domain.model

@DslMarker
annotation class StructureDsl

fun structure(block: StructureBuilder.() -> Unit): Structure = StructureBuilder().apply(block).build()

@StructureDsl
class StructureBuilder {
    lateinit var type: String
    val definitions: DEFINITIONS = hashMapOf()

    fun definitions(block: DEFINITIONS.() -> Unit) = definitions.putAll(DEFINITIONS().apply(block))

    fun build() = Structure(type, definitions)
}

typealias DEFINITIONS = HashMap<String, String>

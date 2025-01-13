package io.komune.registry.project.test.bdd.config

import au.com.origin.snapshots.jackson.serializers.v1.DeterministicJacksonSnapshotSerializer
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.core.JsonParser
import com.fasterxml.jackson.databind.DeserializationContext
import com.fasterxml.jackson.databind.JavaType
import com.fasterxml.jackson.databind.JsonDeserializer
import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.module.SimpleModule
import java.io.IOException


class CustomJacksonSerializer: DeterministicJacksonSnapshotSerializer() {
    override fun configure(objectMapper: ObjectMapper) {
        super.configure(objectMapper)

        val module = SimpleModule()
        module.addDeserializer(List::class.java, GenericOrderedArrayDeserializer())
        objectMapper.registerModule(module);

        objectMapper.addMixIn(Any::class.java, IgnoreIdFields::class.java)
    }

    internal abstract class IgnoreIdFields {
        @get:JsonIgnore
        abstract val id: String?

        @get:JsonIgnore
        abstract val identifier: String?
    }
}

class GenericOrderedArrayDeserializer : JsonDeserializer<List<*>?>() {
    @Throws(IOException::class)
    override fun deserialize(p: JsonParser, ctxt: DeserializationContext): List<*> {
        val mapper = p.getCodec() as ObjectMapper
        val arrayNode: JsonNode = mapper.readTree(p)
        val nodes: ArrayList<JsonNode> = ArrayList<JsonNode>()
        arrayNode.forEach(nodes::add)

        // Sort by "identifier" field if it exists
        nodes.sortWith(Comparator.comparing { node -> node.path("identifier").asText("") })

        // Deserialize each element in the sorted order
        val listType: JavaType = ctxt.getContextualType() // Type of the list
        val elementType: JavaType = listType.containedType(0) // Type of list element
        val result: MutableList<Any> = ArrayList()
        for (node in nodes) {
            result.add(mapper.treeToValue(node, elementType.getRawClass()))
        }

        return result
    }
}

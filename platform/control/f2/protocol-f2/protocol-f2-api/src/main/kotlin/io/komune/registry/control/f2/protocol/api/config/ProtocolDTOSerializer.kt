package io.komune.registry.control.f2.protocol.api.config

import com.fasterxml.jackson.core.JsonParser
import com.fasterxml.jackson.databind.DeserializationContext
import com.fasterxml.jackson.databind.JsonDeserializer
import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.module.SimpleModule
import io.komune.registry.api.commons.utils.jsonMapper
import io.komune.registry.control.f2.protocol.domain.model.DataCollectionStep
import io.komune.registry.control.f2.protocol.domain.model.DataSection
import io.komune.registry.control.f2.protocol.domain.model.Protocol
import io.komune.registry.control.f2.protocol.domain.model.ProtocolDTO
import io.komune.registry.control.f2.protocol.domain.model.ReservedProtocolTypes
import kotlinx.serialization.KSerializer
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.descriptors.buildClassSerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import kotlinx.serialization.json.JsonDecoder
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import org.springframework.boot.autoconfigure.jackson.Jackson2ObjectMapperBuilderCustomizer
import org.springframework.context.annotation.Configuration
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder

@Configuration
class ProtocolDTOJacksonConfig : Jackson2ObjectMapperBuilderCustomizer {
    init {
        val module = SimpleModule().addDeserializer(ProtocolDTO::class.java, ProtocolDTOJacksonDeserializer)
        jsonMapper.registerModule(module)
    }

    override fun customize(builder: Jackson2ObjectMapperBuilder) {
        builder.deserializerByType(ProtocolDTO::class.java, ProtocolDTOJacksonDeserializer)
    }
}

private object ProtocolDTOJacksonDeserializer : JsonDeserializer<ProtocolDTO>() {
    override fun deserialize(p: JsonParser, ctxt: DeserializationContext): ProtocolDTO {
        val mapper = p.codec as ObjectMapper
        val node: JsonNode = mapper.readTree(p)

        val type = node["type"]?.asText()

        return when (type) {
            ReservedProtocolTypes.DATA_COLLECTION_STEP -> mapper.treeToValue(node, DataCollectionStep::class.java)
            ReservedProtocolTypes.DATA_SECTION -> mapper.treeToValue(node, DataSection::class.java)
            else -> mapper.treeToValue(node, Protocol::class.java)
        }
    }
}

object ProtocolDTOSerializer : KSerializer<ProtocolDTO> {
    override val descriptor: SerialDescriptor = buildClassSerialDescriptor("ProtocolDTO")

    override fun deserialize(decoder: Decoder): ProtocolDTO {
        val input = decoder as? JsonDecoder ?: error("Can only deserialize from JSON")
        val jsonObject = input.decodeJsonElement().jsonObject
        val type = jsonObject["type"]?.jsonPrimitive?.content

        return input.json.decodeFromJsonElement(serializerForType(type), jsonObject)
    }

    override fun serialize(encoder: Encoder, value: ProtocolDTO) {
        encoder.encodeSerializableValue(serializerForType(value.type), value)
    }

    private fun serializerForType(type: String?): KSerializer<ProtocolDTO> {
        return when (type) {
            ReservedProtocolTypes.DATA_COLLECTION_STEP -> DataCollectionStep.serializer()
            ReservedProtocolTypes.DATA_SECTION -> DataSection.serializer()
            else -> Protocol.serializer()
        } as KSerializer<ProtocolDTO>
    }
}

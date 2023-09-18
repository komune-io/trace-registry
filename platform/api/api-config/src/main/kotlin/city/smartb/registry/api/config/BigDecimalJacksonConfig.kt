package city.smartb.registry.api.config

import city.smartb.registry.s2.commons.model.BigDecimalAsNumber
import com.fasterxml.jackson.core.JsonGenerator
import com.fasterxml.jackson.core.JsonParser
import com.fasterxml.jackson.databind.DeserializationContext
import com.fasterxml.jackson.databind.JsonDeserializer
import com.fasterxml.jackson.databind.JsonSerializer
import com.fasterxml.jackson.databind.SerializerProvider
import com.ionspin.kotlin.bignum.decimal.toBigDecimal
import org.springframework.boot.autoconfigure.jackson.Jackson2ObjectMapperBuilderCustomizer
import org.springframework.context.annotation.Configuration
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder

@Configuration
class BigDecimalJacksonConfig: Jackson2ObjectMapperBuilderCustomizer {
    override fun customize(builder: Jackson2ObjectMapperBuilder) {
        builder.serializerByType(BigDecimalAsNumber::class.java, BigDecimalSerializer)
        builder.deserializerByType(BigDecimalAsNumber::class.java, BigDecimalDeserializer)
    }

}

private object BigDecimalSerializer: JsonSerializer<BigDecimalAsNumber>() {
    override fun serialize(value: BigDecimalAsNumber, gen: JsonGenerator, serializers: SerializerProvider) {
        gen.writeNumber(value.doubleValue(false))
    }
}

private object BigDecimalDeserializer: JsonDeserializer<BigDecimalAsNumber>() {
    override fun deserialize(p: JsonParser, ctxt: DeserializationContext): BigDecimalAsNumber {
        return p.doubleValue.toBigDecimal()
    }
}

package city.smartb.registry.program.api.commons.model

import com.ionspin.kotlin.bignum.decimal.BigDecimal
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable
import kotlinx.serialization.descriptors.PrimitiveKind
import kotlinx.serialization.descriptors.PrimitiveSerialDescriptor
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder

typealias BigDecimalAsString = @Serializable(BigDecimalAsStringSerializer::class) BigDecimal
typealias BigDecimalAsNumber = @Serializable(BigDecimalAsNumberSerializer::class) BigDecimal

object BigDecimalAsStringSerializer: KSerializer<BigDecimal> {
    override val descriptor: SerialDescriptor = PrimitiveSerialDescriptor("BigDecimal", PrimitiveKind.STRING)
    override fun serialize(encoder: Encoder, value: BigDecimal) = encoder.encodeString(value.toStringExpanded())
    override fun deserialize(decoder: Decoder): BigDecimal = BigDecimal.parseString(decoder.decodeString())
}

object BigDecimalAsNumberSerializer: KSerializer<BigDecimal> {
    override val descriptor: SerialDescriptor = PrimitiveSerialDescriptor("BigDecimal", PrimitiveKind.DOUBLE)
    override fun serialize(encoder: Encoder, value: BigDecimal) = encoder.encodeDouble(value.doubleValue(false))
    override fun deserialize(decoder: Decoder): BigDecimal = BigDecimal.fromDouble(decoder.decodeDouble())
}

fun BigDecimal.respectsGranularity(granularity: BigDecimal): Boolean {
    /*
     * This lib's rem function is thought for integers, so the modulus is only done on the significands, no matter the exponents.
     * Hence the comparisons on the rightmost digits to check the precision.
     */
    return this % granularity == BigDecimal.ZERO
            && rightMostDigitIndex() >= granularity.rightMostDigitIndex()
}

fun BigDecimal.rightMostDigitIndex(): Long {
    return exponent - precision - 1
}

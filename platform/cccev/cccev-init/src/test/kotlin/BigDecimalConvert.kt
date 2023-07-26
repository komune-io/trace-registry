import com.ionspin.kotlin.bignum.decimal.BigDecimal
import com.ionspin.kotlin.bignum.decimal.toBigDecimal
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test

class BigDecimalConvert {

    @Test
    fun arithmeticExceptionDouble() {
        val value = 2.001.toBigDecimal().doubleValue(false)
        Assertions.assertThat(value).isEqualTo(2.001)
    }

    @Test
    fun arithmeticExceptionFloat() {
        val value = BigDecimal.fromFloat(0.001f).floatValue(false)
        Assertions.assertThat(value).isEqualTo(0.001f)
    }

}
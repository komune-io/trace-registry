import io.komune.registry.s2.order.domain.s2Order
import org.junit.jupiter.api.Test
import s2.automate.documenter.S2Documenter
import s2.automate.documenter.writeS2Automate

class S2OrderTest {

    @Test
    fun s2Documenter() {
        S2Documenter()
            .writeS2Automate(s2Order)
    }

}

package city.smartb.registry.program.infra.pdf

import com.ionspin.kotlin.bignum.decimal.BigDecimal
import org.junit.jupiter.api.Test
import java.io.File

class CertificateGeneratorTest {

    @Test
    fun fill() {
        val certifiedBy = "Sustainable Future Group"
        val project = "Certicongo"
        val result = CertificateGenerator.fill("lala",1002020,"lala", BigDecimal.TEN,"lala", certifiedBy, project)
        val pdf = File("certificate.pdf")
            pdf.writeBytes(result)
            println(pdf.writeBytes(result))
        println(pdf.absolutePath)
    }
}
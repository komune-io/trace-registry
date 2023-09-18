package city.smartb.registry.infra.pdf

import com.ionspin.kotlin.bignum.decimal.BigDecimal
import java.io.File
import org.junit.jupiter.api.Test

class CertificateGeneratorTest {

    @Test
    fun fill() {
        val certifiedBy = "Sustainable Future Group"
        val project = "Certicongo"
        val result = CertificateGenerator.fillPendingCertificate("lala", 1002020, "lala", BigDecimal.TEN, "lala")
        val pdf = File("certificate.pdf")
            pdf.writeBytes(result)
            println(pdf.writeBytes(result))
        println(pdf.absolutePath)
    }
}
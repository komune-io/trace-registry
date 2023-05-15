package city.smartb.registry.program.infra.pdf

import org.junit.jupiter.api.Test
import java.io.File

class CertificateGeneratorTest {

    @Test
    fun fill() {
        val result = CertificateGenerator.fill()
        val pdf = File("certificate.pdf")
            pdf.writeBytes(result)
        println(pdf.absolutePath)
    }
}
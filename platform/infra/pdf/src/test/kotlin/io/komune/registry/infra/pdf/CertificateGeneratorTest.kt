package io.komune.registry.infra.pdf

import com.ionspin.kotlin.bignum.decimal.BigDecimal
import java.io.File
import org.junit.jupiter.api.Test

class CertificateGeneratorTest {

    @Test
    fun fill() {
//        val certifiedBy = "Sustainable Future Group"
//        val project = "Certicongo"
        val result = CertificateGenerator.fillPendingCertificate(
            transactionId = "lala",
            date = 1002020,
            issuedTo = "Orange",
            quantity = "10",
            indicator = "tonnes de CO2 économisées",
            certifiedBy = "Kerdos",
            title = "Installation de panneaux potovoltaiques sur bâtiments tertiaires"

        )
        val pdf = File("build/certificate.pdf")
        pdf.writeBytes(result)
        println(pdf.writeBytes(result))
        println(pdf.absolutePath)
    }
}

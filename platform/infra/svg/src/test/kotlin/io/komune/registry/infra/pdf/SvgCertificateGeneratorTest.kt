package io.komune.registry.infra.pdf

import com.ionspin.kotlin.bignum.decimal.BigDecimal
import java.io.File
import org.junit.jupiter.api.Test

class SvgCertificateGeneratorTest {

    @Test
    fun fill() {
//        val certifiedBy = "Sustainable Future Group"
//        val project = "Certicongo"
        val result = SvgCertificateGenerator.fillFinalCertificate(
            "transactionId",
            1002020,
            "issuedTo",
            "10", "tonnes de CO2 économisées"
            , "certifiedBy",
            "title"
        )
        val pdf = File("build/certificate.pdf")
        pdf.writeBytes(result)
        println(pdf.writeBytes(result))
        println(pdf.absolutePath)
    }

    @Test
    fun fillsvgTest() {
//        val certifiedBy = "Sustainable Future Group"
//        val project = "Certicongo"
        val result = SvgCertificateGenerator.fillSvg(
            SvgCertificateGenerator.TEMPLATE_CERTIFICATE,
            "Is Issued To",
            1002020,
            "the transaction id",
            "17829", "tonnes de CO2 économisées"
            , "Is Certified By",
            "The Title"
        )
        val pdf = File("build/certificate.svg")
        pdf.writeBytes(result.toByteArray())
        println(pdf.absolutePath)
    }
}

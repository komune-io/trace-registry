package city.smartb.registry.program.infra.pdf

import org.springframework.core.io.support.PathMatchingResourcePatternResolver

object CertificateGenerator {
    const val TEMPLATE_CERTIFICATE = "classpath:certificate.html"


    private const val FIELD_SUPERVISOR_FILL = "(nom)"

    fun fill(): ByteArray {
        val template = TEMPLATE_CERTIFICATE

        val userName = "Odilon"
        return PathMatchingResourcePatternResolver().getResource(template)
            .inputStream
            .readAllBytes()
            .decodeToString()
            .replace(FIELD_SUPERVISOR_FILL, userName)
            .let(HtmlToPdfConverter::htmlToPdfB64)
    }
}

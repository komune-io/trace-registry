package io.komune.registry.infra.pdf

import java.text.SimpleDateFormat
import java.util.Date
import org.springframework.core.io.support.PathMatchingResourcePatternResolver

object SvgCertificateGenerator {
    const val TEMPLATE_CERTIFICATE = "classpath:certificat.svg"
    const val TEMPLATE_CERTIFICATE_PENDING = "classpath:certificat.svg"

    private const val FIELD_ISSUEDTO = "(entreprise)"
    private const val FIELD_DATE = "(date)"
    private const val FIELD_CERTIFIED_BY = "(certifiedBy)"
    private const val FIELD_TRANSACTION = "(transaction)"
    private const val FIELD_PROJECT = "(title)"
    private const val FIELD_CARBON = "(nombre)"
    private const val FIELD_CARBON_INDICATOR = "(indicateur)"
//    private const val FIELD_CARBON_INDICATOR_VERB = "(indicateur_verb)"

//    fun fillPendingCertificate(
//        transactionId: String,
//        date: Long,
//        issuedTo: String,
//        quantity: String,
//        indicator: String?,
//        certifiedBy: String? = null,
//        title: String? = null
//    ): ByteArray {
//        return fill(
//            TEMPLATE_CERTIFICATE_PENDING,
//            transactionId,
//            date,
//            issuedTo,
//            quantity,
//            indicator,
//            certifiedBy,
//            title
//        )
//    }

    fun fillFinalCertificate(
        transactionId: String,
        date: Long,
        issuedTo: String,
        quantity: String,
        indicator: String?,
        certifiedBy: String? = null,
        title: String? = null
    ): ByteArray {
        return fill(TEMPLATE_CERTIFICATE, transactionId, date, issuedTo, quantity, indicator, certifiedBy, title)
    }

    private fun fill(
        template: String,
        transactionId: String,
        date: Long,
        issuedTo: String,
        quantity: String,
        indicator: String?,
        certifiedBy: String? = null,
        title: String? = null
    ): ByteArray {
        var templateFilled = PathMatchingResourcePatternResolver().getResource(template)
            .inputStream
            .readAllBytes()
            .decodeToString()
            .replace(FIELD_ISSUEDTO, issuedTo)
            .replace(FIELD_DATE, SimpleDateFormat("MMMMMMMMMMM dd, yyyy").format(Date(date)))
            .replace(FIELD_TRANSACTION, transactionId)
            .replace(FIELD_CARBON, quantity)

        indicator?.let {
            templateFilled = templateFilled.replace(FIELD_CARBON_INDICATOR, indicator)
        }

        certifiedBy?.let {
            templateFilled = templateFilled.replace(FIELD_CERTIFIED_BY, certifiedBy)
        }

        title?.let {
            templateFilled = templateFilled.replace(FIELD_PROJECT, title)
        }

        return templateFilled.let(SvgToPdfConverter::convert)
    }
}

package io.komune.registry.infra.pdf

import com.google.zxing.BarcodeFormat
import com.google.zxing.MultiFormatWriter
import com.google.zxing.common.BitMatrix
import org.apache.commons.text.StringEscapeUtils
import org.springframework.core.io.support.PathMatchingResourcePatternResolver
import java.io.StringWriter
import java.text.SimpleDateFormat
import java.util.Date


object SvgCertificateGenerator {
    const val TEMPLATE_CERTIFICATE = "classpath:certificate.svg"

    private const val FIELD_ISSUEDTO = "(enterprise)"
    private const val FIELD_DATE = "(date)"
    private const val FIELD_CERTIFIED_BY = "(certifiedBy)"
    private const val FIELD_TRANSACTION = "(transaction)"
    private const val FIELD_TITLE = "(title)"
    private const val FIELD_VALUE = "(value)"
    private const val FIELD_UNIT = "(unit)"
    private const val FIELD_QRCODE = "(qrcode)"
    private const val FIELD_TYPE = "(type)"
    private const val FIELD_VALIDATION = "(validation)"
    private const val FIELD_VALIDATION_VALUE = "(Déclaré)"

    fun fillFinalCertificate(
        transactionId: String,
        date: Long,
        issuedTo: String,
        indicatorValue: String,
        indicatorUnit: String,
        certifiedBy: String? = null,
        title: String? = null,
        url: String? = null,
        subUnit: String? = null
    ): ByteArray {
        return fill(
            template = TEMPLATE_CERTIFICATE,
            issuedTo = issuedTo,
            date = date,
            transactionId = transactionId,
            indicatorUnit = indicatorUnit,
            indicatorValue = indicatorValue,
            certifiedBy = certifiedBy,
            title = title,
            url = url,
            subUnit = subUnit
        )
    }

    private fun fill(
        template: String,
        transactionId: String,
        date: Long,
        issuedTo: String,
        indicatorValue: String,
        indicatorUnit: String,
        certifiedBy: String? = null,
        title: String? = null,
        url: String? = null,
        subUnit: String? = null
    ): ByteArray {
        val templateFilled = fillSvg(
            template = template,
            issuedTo = issuedTo,
            date = date,
            transactionId = transactionId,
            indicatorUnit = indicatorUnit,
            indicatorValue = indicatorValue,
            certifiedBy = certifiedBy,
            title = title,
            subUnit = subUnit,
            url = url
        )
        return templateFilled.let(SvgToPdfConverter::convert)
    }

    fun fillSvg(
        template: String,
        issuedTo: String,
        date: Long,
        transactionId: String,
        indicatorValue: String,
        indicatorUnit: String?,
        certifiedBy: String?,
        title: String?,
        url: String? = null,
        subUnit: String?
    ): String {
        var templateFilled = PathMatchingResourcePatternResolver().getResource(template)
            .inputStream
            .readAllBytes()
            .decodeToString()
            .replaceText(FIELD_ISSUEDTO, issuedTo)
            .replaceText(FIELD_DATE, SimpleDateFormat("MMMMMMMMMMM dd, yyyy").format(Date(date)))
            .replaceText(FIELD_TRANSACTION, transactionId)
            .replaceText(FIELD_VALUE, indicatorValue)
            .replaceText(FIELD_VALIDATION, FIELD_VALIDATION_VALUE)
            .replaceText(FIELD_TYPE, subUnit ?: "")
            .replaceText(FIELD_UNIT, indicatorUnit ?: "")
            .replaceText(FIELD_CERTIFIED_BY, certifiedBy ?: "")
            .replaceText(FIELD_TITLE, title ?: "")

        url?.let {
            val qrCodeSvg = generateQrCodeSvg(url)
            templateFilled = templateFilled.replace(FIELD_QRCODE, qrCodeSvg)
        }
        return templateFilled
    }
}

fun String.replaceText(key: String, value: String): String {
    return replace(key, StringEscapeUtils.escapeXml10(value))
}

fun generateQrCodeSvg(text: String, size: Int = 285): String {
    val bitMatrix: BitMatrix = MultiFormatWriter().encode(text, BarcodeFormat.QR_CODE, size, size)
    val svgWriter = StringWriter()
    // Optional: wrap in a <g> tag for grouping
    svgWriter.write("""<g id="qrcode" transform="translate(1410, 650)">""")

    for (y in 0 until bitMatrix.height) {
        for (x in 0 until bitMatrix.width) {
            if (bitMatrix[x, y]) {
                svgWriter.write("""<rect x="$x" y="$y" width="1" height="1" fill="black" />""")
            }
        }
    }

    svgWriter.write("</g>")
    return svgWriter.toString()
}

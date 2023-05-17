package city.smartb.registry.program.infra.pdf

import com.ionspin.kotlin.bignum.decimal.BigDecimal
import org.springframework.core.io.support.PathMatchingResourcePatternResolver
import ssm.chaincode.dsl.blockchain.TransactionId
import java.text.SimpleDateFormat
import java.util.*


object CertificateGenerator {
    const val TEMPLATE_CERTIFICATE = "classpath:certificate.html"


    private const val FIELD_ISSUEDTO = "(entreprise)"
    private const val FIELD_DATE = "(date)"
    private const val FIELD_COMPANY = "(entreprise 1)"
    private const val FIELD_TRANSACTION = "(adresse)"
    private const val FIELD_PROJECT = "(projet)"
    private const val FIELD_CARBON = "(nombre)"
    private const val FIELD_CARBON_INDICATOR = "(indicateur)"

    fun fill(
        transactionId: TransactionId,
        date: Long,
        issuedTo: String,
        quantity: BigDecimal,
        indicator: String

    ): ByteArray {
        val template = TEMPLATE_CERTIFICATE

        val company = "Sustainable Future Group"
        val project = "Certicongo"

        return PathMatchingResourcePatternResolver().getResource(template)
            .inputStream
            .readAllBytes()
            .decodeToString()
            .replace(FIELD_ISSUEDTO, issuedTo)
            .replace(FIELD_DATE, SimpleDateFormat("MMMMMMMMMMM dd, yyyy").format(Date(date)))
            .replace(FIELD_COMPANY, company)
            .replace(FIELD_TRANSACTION, transactionId)
            .replace(FIELD_PROJECT, project)
            .replace(FIELD_CARBON, quantity.toPlainString())
            .replace(FIELD_CARBON_INDICATOR, indicator)
            .let(HtmlToPdfConverter::htmlToPdfB64)
    }
}

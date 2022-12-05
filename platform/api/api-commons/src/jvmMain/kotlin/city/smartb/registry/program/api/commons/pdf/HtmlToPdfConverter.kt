package city.smartb.registry.program.api.commons.pdf

import com.itextpdf.html2pdf.HtmlConverter
import java.io.ByteArrayOutputStream

object HtmlToPdfConverter {
	fun htmlToPdfB64(html: String): ByteArray {
		return ByteArrayOutputStream().use { outputStream ->
			HtmlConverter.convertToPdf(html, outputStream)
			outputStream.toByteArray()
		}
	}
}

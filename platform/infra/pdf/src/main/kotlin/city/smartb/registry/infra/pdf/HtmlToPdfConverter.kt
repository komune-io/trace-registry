package city.smartb.registry.infra.pdf

import com.itextpdf.html2pdf.ConverterProperties
import com.itextpdf.html2pdf.HtmlConverter
import com.itextpdf.kernel.geom.PageSize
import com.itextpdf.kernel.pdf.PdfDocument
import com.itextpdf.kernel.pdf.PdfWriter
import com.itextpdf.styledxmlparser.css.media.MediaDeviceDescription
import java.io.ByteArrayOutputStream
import java.io.OutputStream

object HtmlToPdfConverter {
	fun htmlToPdfB64(html: String): ByteArray {
		return ByteArrayOutputStream().use { outputStream ->
			val converterProperties = ConverterProperties()
			converterProperties.mediaDeviceDescription = MediaDeviceDescription.createDefault().apply {
			}
			convertToPdf(html, outputStream, converterProperties)
			outputStream.toByteArray()
		}
	}
}

fun convertToPdf(html: String?, pdfStream: OutputStream?, converterProperties: ConverterProperties?) {
	val test = PdfDocument(PdfWriter(pdfStream))
	test.defaultPageSize = PageSize.A4.rotate()
	HtmlConverter.convertToPdf(html, test, converterProperties)
}

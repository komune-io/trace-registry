package io.komune.registry.infra.pdf

import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import java.io.InputStream
import java.io.OutputStream
import org.apache.batik.transcoder.TranscoderInput
import org.apache.batik.transcoder.TranscoderOutput
import org.apache.fop.svg.PDFTranscoder

object SvgToPdfConverter {
	fun convert(html: String): ByteArray {
		return ByteArrayOutputStream().use { outputStream ->
			convertSvgToPdf(ByteArrayInputStream(html.toByteArray()), outputStream)
			outputStream.toByteArray()
		}
	}
}

@Suppress("TooGenericExceptionThrown")
fun convertSvgToPdf(svgInput: InputStream, pdfStream: OutputStream?) {
	try {
		val input = TranscoderInput(svgInput)
		val output = TranscoderOutput(pdfStream)

		val transcoder = PDFTranscoder()
		transcoder.transcode(input, output)
	} catch (e: Throwable) {
		throw RuntimeException("Error converting SVG to PDF", e)
	}

}

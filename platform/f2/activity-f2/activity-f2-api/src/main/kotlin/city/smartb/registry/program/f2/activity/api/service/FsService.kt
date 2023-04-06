//package city.smartb.registry.program.f2.activity.api.service
//
////import city.smartb.fs.s2.file.client.FileClient
//import city.smartb.fs.s2.file.domain.features.command.FileDeleteCommand
//import city.smartb.fs.s2.file.domain.features.command.FileDeletedEvent
//import city.smartb.fs.s2.file.domain.features.command.FileUploadCommand
//import city.smartb.fs.s2.file.domain.features.query.FileDownloadQuery
//import city.smartb.fs.s2.file.domain.features.query.FileListQuery
//import city.smartb.fs.s2.file.domain.model.FilePathDTO
//import java.net.URLConnection
//import java.util.Base64
//import org.springframework.http.ContentDisposition
//import org.springframework.http.MediaType
//import org.springframework.http.server.reactive.ServerHttpResponse
//import org.springframework.stereotype.Service
//
//@Service
//class FsService(
////	private val fileClient: FileClient
//) {
//	suspend fun getFiles(query: FileListQuery): List<ExternalFile> {
//		return fileClient.fileList(listOf(query)).first().items.map {file ->
//			ExternalFile(
//				name = getFileName(file.url),
//				url = file.url,
//				metadata = file.metadata
//			)
//		}
//	}
//
//	suspend fun uploadFile(cmd: FileUploadCommand, base64: String): ExternalFile? = verifyB64File(base64) { file ->
//		uploadFile(cmd, file)
//	}
//
//	suspend fun uploadFile(cmd: FileUploadCommand, file: ByteArray): ExternalFile {
//		val img = fileClient.fileUpload(cmd, file)
//		return ExternalFile(
//			name = img.path.name,
//			url = img.url,
//			metadata = img.metadata
//		)
//	}
//
//	suspend fun deleteFile(cmd: FileDeleteCommand): FileDeletedEvent {
//		return fileClient.fileDelete(listOf(cmd)).first()
//	}
//
//	private suspend fun verifyB64File(
//		b64: String,
//		metadata: Map<String, String> = emptyMap(),
//		exec: suspend (data: ByteArray) -> ExternalFile
//	): ExternalFile {
//		val isUrl = b64.startsWith("http")
//		if(isUrl) {
//			val fileName = getFileName(b64)
//			return ExternalFile(name = fileName, url = b64, metadata = metadata)
//		}
//		val data = Base64.getDecoder().decode(b64.substringAfterLast(";base64,"))
//		return exec(data)
//	}
//
//	private fun getFileName(url: String): String {
//		return url.split("/").last()
//	}
//
//	suspend fun downloadFile(
//		response: ServerHttpResponse,
//		getFilePath: suspend () -> FilePathDTO?
//	): ByteArray? {
//		val path = getFilePath() ?: return null
//
//		response.configureHeadersForFile(path.name)
//
//		return FileDownloadQuery(
//			objectType = path.objectType,
//			objectId = path.objectId,
//			directory = path.directory,
//			name = path.name
//		).let { fileClient.fileDownload(it) }
//	}
//}
//
//
//
//fun ServerHttpResponse.configureHeadersForFile(name: String) {
//	headers.contentDisposition = ContentDisposition.attachment().filename(name).build()
//	headers.contentType = URLConnection.guessContentTypeFromName(name)
//		?.split("/")
//		?.takeIf { it.size == 2 }
//		?.let { (type, subtype) -> MediaType(type, subtype) }
//		?: MediaType.APPLICATION_OCTET_STREAM
//}

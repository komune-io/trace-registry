package city.smartb.registry.infra.fs

import city.smartb.fs.s2.file.client.FileClient
import city.smartb.fs.s2.file.domain.features.command.FileUploadedEvent
import city.smartb.fs.s2.file.domain.features.query.FileGetQuery
import city.smartb.fs.s2.file.domain.features.query.FileListQuery
import city.smartb.fs.s2.file.domain.model.File
import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.fs.spring.utils.contentByteArray
import city.smartb.fs.spring.utils.toUploadCommand
import org.springframework.http.codec.multipart.FilePart
import org.springframework.stereotype.Service

@Service
class FsService(
	private val fileClient: FileClient
) {
	suspend fun getFiles(query: FileListQuery): List<File> {
		return fileClient.fileList(listOf(query)).first().items.map {file ->
			file
		}
	}
	suspend fun getFile(query: FileGetQuery): File? {
		return fileClient.fileGet(listOf(query)).first().item
	}
	object FsPath {
		const val CATALOGUE_TYPE = "catalogue"
		const val CATALOGUE_DIR_IMG = "img"
	}


	suspend fun uploadCatalogueImg(
		filePart: FilePart,
		catalogueId: String,
	): FileUploadedEvent {
		val path = FilePath(
			objectType = FsPath.CATALOGUE_TYPE,
			objectId = catalogueId,
			directory = FsPath.CATALOGUE_DIR_IMG,
			name = filePart.filename(),
		)
		return fileClient.fileUpload(
			command = path.toUploadCommand(
				metadata = emptyMap(),
				vectorize = false
			),
			file = filePart.contentByteArray()
		)
	}

}

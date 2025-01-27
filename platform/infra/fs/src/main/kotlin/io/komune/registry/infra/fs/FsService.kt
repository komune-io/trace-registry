package io.komune.registry.infra.fs

import io.komune.fs.s2.file.client.FileClient
import io.komune.fs.s2.file.domain.features.command.FileUploadedEvent
import io.komune.fs.s2.file.domain.features.query.FileGetQuery
import io.komune.fs.s2.file.domain.features.query.FileListQuery
import io.komune.fs.s2.file.domain.model.File
import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.fs.spring.utils.contentByteArray
import io.komune.fs.spring.utils.toUploadCommand
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

	suspend fun getCatalogueFilePath(catalogueId: String): FilePath {
		return FilePath(
			objectType = FsPath.Catalogue.TYPE,
			objectId = catalogueId,
			directory = FsPath.Catalogue.MEDIA,
			name = FsPath.Catalogue.DEFAULT_IMAGE_NAME,
		)
	}

	suspend fun uploadCatalogueImg(
		filePart: FilePart,
		objectId: String,
	): FileUploadedEvent {
		val path = getCatalogueFilePath(objectId)
		return fileClient.fileUpload(
			command = path.toUploadCommand(
				metadata = emptyMap(),
				vectorize = false
			),
			file = filePart.contentByteArray()
		)
	}

	suspend fun uploadDatasetImg(
		filePart: FilePart,
		objectId: String,
	): FileUploadedEvent {
		val path = getCatalogueFilePath(objectId)
		return fileClient.fileUpload(
			command = path.toUploadCommand(
				metadata = emptyMap(),
				vectorize = false
			),
			file = filePart.contentByteArray()
		)
	}

}

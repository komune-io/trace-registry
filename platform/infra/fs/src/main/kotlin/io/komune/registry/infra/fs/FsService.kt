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
	object FsPath {
		const val DATASET_TYPE = "datasets"
		const val CATALOGUE_TYPE = "catalogues"
		const val DIR_IMG = "img"
		const val IMG_NAME = "img.png"
	}

	suspend fun uploadCatalogueImg(
		filePart: FilePart,
		objectId: String,
	): FileUploadedEvent {
		val path = FilePath(
			objectType = FsPath.CATALOGUE_TYPE,
			objectId = objectId,
			directory = FsPath.DIR_IMG,
			name = FsPath.IMG_NAME,
		)
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
		val path = FilePath(
			objectType = FsPath.DATASET_TYPE,
			objectId = objectId,
			directory = FsPath.DIR_IMG,
			name = FsPath.IMG_NAME,
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

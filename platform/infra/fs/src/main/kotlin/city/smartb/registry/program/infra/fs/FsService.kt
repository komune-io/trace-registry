package city.smartb.registry.program.infra.fs

import city.smartb.fs.s2.file.client.FileClient
import city.smartb.fs.s2.file.domain.features.query.FileGetQuery
import city.smartb.fs.s2.file.domain.features.query.FileListQuery
import city.smartb.fs.s2.file.domain.model.File
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

}

package city.smartb.registry.f2.dataset.api.data

import city.smartb.fs.s2.file.client.FileClient
import city.smartb.fs.s2.file.domain.features.query.FileListQuery
import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.registry.program.s2.dataset.api.DatasetFinderService
import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import city.smartb.registry.s2.dataset.domain.model.DatasetModel
import city.smartb.registry.s2.dataset.domain.model.DatasetTypes
import kotlinx.serialization.json.Json
import org.springframework.stereotype.Service

@Service
class DataProvider(
    private val datasetFinderService: DatasetFinderService,
    private val fileClient: FileClient,
) {

    private val json = Json {
        ignoreUnknownKeys = true
    }

    suspend fun retrieve(datasetId: DatasetId): List<Any> {
        val dataset = datasetFinderService.get(datasetId)
        when (dataset.type) {
            DatasetTypes.PROJECTS -> return fetchProjects(dataset)
            DatasetTypes.ACTIVITIES -> return fetchActivities(dataset)
            DatasetTypes.DOCUMENTS -> return fetchDocuments(dataset)
        }
        return listOf()
    }

    private suspend fun fetchDocuments(dataset: DatasetModel): List<FilePath> {
        val query = FileListQuery(
            objectId = dataset.id,
            objectType = "datasets",
            directory = "documents",
            recursive = true,
        )
        return fileClient.fileList(listOf(query)).first().items.map { it.path }
    }

    private fun fetchActivities(dataset: DatasetModel): List<Any> {
        TODO("Not yet implemented")
    }

    private fun fetchProjects(dataset: DatasetModel): List<Any> {
        TODO("Not yet implemented")
    }
}

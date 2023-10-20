package city.smartb.registry.ver.test.f2.dataset.command

import city.smartb.registry.dsl.skos.domain.model.SkosConcept
import city.smartb.registry.f2.dataset.api.DatasetEndpoint
import city.smartb.registry.f2.dataset.domain.command.DatasetLinkDatasetsCommandDTOBase
import city.smartb.registry.f2.dataset.domain.command.DatasetLinkThemesCommandDTOBase
import city.smartb.registry.program.s2.dataset.api.entity.DatasetEntity
import city.smartb.registry.program.s2.dataset.api.entity.DatasetRepository
import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import city.smartb.registry.ver.test.f2.dataset.data.dataset
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import f2.dsl.fnc.invokeWith
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import kotlin.jvm.optionals.getOrNull
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import s2.bdd.data.TestContextKey

class DatasetLinkF2Steps: En, city.smartb.registry.ver.test.VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var datasetEndpoint: DatasetEndpoint
    @Autowired
    private lateinit var repository: DatasetRepository

    private lateinit var linkDatasetsCommand: DatasetLinkDatasetsCommandDTOBase

    private lateinit var linkThemesCommand: DatasetLinkThemesCommandDTOBase

    init {
        DataTableType(::datasetLinkParams)
        DataTableType(::themeLinkParams)

        When("I link a dataset via API:") { params: DatasetLinkParams ->
            step {
                linkDatasetsToDataset(params)
            }
        }

        When("I link themes to a dataset via API:") { params: ThemeLinkParams ->
            step {
                linkThemesToDataset(params)
            }
        }
        Given("A dataset is linked via API:") { params: DatasetLinkParams ->
            step {
                linkDatasetsToDataset(params)
            }
        }

        Given("Some datasets are linked via API:") { dataTable: DataTable ->
            step {
                dataTable.asList(DatasetLinkParams::class.java)
                    .forEach { linkDatasetsToDataset(it) }
            }
        }

        Then ("The themes should be linked to the dataset") { params: ThemeLinkParams ->
            step {
                val itemId = context.datasetIds.safeGet(params.identifier)
                val catalog = getOne(itemId)
                AssertionBdd.dataset(repository).exists(itemId)
                Assertions.assertThat(catalog?.themes).isEqualTo(params.themes.toSet())
            }
        }

        Then("The dataset should be linked:") { params: DatasetLinkParams ->
            step {
                val itemId = context.datasetIds.safeGet(params.identifier)
                AssertionBdd.dataset(repository).exists(itemId)

//                AssertionBdd.activity(activityF2FinderService).assertThatId(activityId).hasFields(
//                    name = params.name,
//                    description = params.description,
//                    type = params.type,
//                )
            }
        }
    }

    private suspend fun linkDatasetsToDataset(params: DatasetLinkParams) = context.datasetIds.register(params.identifier) {
        linkDatasetsCommand = DatasetLinkDatasetsCommandDTOBase(
            id = context.datasetIds.safeGet(params.identifier),
            datasets = params.datasets
        )
        linkDatasetsCommand.invokeWith(datasetEndpoint.datasetLinkDatasets()).id
    }

    private suspend fun linkThemesToDataset(params: ThemeLinkParams) = context.datasetIds.register(params.identifier) {
        linkThemesCommand = DatasetLinkThemesCommandDTOBase(
            id = context.datasetIds.safeGet(params.identifier),
            themes = params.themes
        )
        linkThemesCommand.invokeWith(datasetEndpoint.datasetLinkThemes()).id
    }

    private fun getOne(id: String): DatasetEntity? {
        return repository.findById(id).getOrNull()
    }

    private fun datasetLinkParams(entry: Map<String, String>) = DatasetLinkParams(
        identifier = entry["identifier"] ?: context.datasetIds.lastUsedKey,
        datasets = entry["datasets"]?.split(",") ?: emptyList(),
    )

    private fun themeLinkParams(entry: Map<String, String>): ThemeLinkParams {
        val themesValue = entry["themes"]?.split(";") ?: emptyList()

        val themes = themesValue.map { themeString ->
            val themeJson = themeString.trim()
            try {
                val objectMapper = jacksonObjectMapper()
                objectMapper.readValue<SkosConcept>(themeJson)
            } catch (e: Exception) {
                null
            }
        }.filterNotNull()

        return ThemeLinkParams(
            identifier = entry["identifier"] ?: context.datasetIds.lastUsedKey,
            themes = themes
        )
    }


    private data class DatasetLinkParams(
        val identifier: TestContextKey,
        val datasets: List<DatasetId>,
    )

    private data class ThemeLinkParams(
        val identifier: TestContextKey,
        val themes: List<SkosConcept>
    )
}

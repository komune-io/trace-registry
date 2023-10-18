package city.smartb.registry.ver.test.f2.dataset.command

import city.smartb.registry.f2.dataset.api.DatasetEndpoint
import city.smartb.registry.f2.dataset.domain.command.DatasetCreateCommandDTOBase
import city.smartb.registry.f2.dataset.domain.query.DatasetPageQuery
import city.smartb.registry.f2.dataset.domain.query.DatasetPageResult
import city.smartb.registry.program.s2.dataset.api.entity.DatasetRepository
import city.smartb.registry.ver.test.f2.dataset.data.dataset
import f2.dsl.fnc.invokeWith
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import s2.bdd.data.TestContextKey

class DatasetCreateF2Steps: En, city.smartb.registry.ver.test.VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var datasetEndpoint: DatasetEndpoint
    @Autowired
    private lateinit var repository: DatasetRepository

    private lateinit var command: DatasetCreateCommandDTOBase

    init {
        DataTableType(::datasetCreateParams)
        DataTableType(::datasetPageParams)
        DataTableType(::datasetAssertParams)

        When("I create a dataset via API") {
            step {
                create(datasetCreateParams(null))
            }
        }

        When("I create a dataset via API:") { params: DatasetCreateParams ->
            step {
                create(params)
            }
        }

        Given("A dataset is created via API") {
            step {
                create(datasetCreateParams(null))
            }
        }

        Given("A dataset is created via API:") { params: DatasetCreateParams ->
            step {
                create(params)
            }
        }

        Given("Some datasets are created via API:") { dataTable: DataTable ->
            step {
                dataTable.asList(DatasetCreateParams::class.java)
                    .forEach { create(it) }
            }
        }

        Then("The dataset page should contain the datasets") {
            step {
                val page = getPage()
                Assertions.assertThat(page.items.size).isGreaterThan(0)
            }
        }

        Then("The dataset page should contain only this status:") { params: DatasetPageParams ->
            step {
                val page = getPage(params)
                Assertions.assertThat(page.items).allMatch { it.status.name == params.status }
            }
        }

        Then("The dataset page shouldn't contain this status:") { params: DatasetPageParams ->
            step {
                val page = getPage(params)
                if(params.identifier != null) {
                    Assertions.assertThat(page.items.map { it.identifier }).doesNotContain(params.identifier)
                } else {
                    Assertions.assertThat(page.items.size).isEqualTo(0)
                }
            }
        }

        Then("The dataset should be created:") { params: DatasetAssertParams ->
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

    private suspend fun create(params: DatasetCreateParams) = context.datasetIds.register(params.identifier) {
        command = DatasetCreateCommandDTOBase(
            title = params.title,
            identifier = params.identifier,
            description = params.description,
            type = params.type,
            theme = emptyList(),
        )
        command.invokeWith(datasetEndpoint.datasetCreate()).id
    }

    private suspend fun getPage(params: DatasetPageParams = DatasetPageParams()): DatasetPageResult {
        return params.toDatasetPageQueryDTOBase().invokeWith(datasetEndpoint.datasetPage())
    }

    private fun datasetCreateParams(entry: Map<String, String>?) = DatasetCreateParams(
        identifier = entry?.get("identifier").orRandom(),
        title = entry?.get("title") ?: "My Dataset",
        description = entry?.get("description") ?: "My Dataset description",
        status = entry?.get("status") ?: "ACTIVE",
        homepage = entry?.get("homepage") ?: "https://www.smartb.city",
        type = entry?.get("type") ?: "Dataset",
        display = entry?.get("display") ?: "grid",
    )

    private data class DatasetCreateParams(
        val identifier: TestContextKey,
        val title: TestContextKey,
        val description: String,
        val type: String,
        val display: String,
        val homepage: String,
        val status: String
    )

    private fun datasetPageParams(entry: Map<String, String>?) = DatasetPageParams(
        offset = entry?.get("offset")?.toInt() ?: 0,
        limit = entry?.get("limit")?.toInt() ?: 10,
        status = entry?.get("status") ?: "ACTIVE",
        title = entry?.get("title"),
        identifier = entry?.get("identifier")
    )

    private data class DatasetPageParams(
        val offset: Int? = null,
        val limit: Int? = null,
        val status: String? = null,
        val title: String? = null,
        val identifier: String? = null
    )

    private fun DatasetPageParams.toDatasetPageQueryDTOBase(): DatasetPageQuery {
        return DatasetPageQuery(
            offset = offset,
            limit = limit,
            status = status,
            title = title,
        )
    }

    private fun datasetAssertParams(entry: Map<String, String>) = DatasetAssertParams(
        identifier = entry["identifier"] ?: context.datasetIds.lastUsedKey,
        title = entry["title"],
    )

    private data class DatasetAssertParams(
        val identifier: TestContextKey,
        val title: String?,
    )
}

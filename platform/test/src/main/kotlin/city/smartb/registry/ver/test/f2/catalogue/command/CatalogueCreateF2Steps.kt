package city.smartb.registry.ver.test.f2.catalogue.command

import city.smartb.registry.f2.catalogue.api.CatalogueEndpoint
import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.query.CataloguePageQuery
import city.smartb.registry.f2.catalogue.domain.query.CataloguePageResult
import city.smartb.registry.program.s2.catalogue.api.entity.CatalogueRepository
import city.smartb.registry.ver.test.f2.catalogue.data.catalogue
import f2.dsl.fnc.invokeWith
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import s2.bdd.data.TestContextKey

class CatalogueCreateF2Steps: En, city.smartb.registry.ver.test.VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var catalogueEndpoint: CatalogueEndpoint
    @Autowired
    private lateinit var repository: CatalogueRepository

    private lateinit var command: CatalogueCreateCommandDTOBase

    init {
        DataTableType(::catalogueCreateParams)
        DataTableType(::cataloguePageParams)
        DataTableType(::catalogueAssertParams)

        When("I create a catalogue via API") {
            step {
                create(catalogueCreateParams(null))
            }
        }

        When("I create a catalogue via API:") { params: CatalogueCreateParams ->
            step {
                create(params)
            }
        }

        Given("A catalogue is created via API") {
            step {
                create(catalogueCreateParams(null))
            }
        }

        Given("A catalogue is created via API:") { params: CatalogueCreateParams ->
            step {
                create(params)
            }
        }

        Given("Some catalogues are created via API:") { dataTable: DataTable ->
            step {
                dataTable.asList(CatalogueCreateParams::class.java)
                    .forEach { create(it) }
            }
        }

        Then("The catalogue page should contain the catalogues") {
            step {
                val page = getPage()
                Assertions.assertThat(page.items.size).isGreaterThan(0)
            }
        }

        Then("The catalogue page should contain only this status:") { params: CataloguePageParams ->
            step {
                val page = getPage(params)
                Assertions.assertThat(page.items).allMatch { it.status.name == params.status }
            }
        }

        Then("The catalogue page shouldn't contain this status:") { params: CataloguePageParams ->
            step {
                val page = getPage(params)
                if(params.identifier != null) {
                    Assertions.assertThat(page.items.map { it.identifier }).doesNotContain(params.identifier)
                } else {
                    Assertions.assertThat(page.items.size).isEqualTo(0)
                }
            }
        }

        Then("The catalogue should be created:") { params: CatalogueAssertParams ->
            step {
                val itemId = context.catalogueIds.safeGet(params.identifier)
                AssertionBdd.catalogue(repository).exists(itemId)

//                AssertionBdd.activity(activityF2FinderService).assertThatId(activityId).hasFields(
//                    name = params.name,
//                    description = params.description,
//                    type = params.type,
//                )
            }
        }
    }

    private suspend fun create(params: CatalogueCreateParams) = context.catalogueIds.register(params.identifier) {
        command = CatalogueCreateCommandDTOBase(
            title = params.title,
            identifier = params.identifier,
            description = params.description,
            type = params.type,
            display = params.display,
            homepage = params.homepage,
            catalogues = emptyList(),
            themes = emptyList(),
        )
        command.invokeWith(catalogueEndpoint.catalogueCreate()).id
    }

    private suspend fun getPage(params: CataloguePageParams = CataloguePageParams()): CataloguePageResult {
        return params.toCataloguePageQueryDTOBase().invokeWith(catalogueEndpoint.cataloguePage())
    }

    private fun catalogueCreateParams(entry: Map<String, String>?) = CatalogueCreateParams(
        identifier = entry?.get("identifier").orRandom(),
        title = entry?.get("title") ?: "My Catalogue",
        description = entry?.get("description") ?: "My Catalogue description",
        status = entry?.get("status") ?: "ACTIVE",
        homepage = entry?.get("homepage") ?: "https://www.smartb.city",
        type = entry?.get("type") ?: "Catalogue",
        display = entry?.get("display") ?: "grid",
    )

    private data class CatalogueCreateParams(
        val identifier: TestContextKey,
        val title: TestContextKey,
        val description: String,
        val type: String,
        val display: String,
        val homepage: String,
        val status: String
    )

    private fun cataloguePageParams(entry: Map<String, String>?) = CataloguePageParams(
        offset = entry?.get("offset")?.toInt() ?: 0,
        limit = entry?.get("limit")?.toInt() ?: 10,
        status = entry?.get("status") ?: "ACTIVE",
        identifier = entry?.get("identifier"),
    )

    private data class CataloguePageParams(
        val offset: Int? = null,
        val limit: Int? = null,
        val status: String? = null,
        val identifier: String? = null,
        val title: String? = null
    )

    private fun CataloguePageParams.toCataloguePageQueryDTOBase(): CataloguePageQuery {
        return CataloguePageQuery(
            offset = offset,
            limit = limit,
            status = status,
            title = title,
        )
    }

    private fun catalogueAssertParams(entry: Map<String, String>) = CatalogueAssertParams(
        identifier = entry["identifier"] ?: context.catalogueIds.lastUsedKey,
        title = entry["title"],
    )

    private data class CatalogueAssertParams(
        val identifier: TestContextKey,
        val title: String?,
    )
}

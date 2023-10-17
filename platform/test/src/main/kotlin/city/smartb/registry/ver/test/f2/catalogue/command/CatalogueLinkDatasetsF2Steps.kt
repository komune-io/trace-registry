package city.smartb.registry.ver.test.f2.catalogue.command

import city.smartb.registry.f2.catalogue.api.CatalogueEndpoint
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkDatasetsCommandDTOBase
import city.smartb.registry.program.s2.catalogue.api.entity.CatalogueRepository
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.command.DatasetId
import city.smartb.registry.ver.test.f2.catalogue.data.catalogue
import f2.dsl.fnc.invokeWith
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import s2.bdd.data.TestContextKey

class CatalogueLinkDatasetsF2Steps: En, city.smartb.registry.ver.test.VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var catalogueEndpoint: CatalogueEndpoint
    @Autowired
    private lateinit var repository: CatalogueRepository

    private lateinit var linkDatasetsCommand: CatalogueLinkDatasetsCommandDTOBase

    init {
        DataTableType(::catalogueLinkParams)

        When("I link datasets to the catalogue via API:") { params: CatalogueLinkDatasetsParams ->
            step {
                linkDatasetsToCatalogue(params)
            }
        }

        Given("A datasets is linked to the catalogue via API:") { params: CatalogueLinkDatasetsParams ->
            step {
                linkDatasetsToCatalogue(params)
            }
        }

        Given("Some datasets are linked to the catalogue via API:") { dataTable: DataTable ->
            step {
                dataTable.asList(CatalogueLinkDatasetsParams::class.java)
                    .forEach { linkDatasetsToCatalogue(it) }
            }
        }

        Then("The datasets should be linked to the catalogue:") { params: CatalogueLinkDatasetsParams ->
            step {
                val itemId = context.catalogueIds.safeGet(params.identifier)
                AssertionBdd.catalogue(repository).assertThatId(itemId).hasDatasets(params.datasets)
            }
        }
    }

    private suspend fun linkDatasetsToCatalogue(params: CatalogueLinkDatasetsParams) = context.catalogueIds.register(params.identifier) {
        linkDatasetsCommand = CatalogueLinkDatasetsCommandDTOBase(
            id = context.catalogueIds.safeGet(params.identifier),
            datasets = params.datasets
        )
        linkDatasetsCommand.invokeWith(catalogueEndpoint.catalogueLinkDatasets()).id
    }

    private fun catalogueLinkParams(entry: Map<String, String>) = CatalogueLinkDatasetsParams(
        identifier = entry["identifier"] ?: context.catalogueIds.lastUsedKey,
        datasets = entry["datasets"]?.split(",") ?: emptyList(),
    )

    private data class CatalogueLinkDatasetsParams(
        val identifier: TestContextKey,
        val datasets: List<DatasetId>,
    )

}

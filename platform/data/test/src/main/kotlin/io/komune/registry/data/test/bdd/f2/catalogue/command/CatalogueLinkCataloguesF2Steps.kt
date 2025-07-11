package io.komune.registry.data.test.bdd.f2.catalogue.command

import f2.dsl.fnc.invokeWith
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import io.komune.registry.data.test.bdd.VerCucumberStepsDefinition
import io.komune.registry.data.test.bdd.f2.catalogue.data.catalogue
import io.komune.registry.f2.catalogue.api.CatalogueEndpoint
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesCommandDTOBase
import io.komune.registry.s2.catalogue.api.entity.CatalogueRepository
import io.komune.registry.s2.commons.model.CatalogueId
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import s2.bdd.data.TestContextKey

class CatalogueLinkCataloguesF2Steps: En, VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var catalogueEndpoint: CatalogueEndpoint
    @Autowired
    private lateinit var repository: CatalogueRepository

    private lateinit var linkCataloguesCommand: CatalogueLinkCataloguesCommandDTOBase

    init {
        DataTableType(::catalogueLinkParams)

        When("I link a catalogue via API:") { params: CatalogueLinkParams ->
            step {
                linkCataloguesToDataset(params)
            }
        }

        Given("A catalogue is linked via API:") { params: CatalogueLinkParams ->
            step {
                linkCataloguesToDataset(params)
            }
        }

        Given("Some catalogues are linked via API:") { dataTable: DataTable ->
            step {
                dataTable.asList(CatalogueLinkParams::class.java)
                    .forEach { linkCataloguesToDataset(it) }
            }
        }

        Then("The catalogue should be linked:") { params: CatalogueLinkParams ->
            step {
                val itemId = context.catalogueIds.safeGet(params.identifier)
                AssertionBdd.catalogue(repository).exists(itemId)
            }
        }
        Then("The catalogues should be linked:") { params: CatalogueLinkParams ->
            step {
                val itemId = context.catalogueIds.safeGet(params.identifier)
                AssertionBdd.catalogue(repository).exists(itemId)
            }
        }
    }

    private suspend fun linkCataloguesToDataset(params: CatalogueLinkParams)
        = context.catalogueIds.register(params.identifier) {
        linkCataloguesCommand = CatalogueLinkCataloguesCommandDTOBase(
            id = context.catalogueIds.safeGet(params.identifier),
            catalogues = params.catalogues
        )
        linkCataloguesCommand.invokeWith(catalogueEndpoint.catalogueLinkCatalogues()).id
    }

    private fun catalogueLinkParams(entry: Map<String, String>) = CatalogueLinkParams(
        identifier = entry["identifier"] ?: context.catalogueIds.lastUsedKey,
        catalogues = entry["catalogues"]?.split(",") ?: emptyList(),
    )

    private data class CatalogueLinkParams(
        val identifier: TestContextKey,
        val catalogues: List<CatalogueId>,
    )

}

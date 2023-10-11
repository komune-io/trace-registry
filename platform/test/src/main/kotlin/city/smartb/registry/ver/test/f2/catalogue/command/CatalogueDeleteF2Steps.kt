package city.smartb.registry.ver.test.f2.catalogue.command

import city.smartb.registry.f2.catalogue.api.CatalogueEndpoint
import city.smartb.registry.f2.catalogue.domain.command.CatalogueDeleteCommandDTOBase
import city.smartb.registry.program.s2.catalogue.api.entity.CatalogueRepository
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueState
import city.smartb.registry.s2.catalogue.domain.command.CatalogueDeleteCommand
import city.smartb.registry.ver.test.f2.catalogue.data.catalogue
import f2.dsl.fnc.invokeWith
import io.cucumber.java8.En
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import s2.bdd.data.TestContextKey

class CatalogueDeleteF2Steps: En, city.smartb.registry.ver.test.VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var catalogueEndpoint: CatalogueEndpoint
    @Autowired
    private lateinit var repository: CatalogueRepository
    private lateinit var command: CatalogueDeleteCommand

    init {
        DataTableType(::catalogueDeleteParams)

        When("I delete the catalogue") {
            step {
                deleteCatalogue(catalogueDeleteParams(null))
            }
        }

        Then("The catalogue should be deleted") {
            step {
                val catalogueId = context.catalogueIds.lastUsed
                AssertionBdd.catalogue(repository).assertThatId(catalogueId)
                    .hasFields( status = CatalogueState.DELETED )
            }
        }
    }

    private suspend fun deleteCatalogue(params: CatalogueDeleteParams) {
        command = CatalogueDeleteCommand(
            id = context.catalogueIds[params.identifier] ?: params.identifier
        )
        command.invokeWith(catalogueEndpoint.catalogueDelete())
    }

    private fun catalogueDeleteParams(entry: Map<String, String>?) = CatalogueDeleteParams(
        identifier = entry?.get("identifier") ?: context.catalogueIds.lastUsedKey
    )

    private data class CatalogueDeleteParams(
        val identifier: TestContextKey
    )
}
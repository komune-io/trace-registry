package city.smartb.registry.ver.test.f2.catalogue.command

import city.smartb.registry.f2.catalogue.api.CatalogueEndpoint
import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkThemesCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.query.CataloguePageQuery
import city.smartb.registry.f2.catalogue.domain.query.CataloguePageResult
import city.smartb.registry.program.s2.catalogue.api.entity.CatalogueEntity
import city.smartb.registry.program.s2.catalogue.api.entity.CatalogueRepository
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.model.SkosConcept
import city.smartb.registry.ver.test.f2.catalogue.data.catalogue
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import f2.dsl.fnc.invokeWith
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import java.util.Optional
import kotlin.jvm.optionals.getOrNull
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import s2.bdd.data.TestContextKey

class CatalogueLinkCataloguesF2Steps: En, city.smartb.registry.ver.test.VerCucumberStepsDefinition() {

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
    }

    private suspend fun linkCataloguesToDataset(params: CatalogueLinkParams) = context.catalogueIds.register(params.identifier) {
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

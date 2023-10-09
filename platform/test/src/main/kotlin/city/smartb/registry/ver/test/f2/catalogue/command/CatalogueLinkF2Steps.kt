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

class CatalogueLinkF2Steps: En, city.smartb.registry.ver.test.VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var catalogueEndpoint: CatalogueEndpoint
    @Autowired
    private lateinit var repository: CatalogueRepository

    private lateinit var linkCataloguesCommand: CatalogueLinkCataloguesCommandDTOBase

    private lateinit var linkThemesCommand: CatalogueLinkThemesCommandDTOBase

    init {
        DataTableType(::catalogueLinkParams)
        DataTableType(::themeLinkParams)

        When("I link a catalogue via API:") { params: CatalogueLinkParams ->
            step {
                createPool(params)
            }
        }

        When("I link themes to a catalogue via API:") { params: ThemeLinkParams ->
            step {
                linkThemesToCatalogue(params)
            }
        }
        Given("A catalogue is linked via API:") { params: CatalogueLinkParams ->
            step {
                createPool(params)
            }
        }

        Given("Some catalogues are linked via API:") { dataTable: DataTable ->
            step {
                dataTable.asList(CatalogueLinkParams::class.java)
                    .forEach { createPool(it) }
            }
        }

        Then ("The themes should be linked to the catalogue") { params: ThemeLinkParams ->
            step {
                val itemId = context.catalogueIds.safeGet(params.identifier)
                val catalog = getOne(itemId)
                AssertionBdd.catalogue(repository).exists(itemId)
                Assertions.assertThat(catalog?.themes).isEqualTo(params.themes)
            }
        }

        Then("The catalogue should be linked:") { params: CatalogueLinkParams ->
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

    private suspend fun createPool(params: CatalogueLinkParams) = context.catalogueIds.register(params.identifier) {
        linkCataloguesCommand = CatalogueLinkCataloguesCommandDTOBase(
            id = context.catalogueIds.safeGet(params.identifier),
            catalogues = params.catalogues
        )
        linkCataloguesCommand.invokeWith(catalogueEndpoint.catalogueLinkCatalogues()).id
    }

    private suspend fun linkThemesToCatalogue(params: ThemeLinkParams) = context.catalogueIds.register(params.identifier) {
        linkThemesCommand = CatalogueLinkThemesCommandDTOBase(
            id = context.catalogueIds.safeGet(params.identifier),
            themes = params.themes
        )
        linkThemesCommand.invokeWith(catalogueEndpoint.catalogueLinkThemes()).id
    }

    private fun getOne(id: String): CatalogueEntity? {
        return repository.findById(id).getOrNull()
    }

    private fun catalogueLinkParams(entry: Map<String, String>) = CatalogueLinkParams(
        identifier = entry["identifier"] ?: context.catalogueIds.lastUsedKey,
        catalogues = entry["catalogues"]?.split(",") ?: emptyList(),
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
            identifier = entry["identifier"] ?: context.catalogueIds.lastUsedKey,
            themes = themes
        )
    }


    private data class CatalogueLinkParams(
        val identifier: TestContextKey,
        val catalogues: List<CatalogueId>,
    )

    private data class ThemeLinkParams(
        val identifier: TestContextKey,
        val themes: List<SkosConcept>
    )
}

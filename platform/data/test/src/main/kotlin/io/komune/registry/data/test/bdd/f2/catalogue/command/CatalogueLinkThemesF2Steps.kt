package io.komune.registry.data.test.bdd.f2.catalogue.command

import f2.dsl.fnc.invokeWith
import io.cucumber.java8.En
import io.komune.registry.data.test.bdd.ConceptKey
import io.komune.registry.data.test.bdd.VerCucumberStepsDefinition
import io.komune.registry.data.test.bdd.f2.catalogue.data.catalogue
import io.komune.registry.f2.catalogue.api.CatalogueEndpoint
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkThemesCommandDTOBase
import io.komune.registry.program.s2.catalogue.api.entity.CatalogueRepository
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import s2.bdd.data.TestContextKey
import s2.bdd.data.parser.safeExtractList

class CatalogueLinkThemesF2Steps: En, VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var catalogueEndpoint: CatalogueEndpoint

    @Autowired
    private lateinit var repository: CatalogueRepository

    private lateinit var command: CatalogueLinkThemesCommandDTOBase

    init {
        DataTableType(::themeLinkParams)

        When("I link themes to a catalogue via API:") { params: ThemeLinkParams ->
            step {
                linkThemesToCatalogue(params)
            }
        }

        Then ("The themes should be linked to the catalogue") {
            step {
                AssertionBdd.catalogue(repository)
                    .assertThatId(command.id)
                    .hasFields(themes = command.themes.toSet())
            }
        }

    }

    private suspend fun linkThemesToCatalogue(params: ThemeLinkParams) = context.catalogueIds.register(params.identifier) {
        command = CatalogueLinkThemesCommandDTOBase(
            id = context.catalogueIds.safeGet(params.identifier),
            themes = params.themes.map { context.conceptIds[it] ?: it }
        )
        command.invokeWith(catalogueEndpoint.catalogueLinkThemes()).id
    }

    private fun themeLinkParams(entry: Map<String, String>) = ThemeLinkParams(
        identifier = entry["identifier"] ?: context.catalogueIds.lastUsedKey,
        themes = entry.safeExtractList("themes")
    )

    private data class ThemeLinkParams(
        val identifier: TestContextKey,
        val themes: List<ConceptKey>
    )
}

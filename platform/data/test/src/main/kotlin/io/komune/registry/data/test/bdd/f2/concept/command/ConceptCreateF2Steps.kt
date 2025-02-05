package io.komune.registry.data.test.bdd.f2.concept.command

import f2.dsl.fnc.invokeWith
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import io.komune.registry.api.commons.utils.parseJsonTo
import io.komune.registry.data.test.bdd.ConceptKey
import io.komune.registry.data.test.bdd.VerCucumberStepsDefinition
import io.komune.registry.f2.concept.api.ConceptEndpoint
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.domain.command.ConceptCreateCommand
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.data.parser.extractList

class ConceptCreateF2Steps: En, VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var conceptEndpoint: ConceptEndpoint

    private lateinit var command: ConceptCreateCommand

    init {
        DataTableType(::conceptCreateParams)

        When("I create a concept via API") {
            step {
                create(conceptCreateParams(null))
            }
        }

        When("I create a concept via API:") { params: ConceptCreateParams ->
            step {
                create(params)
            }
        }

        Given("A concept is created via API") {
            step {
                create(conceptCreateParams(null))
            }
        }

        Given("A concept is created via API:") { params: ConceptCreateParams ->
            step {
                create(params)
            }
        }

        Given("Some concepts are created via API:") { dataTable: DataTable ->
            step {
                dataTable.asList(ConceptCreateParams::class.java)
                    .forEach { create(it) }
            }
        }
    }

    private suspend fun create(params: ConceptCreateParams) = context.conceptIds.register(params.identifier) {
        command = ConceptCreateCommand(
            identifier = params.identifier,
            prefLabels = params.prefLabels,
            definitions = params.definitions,
            schemes = params.schemes.toSet(),
        )
        command.invokeWith(conceptEndpoint.conceptCreate()).id
    }

    private fun conceptCreateParams(entry: Map<String, String>?) = ConceptCreateParams(
        identifier = entry?.get("identifier").orRandom(),
        prefLabels = entry?.get("prefLabels")?.parseJsonTo() ?: emptyMap(),
        definitions = entry?.get("definitions")?.parseJsonTo() ?: emptyMap(),
        schemes = entry?.extractList<String>("schemes").orEmpty(),
    )

    private data class ConceptCreateParams(
        val identifier: ConceptKey,
        val prefLabels: Map<Language, String>,
        val definitions: Map<Language, String>,
        val schemes: List<String>,
    )
}

package city.smartb.registry.program.ver.test.cccev.concept

import cccev.dsl.client.CCCEVClient
import cccev.s2.concept.domain.command.InformationConceptCreateCommand
import city.smartb.registry.program.ver.test.VerCucumberStepsDefinition
import f2.dsl.fnc.invokeWith
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import java.util.UUID
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.data.TestContextKey

class InformationConceptCreateSteps: En, VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var cccevClient: CCCEVClient

    private lateinit var command: InformationConceptCreateCommand

    init {
        DataTableType(::informationConceptCreateParams)

        When("I create a concept in cccev") {
            step {
                createConcept(informationConceptCreateParams(null))
            }
        }

        When("I create a concept in cccev:") { params: InformationConceptCreateParams ->
            step {
                createConcept(params)
            }
        }

        Given("A concept is created in cccev") {
            step {
                createConcept(informationConceptCreateParams(null))
            }
        }

        Given("A concept is created in cccev:") { params: InformationConceptCreateParams ->
            step {
                createConcept(params)
            }
        }

        Given("Some concepts are created in cccev:") { dataTable: DataTable ->
            step {
                dataTable.asList(InformationConceptCreateParams::class.java)
                    .forEach { createConcept(it) }
            }
        }
    }

    private suspend fun createConcept(params: InformationConceptCreateParams) = context.cccevConceptIds.register(params.identifier) {
        command = InformationConceptCreateCommand(
            identifier = "${params.identifier}_${UUID.randomUUID()}",
            name = params.name,
            description = "",
            hasUnit = context.cccevUnitIds.safeGet(params.unit),
            expressionOfExpectedValue = null,
            dependsOn = null
        )
        context.cccevConceptIdentifiers[params.identifier] = command.identifier!!
        command.invokeWith(cccevClient.informationConceptClient.conceptCreate()).id
    }

    private fun informationConceptCreateParams(entry: Map<String, String>?) = InformationConceptCreateParams(
        identifier = entry?.get("identifier").orRandom(),
        name = entry?.get("name") ?: "carbon",
        unit = entry?.get("unit") ?: context.cccevUnitIds.lastUsedKey,
    )

    private data class InformationConceptCreateParams(
        val identifier: TestContextKey,
        val name: String,
        val unit: TestContextKey
    )
}

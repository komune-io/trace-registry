package city.smartb.registry.program.ver.test.cccev.unit

import cccev.dsl.client.CCCEVClient
import cccev.f2.unit.domain.command.DataUnitCreateCommandDTOBase
import cccev.s2.unit.domain.model.DataUnitType
import city.smartb.registry.program.ver.test.VerCucumberStepsDefinition
import f2.dsl.fnc.invokeWith
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.data.TestContextKey

class DataUnitCreateSteps: En, VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var cccevClient: CCCEVClient

    private lateinit var command: DataUnitCreateCommandDTOBase

    init {
        DataTableType(::dataUnitCreateParams)

        When("I create a data unit in cccev") {
            step {
                createUnit(dataUnitCreateParams(null))
            }
        }

        When("I create a data unit in cccev:") { params: DataUnitCreateParams ->
            step {
                createUnit(params)
            }
        }

        Given("A data unit is created in cccev") {
            step {
                createUnit(dataUnitCreateParams(null))
            }
        }

        Given("A data unit is created in cccev:") { params: DataUnitCreateParams ->
            step {
                createUnit(params)
            }
        }

        Given("Some data units are created in cccev:") { dataTable: DataTable ->
            step {
                dataTable.asList(DataUnitCreateParams::class.java)
                    .forEach { createUnit(it) }
            }
        }
    }

    private suspend fun createUnit(params: DataUnitCreateParams) = context.cccevUnitIds.register(params.identifier) {
        command = DataUnitCreateCommandDTOBase(
            name = params.name,
            description = "",
            notation = params.notation,
            type = params.type.name
        )
        command.invokeWith(cccevClient.dataUnitClient.dataUnitCreate()).id
    }

    private fun dataUnitCreateParams(entry: Map<String, String>?) = DataUnitCreateParams(
        identifier = entry?.get("identifier").orRandom(),
        name = entry?.get("name") ?: "carbon",
        notation = entry?.get("notation") ?: "t",
        type = entry?.get("type")?.let { DataUnitType.valueOf(it) } ?: DataUnitType.NUMBER
    )

    private data class DataUnitCreateParams(
        val identifier: TestContextKey,
        val name: String,
        val notation: String,
        val type: DataUnitType
    )
}

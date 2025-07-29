package io.komune.registry.test.control.core.cccev.unit.command

import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import io.komune.registry.control.core.cccev.unit.DataUnitAggregateService
import io.komune.registry.control.core.cccev.unit.command.DataUnitCreateCommand
import io.komune.registry.control.core.cccev.unit.entity.DataUnitRepository
import io.komune.registry.control.core.cccev.unit.model.DataUnitType
import io.komune.registry.test.RgCucumberStepsDefinition
import io.komune.registry.test.control.core.cccev.unit.data.dataUnit
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import s2.bdd.data.TestContextKey
import s2.bdd.data.parser.extract

class DataUnitCreateSteps: En, RgCucumberStepsDefinition() {

    @Autowired
    private lateinit var dataUnitAggregateService: DataUnitAggregateService

    @Autowired
    private lateinit var dataUnitRepository: DataUnitRepository

    private lateinit var command: DataUnitCreateCommand

    init {
        DataTableType(::dataUnitCreateParams)
        DataTableType(::dataUnitAssertParams)

        When("I create a data unit") {
            step {
                createDataUnit(dataUnitCreateParams(null))
            }
        }

        When("I create a data unit:") { params: DataUnitCreateParams ->
            step {
                createDataUnit(params)
            }
        }

        Given("A data unit is created") {
            step {
                createDataUnit(dataUnitCreateParams(null))
            }
        }

        Given("A data unit is created:") { params: DataUnitCreateParams ->
            step {
                createDataUnit(params)
            }
        }

        Given("Some data units are created:") { dataTable: DataTable ->
            step {
                dataTable.asList(DataUnitCreateParams::class.java)
                    .forEach { createDataUnit(it) }
            }
        }

        Then("The data unit should be created") {
            step {
                val unitId = context.cccev.unitIds.lastUsed
                AssertionBdd.dataUnit(dataUnitRepository).assertThatId(unitId).hasFields(
                    name = command.name,
                    description = command.description,
                    notation = command.notation,
                    type = command.type,
                )
            }
        }

        Then("The data unit should be created:") { params: DataUnitAssertParams ->
            step {
                val unitId = context.cccev.unitIds.safeGet(params.identifier)
                val unit = dataUnitRepository.findById(unitId)
                Assertions.assertThat(unit).isNotNull

                AssertionBdd.dataUnit(dataUnitRepository).assertThat(unit!!).hasFields(
                    name = params.name ?: unit.name,
                    description = params.description ?: unit.description,
                    notation = params.notation.parseNullableOrDefault(unit.notation),
                    type = params.type ?: unit.type,
                )
            }
        }
    }

    private suspend fun createDataUnit(params: DataUnitCreateParams) = context.cccev.unitIds.register(params.identifier) {
        command = DataUnitCreateCommand(
            name = params.name,
            identifier = params.identifier,
            description = params.description,
            notation = params.notation,
            type = params.type,
            options = emptyList()
        )
        dataUnitAggregateService.create(command).id
    }

    private fun dataUnitCreateParams(entry: Map<String, String>?) = DataUnitCreateParams(
        identifier = entry?.get("identifier").orRandom(),
        name = entry?.get("name").orRandom(),
        description = entry?.get("description").orRandom(),
        notation = entry?.get("notation"),
        type = entry?.extract<DataUnitType>("type") ?: DataUnitType.NUMBER
    )

    private data class DataUnitCreateParams(
        val identifier: TestContextKey,
        val name: String,
        val description: String,
        val notation: String?,
        val type: DataUnitType
    )

    private fun dataUnitAssertParams(entry: Map<String, String>) = DataUnitAssertParams(
        identifier = entry["identifier"] ?: context.cccev.unitIds.lastUsedKey,
        name = entry["name"],
        description = entry["description"],
        notation = entry["notation"],
        type = entry.extract<DataUnitType>("type")
    )

    private data class DataUnitAssertParams(
        val identifier: TestContextKey,
        val name: String?,
        val description: String?,
        val notation: String?,
        val type: DataUnitType?
    )
}

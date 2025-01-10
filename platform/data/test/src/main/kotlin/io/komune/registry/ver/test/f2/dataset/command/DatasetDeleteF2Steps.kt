package io.komune.registry.ver.test.f2.dataset.command

import f2.dsl.fnc.invokeWith
import io.cucumber.java8.En
import io.komune.registry.f2.dataset.api.DatasetEndpoint
import io.komune.registry.program.s2.dataset.api.entity.DatasetRepository
import io.komune.registry.s2.dataset.domain.automate.DatasetState
import io.komune.registry.s2.dataset.domain.command.DatasetDeleteCommand
import io.komune.registry.ver.test.VerCucumberStepsDefinition
import io.komune.registry.ver.test.f2.dataset.data.dataset
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import s2.bdd.data.TestContextKey

class DatasetDeleteF2Steps: En, VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var datasetEndpoint: DatasetEndpoint
    @Autowired
    private lateinit var repository: DatasetRepository
    private lateinit var command: DatasetDeleteCommand

    init {
        DataTableType(::datasetDeleteParams)

        When("I delete the dataset") {
            step {
                deleteDataset(datasetDeleteParams(null))
            }
        }

        Then("The dataset should be deleted") {
            step {
                val datasetId = context.datasetIds.lastUsed
                AssertionBdd.dataset(repository).assertThatId(datasetId)
                    .hasFields( status = DatasetState.DELETED )
            }
        }
    }

    private suspend fun deleteDataset(params: DatasetDeleteParams) {
        command = DatasetDeleteCommand(
            id = context.datasetIds[params.identifier] ?: params.identifier
        )
        command.invokeWith(datasetEndpoint.datasetDelete())
    }

    private fun datasetDeleteParams(entry: Map<String, String>?) = DatasetDeleteParams(
        identifier = entry?.get("identifier") ?: context.datasetIds.lastUsedKey
    )

    private data class DatasetDeleteParams(
        val identifier: TestContextKey
    )
}

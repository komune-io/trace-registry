package io.komune.registry.ver.test.s2.asset.command

import cccev.dsl.model.DataUnit
import cccev.dsl.model.DataUnitType
import cccev.dsl.model.InformationConcept
import cccev.dsl.model.builder.informationConcept
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import io.komune.registry.s2.asset.api.AssetPoolAggregateService
import io.komune.registry.s2.asset.api.entity.pool.AssetPoolRepository
import io.komune.registry.s2.asset.domain.automate.AssetPoolState
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolCreateCommand
import io.komune.registry.ver.test.VerCucumberStepsDefinition
import io.komune.registry.ver.test.cccev.concept.informationConceptTest
import io.komune.registry.ver.test.s2.asset.data.assetPool
import kotlin.jvm.optionals.getOrNull
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import s2.bdd.data.TestContextKey

class AssetPoolCreateSteps: En, VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var assetPoolAggregateService: AssetPoolAggregateService

    @Autowired
    private lateinit var assetPoolRepository: AssetPoolRepository

    private lateinit var command: AssetPoolCreateCommand

    init {
        DataTableType(::assetPoolCreateParams)
        DataTableType(::assertPoolAssertParams)

        When("I create an asset pool") {
            step {
                createPool(assetPoolCreateParams(null))
            }
        }

        When("I create an asset pool:") { params: AssetPoolCreateParams ->
            step {
                createPool(params)
            }
        }

        Given("An asset pool is created") {
            step {
                createPool(assetPoolCreateParams(null))
            }
        }

        Given("An asset pool is created:") { params: AssetPoolCreateParams ->
            step {
                createPool(params)
            }
        }

        Given("Some asset pools are created:") { dataTable: DataTable ->
            step {
                dataTable.asList(AssetPoolCreateParams::class.java)
                    .forEach { createPool(it) }
            }
        }

        Then("The asset pool should be created") {
            step {
                val poolId = context.assetPoolIds.lastUsed
                AssertionBdd.assetPool(assetPoolRepository).assertThatId(poolId).hasFields(
                    status = AssetPoolState.ACTIVE,
                    vintage = command.vintage,
                    indicator = command.indicator,
                    granularity = command.granularity,
                )
            }
        }

        Then("The asset pool should be created:") { params: AssertPoolAssertParams ->
            step {
                val poolId = context.assetPoolIds.safeGet(params.identifier)
                val pool = assetPoolRepository.findById(poolId).getOrNull()
                Assertions.assertThat(pool).isNotNull

                AssertionBdd.assetPool(assetPoolRepository).assertThat(pool!!).hasFields(
                    vintage = params.vintage ?: pool.vintage,
                    indicator = pool.indicator ?: informationConcept {
                        identifier = "carbon"
                        name = "Carbon"
                        unit = DataUnit(
                            identifier = "ton",
                            name = "Ton",
                            description = "",
                            notation = "t",
                            type = DataUnitType.NUMBER
                        )
                    } as InformationConcept,
                    granularity = params.granularity ?: pool.granularity,
                )
            }
        }
    }

    private suspend fun createPool(params: AssetPoolCreateParams) = context.assetPoolIds.register(params.identifier) {
        command = AssetPoolCreateCommand(
            vintage = params.vintage,
            indicator = informationConceptTest(params.indicator),
            granularity = params.granularity,
            metadata = emptyMap()
        )
        assetPoolAggregateService.create(command).id
    }

    private fun assetPoolCreateParams(entry: Map<String, String>?) = AssetPoolCreateParams(
        identifier = entry?.get("identifier").orRandom(),
        vintage = entry?.get("vintage") ?: "2023",
        indicator = entry?.get("indicator") ?: "carbon",
        granularity = entry?.get("granularity")?.toDouble() ?: 1.0
    )

    private data class AssetPoolCreateParams(
        val identifier: TestContextKey,
        val vintage: String,
        val indicator: TestContextKey,
        val granularity: Double
    )

    private fun assertPoolAssertParams(entry: Map<String, String>) = AssertPoolAssertParams(
        identifier = entry["identifier"] ?: context.assetPoolIds.lastUsedKey,
        vintage = entry["vintage"],
        indicator = entry["indicator"],
        granularity = entry["granularity"]?.toDouble(),
    )

    private data class AssertPoolAssertParams(
        val identifier: TestContextKey,
        val vintage: String?,
        val indicator: TestContextKey?,
        val granularity: Double?
    )
}

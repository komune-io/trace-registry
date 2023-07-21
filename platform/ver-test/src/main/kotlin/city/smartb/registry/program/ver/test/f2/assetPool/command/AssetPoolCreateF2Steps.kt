package city.smartb.registry.program.ver.test.f2.assetPool.command

import city.smartb.registry.program.f2.pool.api.AssetPoolEndpoint
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolCreateCommandDTOBase
import city.smartb.registry.program.ver.test.VerCucumberStepsDefinition
import f2.dsl.fnc.invokeWith
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.data.TestContextKey

class AssetPoolCreateF2Steps: En, VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var assetPoolEndpoint: AssetPoolEndpoint

    private lateinit var command: AssetPoolCreateCommandDTOBase

    init {
        DataTableType(::assetPoolCreateParams)

        When("I create an asset pool via API") {
            step {
                createPool(assetPoolCreateParams(null))
            }
        }

        When("I create an asset pool via API:") { params: AssetPoolCreateParams ->
            step {
                createPool(params)
            }
        }

        Given("An asset pool is created via API") {
            step {
                createPool(assetPoolCreateParams(null))
            }
        }

        Given("An asset pool is created via API:") { params: AssetPoolCreateParams ->
            step {
                createPool(params)
            }
        }

        Given("Some asset pools are created via API:") { dataTable: DataTable ->
            step {
                dataTable.asList(AssetPoolCreateParams::class.java)
                    .forEach { createPool(it) }
            }
        }
    }

    private suspend fun createPool(params: AssetPoolCreateParams) = context.assetPoolIds.register(params.identifier) {
        command = AssetPoolCreateCommandDTOBase(
            indicator = context.cccevConceptIdentifiers[params.indicator] ?: params.indicator,
            vintage = params.vintage,
            granularity = params.granularity
        )
        command.invokeWith(assetPoolEndpoint.assetPoolCreate()).id
    }

    private fun assetPoolCreateParams(entry: Map<String, String>?) = AssetPoolCreateParams(
        identifier = entry?.get("identifier").orRandom(),
        indicator = entry?.get("indicator") ?: context.cccevConceptIds.lastUsedKey,
        vintage = entry?.get("vintage") ?: "2023",
        granularity = entry?.get("granularity")?.toDouble() ?: 1.0
    )

    private data class AssetPoolCreateParams(
        val identifier: TestContextKey,
        val indicator: TestContextKey,
        val vintage: String,
        val granularity: Double
    )
}

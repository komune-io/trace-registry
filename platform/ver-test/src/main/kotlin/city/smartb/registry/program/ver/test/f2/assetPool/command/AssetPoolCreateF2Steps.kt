package city.smartb.registry.program.ver.test.f2.assetPool.command

import city.smartb.registry.program.f2.pool.api.AssetPoolEndpoint
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolCreateCommandDTOBase
import city.smartb.registry.program.f2.pool.domain.query.AssetPoolPageQueryDTOBase
import city.smartb.registry.program.f2.pool.domain.query.AssetPoolPageResult
import city.smartb.registry.program.ver.test.VerCucumberStepsDefinition
import f2.dsl.fnc.invokeWith
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.data.TestContextKey

class AssetPoolCreateF2Steps: En, VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var assetPoolEndpoint: AssetPoolEndpoint

    private lateinit var command: AssetPoolCreateCommandDTOBase

    init {
        DataTableType(::assetPoolCreateParams)
        DataTableType(::assetPoolPageParams)

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

        Then("The asset pool page should contain the asset pools") {
            step {
                val page = getPoolPage()
                Assertions.assertThat(page.items.size).isGreaterThan(0)
            }
        }

        Then("The asset pool page should contain only this vintage:") { params: AssetPoolPageParams ->
            step {
                val page = getPoolPage(params)
                Assertions.assertThat(page.items).allMatch { it.vintage == params.vintage }
            }
        }

        Then("The asset pool page should contain only this status:") { params: AssetPoolPageParams ->
            step {
                val page = getPoolPage(params)
                Assertions.assertThat(page.items).allMatch { it.status == params.status }
            }
        }

        Then("The asset pool page shouldn't contain this vintage:") { params: AssetPoolPageParams ->
            step {
                val page = getPoolPage(params)
                Assertions.assertThat(page.items.size).isEqualTo(0)
            }
        }

        Then("The asset pool page shouldn't contain this status:") { params: AssetPoolPageParams ->
            step {
                val page = getPoolPage(params)
                Assertions.assertThat(page.items.size).isEqualTo(0)
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

    private suspend fun getPoolPage(params: AssetPoolPageParams = AssetPoolPageParams()):AssetPoolPageResult {
        return params.toAssetPoolPageQueryDTOBase().invokeWith(assetPoolEndpoint.assetPoolPage())
    }

    private fun assetPoolCreateParams(entry: Map<String, String>?) = AssetPoolCreateParams(
        identifier = entry?.get("identifier").orRandom(),
        indicator = entry?.get("indicator") ?: context.cccevConceptIds.lastUsedKey,
        vintage = entry?.get("vintage") ?: "2023",
        granularity = entry?.get("granularity")?.toDouble() ?: 1.0,
        status = entry?.get("status") ?: "ACTIVE",
    )

    private data class AssetPoolCreateParams(
        val identifier: TestContextKey,
        val indicator: TestContextKey,
        val vintage: String,
        val granularity: Double,
        val status: String
    )

    private fun assetPoolPageParams(entry: Map<String, String>?) = AssetPoolPageParams(
        offset = entry?.get("offset")?.toInt() ?: 0,
        limit = entry?.get("limit")?.toInt() ?: 10,
        vintage = entry?.get("vintage") ?: "2023",
        status = entry?.get("status") ?: "ACTIVE",
    )

    private data class AssetPoolPageParams(
        val offset: Int? = null,
        val limit: Int? = null,
        val vintage: String? = null,
        val status: String? = null
    )

    private fun AssetPoolPageParams.toAssetPoolPageQueryDTOBase(): AssetPoolPageQueryDTOBase {
        return AssetPoolPageQueryDTOBase(
            offset = offset,
            limit = limit,
            vintage = vintage,
            status = status
        )
    }
}

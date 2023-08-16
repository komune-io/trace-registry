package city.smartb.registry.program.ver.test.f2.asset.command

import city.smartb.registry.program.f2.asset.api.AssetEndpoint
import city.smartb.registry.program.f2.pool.api.AssetPoolEndpoint
import city.smartb.registry.program.f2.pool.domain.command.AssetIssueCommandDTOBase
import city.smartb.registry.program.ver.test.VerCucumberStepsDefinition
import com.ionspin.kotlin.bignum.decimal.BigDecimal
import com.ionspin.kotlin.bignum.decimal.toBigDecimal
import f2.dsl.fnc.invokeWith
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.data.TestContextKey

class AssetIssueF2Steps: En, VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var assetPoolEndpoint: AssetPoolEndpoint

    private lateinit var command: AssetIssueCommandDTOBase

    init {
        DataTableType(::assetIssueParams)

        When("I issue assets via API") {
            step {
                issueAssets(assetIssueParams(null))
            }
        }

        When("I issue assets via API:") { params: AssetIssueParams ->
            step {
                issueAssets(params)
            }
        }

        Given("Some assets are issued via API") {
            step {
                issueAssets(assetIssueParams(null))
            }
        }

        Given("Some assets are issued via API:") { dataTable: DataTable ->
            step {
                dataTable.asList(AssetIssueParams::class.java)
                    .forEach { issueAssets(it) }
            }
        }
    }

    private suspend fun issueAssets(params: AssetIssueParams) = context.transactionIds.register(params.identifier) {
        command = AssetIssueCommandDTOBase(
            id = context.assetPoolIds[params.pool] ?: params.pool,
            to = params.receiver,
            quantity = params.quantity
        )
        // TODO: Fix that
//        command.invokeWith(assetEndpoint.assetIssue()).transactionId
        val event = command.invokeWith(assetPoolEndpoint.assetIssue())
        event.transactionId
    }

    private fun assetIssueParams(entry: Map<String, String>?) = AssetIssueParams(
        identifier = entry?.get("identifier").orRandom(),
        pool = entry?.get("pool") ?: context.assetPoolIds.lastUsedKey,
        receiver = entry?.get("receiver") ?: "Inc. Inpark",
        quantity = (entry?.get("quantity")?.toDouble() ?: 100.0).toBigDecimal()
    )

    private data class AssetIssueParams(
        val identifier: TestContextKey,
        val pool: TestContextKey,
        val receiver: String,
        val quantity: BigDecimal
    )
}

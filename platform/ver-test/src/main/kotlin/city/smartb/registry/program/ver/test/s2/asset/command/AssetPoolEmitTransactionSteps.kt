package city.smartb.registry.program.ver.test.s2.asset.command

import city.smartb.registry.program.s2.asset.api.AssetPoolAggregateService
import city.smartb.registry.program.s2.asset.api.entity.pool.AssetPoolRepository
import city.smartb.registry.program.s2.asset.api.entity.transaction.TransactionRepository
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmitTransactionCommand
import city.smartb.registry.program.s2.asset.domain.model.TransactionType
import city.smartb.registry.program.ver.test.VerCucumberStepsDefinition
import city.smartb.registry.program.ver.test.s2.asset.data.assetPool
import city.smartb.registry.program.ver.test.s2.asset.data.extractTransactionType
import city.smartb.registry.program.ver.test.s2.asset.data.transaction
import com.ionspin.kotlin.bignum.decimal.BigDecimal
import com.ionspin.kotlin.bignum.decimal.toBigDecimal
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import s2.bdd.data.TestContextKey
import s2.bdd.data.parser.safeExtract
import kotlin.jvm.optionals.getOrNull

class AssetPoolEmitTransactionSteps: En, VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var assetPoolAggregateService: AssetPoolAggregateService

    @Autowired
    private lateinit var assetPoolRepository: AssetPoolRepository

    @Autowired
    private lateinit var transactionRepository: TransactionRepository

    private lateinit var command: AssetPoolEmitTransactionCommand

    init {
        DataTableType(::assetPoolEmitTransactionParams)
        DataTableType(::assertPoolAssertParams)
        DataTableType(::walletAssertParams)

        When("I emit a transaction") {
            step {
                emitTransaction(assetPoolEmitTransactionParams(null))
            }
        }

        When("I emit a transaction:") { params: AssetPoolEmitTransactionParams ->
            step {
                emitTransaction(params)
            }
        }

        Given("A transaction is emitted") {
            step {
                emitTransaction(assetPoolEmitTransactionParams(null))
            }
        }

        Given("A transaction is emitted:") { params: AssetPoolEmitTransactionParams ->
            step {
                emitTransaction(params)
            }
        }

        Given("Some transactions are emitted:") { dataTable: DataTable ->
            step {
                dataTable.asList(AssetPoolEmitTransactionParams::class.java)
                    .forEach { emitTransaction(it) }
            }
        }

        Then("The transaction should be emitted") {
            step {
                val transactionId = context.transactionIds.lastUsed
                AssertionBdd.transaction(transactionRepository).assertThatId(transactionId).hasFields(
                    poolId = command.id,
                    from = command.from,
                    to = command.to,
                    by = command.by,
                    quantity = command.quantity,
                    type = command.type,
                )
            }
        }

        Then("The transaction should be emitted:") { params: TransactionAssertParams ->
            step {
                val transactionId = context.transactionIds.safeGet(params.identifier)
                val transaction = transactionRepository.findById(transactionId).getOrNull()
                Assertions.assertThat(transaction).isNotNull

                AssertionBdd.transaction(transactionRepository).assertThat(transaction!!).hasFields(
                    poolId = context.assetPoolIds.safeGet(params.pool),
                    from = params.from.parseNullableOrDefault(transaction.from) { context.organizations.safeGet(it).id },
                    to = params.to.parseNullableOrDefault(transaction.to) { context.organizations.safeGet(it).id },
                    by = params.by?.let { context.organizations.safeGet(it).id } ?: transaction.by,
                    quantity = params.quantity ?: transaction.quantity,
                    type = params.type ?: transaction.type,
                )
            }
        }

        Then("The wallets of the asset pool should be updated:") { dataTable: DataTable ->
            step {
                dataTable.asList(WalletAssertParams::class.java)
                    .groupBy { params -> params.identifier }
                    .mapKeys { (poolIdentifier) -> context.assetPoolIds.safeGet(poolIdentifier) }
                    .forEach { (poolId, paramList) ->
                        val asserter = AssertionBdd.assetPool(assetPoolRepository).assertThatId(poolId)
                        paramList.forEach { params ->
                            val owner = context.organizations[params.owner]?.id ?: params.owner
                            asserter.hasWallet(owner, params.value)
                        }
                    }
            }
        }
    }

    private suspend fun emitTransaction(params: AssetPoolEmitTransactionParams) = context.transactionIds.register(params.identifier) {
        command = AssetPoolEmitTransactionCommand(
            id = context.assetPoolIds[params.pool] ?: params.pool,
            from = params.from,
            to = params.to,
            by = params.by,
            quantity = params.quantity,
            type = params.type
        )
        assetPoolAggregateService.submitTransaction(command).transactionId
    }

    private fun assetPoolEmitTransactionParams(entry: Map<String, String>?) = AssetPoolEmitTransactionParams(
        identifier = entry?.get("identifier").orRandom(),
        pool = entry?.get("pool") ?: context.assetPoolIds.lastUsedKey,
        from = entry?.get("from"),
        to = entry?.get("to"),
        by = entry?.get("by").orRandom(),
        quantity = (entry?.get("quantity")?.toDouble() ?: 666.0).toBigDecimal(),
        type = entry?.extractTransactionType("type") ?: TransactionType.ISSUED,
    )

    private data class AssetPoolEmitTransactionParams(
        val identifier: TestContextKey,
        val pool: TestContextKey,
        val from: String?,
        val to: String?,
        val by: String,
        val quantity: BigDecimal,
        val type: TransactionType
    )

    private fun assertPoolAssertParams(entry: Map<String, String>) = TransactionAssertParams(
        identifier = entry["identifier"] ?: context.transactionIds.lastUsedKey,
        pool = entry["pool"] ?: context.assetPoolIds.lastUsedKey,
        from = entry["from"],
        to = entry["to"],
        by = entry["by"],
        quantity = entry["quantity"]?.toDouble()?.toBigDecimal(),
        type = entry.extractTransactionType("type"),
    )

    private data class TransactionAssertParams(
        val identifier: TestContextKey,
        val pool: TestContextKey,
        val from: String?,
        val to: String?,
        val by: String?,
        val quantity: BigDecimal?,
        val type: TransactionType?
    )

    private fun walletAssertParams(entry: Map<String, String>) = WalletAssertParams(
        identifier = entry["identifier"] ?: context.assetPoolIds.lastUsedKey,
        owner = entry.safeExtract("owner"),
        value = entry.safeExtract("value").toDouble().toBigDecimal()
    )

    private data class WalletAssertParams(
        val identifier: TestContextKey,
        val owner: String,
        val value: BigDecimal
    )
}

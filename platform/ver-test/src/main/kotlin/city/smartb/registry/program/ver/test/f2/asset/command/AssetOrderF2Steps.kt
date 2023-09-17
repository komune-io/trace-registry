package city.smartb.registry.program.ver.test.f2.asset.command

import city.smartb.registry.program.f2.asset.api.AssetEndpoint
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderPlaceCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.query.AssetOrderGetQueryDTOBase
import city.smartb.registry.program.f2.asset.domain.query.AssetOrderGetResultDTOBase
import city.smartb.registry.program.f2.asset.domain.query.AssetOrderPageQueryDTOBase
import city.smartb.registry.program.f2.asset.domain.query.AssetOrderPageResult
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.model.AssetTransactionType
import city.smartb.registry.program.s2.commons.model.BigDecimalAsString
import city.smartb.registry.program.s2.order.domain.OrderId
import city.smartb.registry.program.ver.test.VerCucumberStepsDefinition
import com.ionspin.kotlin.bignum.decimal.toBigDecimal
import f2.dsl.fnc.invokeWith
import io.cucumber.java8.En
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.data.TestContextKey

class AssetOrderF2Steps: En, VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var assetEndpoint: AssetEndpoint

    private lateinit var command: AssetOrderPlaceCommandDTOBase

    init {
        DataTableType(::placeOrderParams)
        DataTableType(::pageOrderParams)

        When("I place an order via API:") { params: PlaceOrderParams ->
            step {
                placeOrder(params)
            }
        }

        Then("The order should be created") {
            step {
                val order = getOrder(getOrderParams(null))
                Assertions.assertThat(order.item?.id).isEqualTo(context.orderIds.lastUsed)
            }
        }

        Then("The order page should contain the order") {
            step {
                val page = pageOrder(pageOrderParams(null))
                Assertions.assertThat(page.items).allMatch { it.id == context.orderIds.lastUsed }
            }
        }

        Then("The order page should contain the order:") { params: PageOrderParams ->
            step {
                val page = pageOrder(params)
                Assertions.assertThat(page.items).allMatch { it.by == params.by }
            }
        }

        Then("The order page shouldn't contain the order:") { params: PageOrderParams ->
            step {
                val page = pageOrder(params)
                Assertions.assertThat(page.items).noneMatch { it.by == params.by }
            }
        }
    }

    private suspend fun placeOrder(params: PlaceOrderParams) = context.orderIds.register(params.identifier) {
        command = AssetOrderPlaceCommandDTOBase(
            from = params.from,
            to = params.to,
            by = params.by,
            poolId = params.poolId?: context.assetPoolIds.lastUsed,
            quantity = params.quantity,
            type = AssetTransactionType.valueOf(params.type)
        )
        val event = command.invokeWith(assetEndpoint.assetOrderPlace())
        event.id
    }

    private suspend fun getOrder(params: GetOrderParams): AssetOrderGetResultDTOBase {
        return AssetOrderGetQueryDTOBase(
            id = params.id
        ).invokeWith(assetEndpoint.assetOrderGet())
    }

    private suspend fun pageOrder(params: PageOrderParams): AssetOrderPageResult {
        return AssetOrderPageQueryDTOBase(
            offset = params.offset,
            limit = params.limit,
            status = params.status,
            from = params.from,
            to = params.to,
            by = params.by,
            poolId = params.poolId,
            type = params.type,
        ).invokeWith(assetEndpoint.assetOrderPage())
    }

    private fun placeOrderParams(entry: Map<String, String>?) = PlaceOrderParams(
        identifier = entry?.get("identifier").orRandom(),
        from = entry?.get("from")?: "SmartB",
        to = entry?.get("to")?: "Inc. Inpark",
        by = entry?.get("by")?: "SmartB",
        poolId = entry?.get("poolId"),
        quantity = (entry?.get("quantity")?.toDouble() ?: 100.0).toBigDecimal(),
        type = entry?.get("type")?: AssetTransactionType.ISSUED.name,
    )

    private data class PlaceOrderParams(
        val identifier: TestContextKey,
        val from: String?,
        val to: String?,
        val by: String,
        val poolId: AssetPoolId?,
        val quantity: BigDecimalAsString,
        val type: String
    )

    private fun getOrderParams(entry: Map<String, String>?) = GetOrderParams(
        id = entry?.get("id")?: context.orderIds.lastUsed,
    )

    private data class GetOrderParams(
        val id: OrderId
    )

    private fun pageOrderParams(entry: Map<String, String>?) = PageOrderParams(
        offset = entry?.get("offset")?.toInt() ?: 0,
        limit = entry?.get("limit")?.toInt() ?: 10,
        status = entry?.get("status"),
        from = entry?.get("from"),
        to = entry?.get("to"),
        by = entry?.get("by"),
        poolId = entry?.get("poolId"),
        type = entry?.get("type")?: AssetTransactionType.ISSUED.name,
    )

    private data class PageOrderParams(
        val offset: Int? = null,
        val limit: Int? = null,
        val status: String? = null,
        val from: String? = null,
        val to: String? = null,
        val by: String? = null,
        val type: String? = null,
        val poolId: AssetPoolId? = null
    )
}

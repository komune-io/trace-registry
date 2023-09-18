package city.smartb.registry.s2.order.api.entity

import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.registry.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.s2.asset.domain.model.AssetTransactionType
import city.smartb.registry.s2.commons.model.BigDecimalAsString
import city.smartb.registry.s2.order.domain.OrderId
import city.smartb.registry.s2.order.domain.OrderState
import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Indexed
import com.redis.om.spring.annotations.SchemaFieldType
import com.redis.om.spring.annotations.Searchable
import org.springframework.data.annotation.Id
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document
class OrderEntity: WithS2Id<OrderId>, WithS2State<OrderState> {
    @Id
    lateinit var id: OrderId

    @Searchable(nostem=true)
    lateinit var status: OrderState

    @Indexed
    var poolId: AssetPoolId? = null

    @Indexed
    var from: String? = null

    @Indexed
    var to: String? = null

    @Indexed
    lateinit var by: String

    lateinit var quantity: BigDecimalAsString

    @Indexed(schemaFieldType = SchemaFieldType.TAG)
    lateinit var type: AssetTransactionType

    var creationDate: Long = 0

    var completedDate: Long? = null

    var certificate: FilePath? = null

    var cancelReason: String? = null

    override fun s2Id() = id
    override fun s2State() = status
}

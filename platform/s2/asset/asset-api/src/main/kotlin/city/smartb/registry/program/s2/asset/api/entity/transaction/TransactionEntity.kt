package city.smartb.registry.program.s2.asset.api.entity.transaction

import city.smartb.registry.program.api.commons.model.BigDecimalAsString
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import city.smartb.registry.program.s2.asset.domain.automate.TransactionState
import city.smartb.registry.program.s2.asset.domain.model.TransactionType
import com.ionspin.kotlin.bignum.decimal.BigDecimal
import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Indexed
import com.redis.om.spring.annotations.SchemaFieldType
import com.redis.om.spring.annotations.Searchable
import org.springframework.data.annotation.Id
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document
class TransactionEntity: WithS2Id<TransactionId>, WithS2State<TransactionState> {
    @Id
    lateinit var id: TransactionId

    @Searchable(nostem=true)
    lateinit var status: TransactionState

    @Indexed
    lateinit var poolId: AssetPoolId

    @Indexed
    var from: String? = null

    @Indexed
    var to: String? = null

    var quantity: BigDecimalAsString = BigDecimal.ZERO

    @Indexed(schemaFieldType = SchemaFieldType.TAG)
    lateinit var type: TransactionType

    var date: Long = 0

    override fun s2Id() = id
    override fun s2State() = status
}

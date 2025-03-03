package io.komune.registry.s2.asset.api.entity.transaction

import com.ionspin.kotlin.bignum.decimal.BigDecimal
import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Indexed
import com.redis.om.spring.annotations.SchemaFieldType
import com.redis.om.spring.annotations.Searchable
import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.automate.AssetTransactionId
import io.komune.registry.s2.asset.domain.automate.AssetTransactionState
import io.komune.registry.s2.asset.domain.model.AssetTransactionType
import io.komune.registry.s2.commons.model.BigDecimalAsString
import org.springframework.data.annotation.Id
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document
class AssetTransactionEntity: WithS2Id<AssetTransactionId>, WithS2State<AssetTransactionState> {
    @Id
    lateinit var id: AssetTransactionId

    @Searchable(nostem=true)
    lateinit var status: AssetTransactionState

    @Indexed
    lateinit var poolId: AssetPoolId

    @Indexed
    var from: String? = null

    @Indexed
    var to: String? = null

    @Indexed
    lateinit var by: String

    var quantity: BigDecimalAsString = BigDecimal.ZERO

    @Indexed(schemaFieldType = SchemaFieldType.TAG)
    lateinit var type: AssetTransactionType

    var date: Long = 0

    var file: FilePath? = null

    var cancelReason: String? = null

    override fun s2Id() = id
    override fun s2State() = status
}

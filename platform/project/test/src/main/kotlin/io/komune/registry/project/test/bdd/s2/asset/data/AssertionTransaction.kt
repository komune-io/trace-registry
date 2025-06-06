package io.komune.registry.project.test.bdd.s2.asset.data

import com.ionspin.kotlin.bignum.decimal.BigDecimal
import io.komune.registry.s2.asset.api.entity.transaction.AssetTransactionEntity
import io.komune.registry.s2.asset.api.entity.transaction.AssetTransactionRepository
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.automate.AssetTransactionId
import io.komune.registry.s2.asset.domain.model.AssetTransactionType
import org.assertj.core.api.Assertions
import s2.bdd.assertion.AssertionBdd
import s2.bdd.repository.AssertionBlockingCrudEntity

fun AssertionBdd.transaction(repository: AssetTransactionRepository) = AssertionTransaction(repository)

class AssertionTransaction(
    override val repository: AssetTransactionRepository
): AssertionBlockingCrudEntity<AssetTransactionEntity, AssetTransactionId, AssertionTransaction.TransactionAssert>() {

    override suspend fun assertThat(entity: AssetTransactionEntity) = TransactionAssert(entity)

    inner class TransactionAssert(
        private val transaction: AssetTransactionEntity
    ) {
        fun hasFields(
            id: AssetTransactionId = transaction.id,
            poolId: AssetPoolId = transaction.poolId,
            from: String? = transaction.from,
            to: String? = transaction.to,
            by: String = transaction.by,
            quantity: BigDecimal = transaction.quantity,
            type: AssetTransactionType = transaction.type
        ) = also {
            Assertions.assertThat(transaction.id).isEqualTo(id)
            Assertions.assertThat(transaction.poolId).isEqualTo(poolId)
            Assertions.assertThat(transaction.from).isEqualTo(from)
            Assertions.assertThat(transaction.to).isEqualTo(to)
            Assertions.assertThat(transaction.by).isEqualTo(by)
            Assertions.assertThat(transaction.quantity).isEqualTo(quantity)
            Assertions.assertThat(transaction.type).isEqualTo(type)
        }
    }
}

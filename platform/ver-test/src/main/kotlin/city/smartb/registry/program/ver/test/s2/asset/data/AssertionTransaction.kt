package city.smartb.registry.program.ver.test.s2.asset.data

import city.smartb.registry.program.s2.asset.api.entity.transaction.TransactionEntity
import city.smartb.registry.program.s2.asset.api.entity.transaction.TransactionRepository
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import city.smartb.registry.program.s2.asset.domain.model.TransactionType
import org.assertj.core.api.Assertions
import s2.bdd.assertion.AssertionBdd
import s2.bdd.repository.AssertionBlockingCrudEntity

fun AssertionBdd.transaction(repository: TransactionRepository) = AssertionTransaction(repository)

class AssertionTransaction(
    override val repository: TransactionRepository
): AssertionBlockingCrudEntity<TransactionEntity, TransactionId, AssertionTransaction.TransactionAssert>() {

    override suspend fun assertThat(entity: TransactionEntity) = TransactionAssert(entity)

    inner class TransactionAssert(
        private val transaction: TransactionEntity
    ) {
        fun hasFields(
            id: TransactionId = transaction.id,
            poolId: AssetPoolId = transaction.poolId,
            from: String? = transaction.from,
            to: String? = transaction.to,
            quantity: Double = transaction.quantity,
            type: TransactionType = transaction.type
        ) = also {
            Assertions.assertThat(transaction.id).isEqualTo(id)
            Assertions.assertThat(transaction.poolId).isEqualTo(poolId)
            Assertions.assertThat(transaction.from).isEqualTo(from)
            Assertions.assertThat(transaction.to).isEqualTo(to)
            Assertions.assertThat(transaction.quantity).isEqualTo(quantity)
            Assertions.assertThat(transaction.type).isEqualTo(type)
        }
    }
}

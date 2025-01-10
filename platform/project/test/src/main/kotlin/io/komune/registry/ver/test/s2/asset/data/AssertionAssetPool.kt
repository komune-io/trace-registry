package io.komune.registry.ver.test.s2.asset.data

import cccev.dsl.model.InformationConcept
import cccev.dsl.model.InformationConceptIdentifier
import com.ionspin.kotlin.bignum.decimal.BigDecimal
import io.komune.registry.s2.asset.api.entity.pool.AssetPoolEntity
import io.komune.registry.s2.asset.api.entity.pool.AssetPoolRepository
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.automate.AssetPoolState
import org.assertj.core.api.Assertions
import s2.bdd.assertion.AssertionBdd
import s2.bdd.repository.AssertionBlockingCrudEntity

fun AssertionBdd.assetPool(repository: AssetPoolRepository) = AssertionAssetPool(repository)

class AssertionAssetPool(
    override val repository: AssetPoolRepository
): AssertionBlockingCrudEntity<AssetPoolEntity, AssetPoolId, AssertionAssetPool.AssetPoolAssert>() {

    override suspend fun assertThat(entity: AssetPoolEntity) = AssetPoolAssert(entity)

    inner class AssetPoolAssert(
        private val pool: AssetPoolEntity
    ) {
        fun hasFields(
            id: AssetPoolId = pool.id,
            status: AssetPoolState = pool.status,
            vintage: String? = pool.vintage,
            indicator: InformationConcept = pool.indicator,
            granularity: Double = pool.granularity,
            wallets: MutableMap<String, BigDecimal> = pool.wallets,
        ) = also {
            Assertions.assertThat(pool.id).isEqualTo(id)
            Assertions.assertThat(pool.status).isEqualTo(status)
            Assertions.assertThat(pool.vintage).isEqualTo(vintage)
            Assertions.assertThat(pool.indicator.identifier).isEqualTo(indicator.identifier)
            Assertions.assertThat(pool.granularity).isEqualTo(granularity)
            Assertions.assertThat(pool.wallets).containsExactlyInAnyOrderEntriesOf(wallets)
        }

        fun hasWallet(owner: String, value: BigDecimal) {
            Assertions.assertThat(pool.wallets[owner]).isEqualTo(value)
        }
    }
}

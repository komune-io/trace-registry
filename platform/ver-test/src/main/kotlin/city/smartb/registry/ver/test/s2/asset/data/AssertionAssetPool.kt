package city.smartb.registry.ver.test.s2.asset.data

import cccev.s2.concept.domain.InformationConceptIdentifier
import city.smartb.registry.s2.asset.api.entity.pool.AssetPoolEntity
import city.smartb.registry.s2.asset.api.entity.pool.AssetPoolRepository
import city.smartb.registry.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.s2.asset.domain.automate.AssetPoolState
import com.ionspin.kotlin.bignum.decimal.BigDecimal
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
            indicator: InformationConceptIdentifier = pool.indicator,
            granularity: Double = pool.granularity,
            wallets: MutableMap<String, BigDecimal> = pool.wallets,
        ) = also {
            Assertions.assertThat(pool.id).isEqualTo(id)
            Assertions.assertThat(pool.status).isEqualTo(status)
            Assertions.assertThat(pool.vintage).isEqualTo(vintage)
            Assertions.assertThat(pool.indicator).isEqualTo(indicator)
            Assertions.assertThat(pool.granularity).isEqualTo(granularity)
            Assertions.assertThat(pool.wallets).containsExactlyInAnyOrderEntriesOf(wallets)
        }

        fun hasWallet(owner: String, value: BigDecimal) {
            Assertions.assertThat(pool.wallets[owner]).isEqualTo(value)
        }
    }
}

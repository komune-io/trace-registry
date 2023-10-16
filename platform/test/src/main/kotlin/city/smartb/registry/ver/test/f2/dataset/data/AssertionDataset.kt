package city.smartb.registry.ver.test.f2.dataset.data

import city.smartb.registry.program.s2.dataset.api.entity.DatasetEntity
import city.smartb.registry.program.s2.dataset.api.entity.DatasetRepository
import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import city.smartb.registry.s2.dataset.domain.automate.DatasetState
import org.assertj.core.api.Assertions
import s2.bdd.assertion.AssertionBdd
import s2.bdd.repository.AssertionBlockingCrudEntity

fun AssertionBdd.dataset(repository: DatasetRepository) = AssertionDataset(repository)

class AssertionDataset(
    override val repository: DatasetRepository
): AssertionBlockingCrudEntity<DatasetEntity, DatasetId, AssertionDataset.DatasetAssert>() {

    override suspend fun assertThat(entity: DatasetEntity) = DatasetAssert(entity)

    inner class DatasetAssert(
        private val pool: DatasetEntity
    ) {
        fun hasFields(
            id: DatasetId = pool.id,
            status: DatasetState = pool.status,
            title: String? = pool.title,
        ) = also {
            Assertions.assertThat(pool.id).isEqualTo(id)
            Assertions.assertThat(pool.status).isEqualTo(status)
            Assertions.assertThat(pool.title).isEqualTo(title)
        }
    }
}

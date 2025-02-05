package io.komune.registry.data.test.bdd.f2.catalogue.data

import io.komune.registry.program.s2.catalogue.api.entity.CatalogueEntity
import io.komune.registry.program.s2.catalogue.api.entity.CatalogueRepository
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import org.assertj.core.api.Assertions
import s2.bdd.assertion.AssertionBdd
import s2.bdd.repository.AssertionBlockingCrudEntity

fun AssertionBdd.catalogue(repository: CatalogueRepository) = AssertionCatalogue(repository)

class AssertionCatalogue(
    override val repository: CatalogueRepository
): AssertionBlockingCrudEntity<CatalogueEntity, CatalogueId, AssertionCatalogue.CatalogueAssert>() {

    override suspend fun assertThat(entity: CatalogueEntity): CatalogueAssert = CatalogueAssert(entity)

    inner class CatalogueAssert(
        private val catalogue: CatalogueEntity
    ) {
        fun hasFields(
            id: CatalogueId = catalogue.id,
            status: CatalogueState = catalogue.status,
            title: String? = catalogue.title,
            themes: Set<String> = catalogue.themeIds,
        ) = also {
            Assertions.assertThat(catalogue.id).isEqualTo(id)
            Assertions.assertThat(catalogue.status).isEqualTo(status)
            Assertions.assertThat(catalogue.title).isEqualTo(title)
            Assertions.assertThat(catalogue.themeIds).containsExactlyInAnyOrderElementsOf(themes)
        }

        fun hasDatasets(
            datasets: List<DatasetId>,
        ) = also {
            Assertions.assertThat(catalogue.datasetIds).containsAll(datasets)
        }
    }
}

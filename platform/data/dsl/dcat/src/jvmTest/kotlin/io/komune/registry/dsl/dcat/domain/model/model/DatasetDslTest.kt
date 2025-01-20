package io.komune.registry.dsl.dcat.domain.model.model

import io.komune.registry.dsl.dcat.domain.model.DcatDataset
import io.komune.registry.dsl.dcat.domain.model.dataset
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test

class DatasetDslTest {
    @Test
    fun shouldCreateDatasetWithDistributions() {
        val dataset1: DcatDataset = dataset {
            identifier = "dataset1"
            title = "catalogues"
            type = "catalogues"
            language = "fr"
            distributions {
                distribution {
                    identifier = "distribution1"
                }
            }
        }

        Assertions.assertThat(dataset1.identifier).isEqualTo("dataset1")
        Assertions.assertThat(dataset1.distributions).hasSize(1)
    }

}
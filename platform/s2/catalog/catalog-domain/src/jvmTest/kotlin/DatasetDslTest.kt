package city.smartb.registry.s2.catalog.domain

import city.smartb.registry.s2.catalog.domain.model.DcatDataset
import city.smartb.registry.s2.catalog.domain.model.dataset
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test

class DatasetDslTest {
    @Test
    fun shouldCreateDatasetWithDistributions() {
        val dataset1: DcatDataset = dataset {
            identifier = "dataset1"

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
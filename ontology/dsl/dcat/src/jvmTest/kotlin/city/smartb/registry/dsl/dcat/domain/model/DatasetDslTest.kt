package city.smartb.registry.dsl.dcat.domain.model

import city.smartb.registry.dsl.dcat.domain.model.DcatDataset
import city.smartb.registry.dsl.dcat.domain.model.dataset
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test

class DatasetDslTest {
    @Test
    fun shouldCreateDatasetWithDistributions() {
        val dataset1: DcatDataset = dataset {
            identifier = "dataset1"
            title = "catalogues"
            type = "catalogues"
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
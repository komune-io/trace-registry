package city.smartb.registry.s2.catalog.domain.model

import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test

class CatalogDslTest {
    @Test
    fun shouldCreateCatalogueWithDataset() {
        val catalog1: DcatCatalogModel = catalog {
            identifier = "http://example.com/catalog"

            datasets {
                dataset {
                    identifier = "http://example.com/datasets/weather"

                }
                dataset {
                    identifier = "http://example.com/datasets/weather1"

                }
            }
        }

        Assertions.assertThat(catalog1.identifier).isEqualTo("http://example.com/catalog")
        Assertions.assertThat(catalog1.datasets).hasSize(2)
    }

}
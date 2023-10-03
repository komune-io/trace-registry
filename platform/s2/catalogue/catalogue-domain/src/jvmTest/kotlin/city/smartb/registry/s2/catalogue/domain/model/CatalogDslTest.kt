package city.smartb.registry.s2.catalogue.domain.model

import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test

class CatalogueDslTest {
    @Test
    fun shouldCreateCatalogueWithDataset() {
        val catalogue1: DCatApCatalogueModel = catalogue {
            identifier = "http://example.com/catalogue"

            datasets {
                dataset {
                    identifier = "http://example.com/datasets/weather"

                }
                dataset {
                    identifier = "http://example.com/datasets/weather1"

                }
            }
        }

        Assertions.assertThat(catalogue1.identifier).isEqualTo("http://example.com/catalogue")
        Assertions.assertThat(catalogue1.datasets).hasSize(2)
    }

}
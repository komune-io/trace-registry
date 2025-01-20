package io.komune.registry.dsl.dcat.domain.model.model

import io.komune.registry.dsl.dcat.domain.model.DCatApCatalogueModel
import io.komune.registry.dsl.dcat.domain.model.catalogue
import io.komune.registry.s2.structure.domain.model.Structure
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test

class CatalogueDslTest {
    @Test
    fun shouldCreateCatalogueWithDataset() {
        val catalogue1: DCatApCatalogueModel = catalogue {
            identifier = "http://example.com/catalogue"
            type = "catalogues"
            language = "fr"
            structure = Structure("catalogues")
            title = "catalogues"
            datasets {
                dataset {
                    identifier = "http://example.com/datasets/weather"
                    type = "catalogues"
                    title = "catalogues"
                    language = "fr"

                }
                dataset {
                    identifier = "http://example.com/datasets/weather1"
                    type = "catalogues"
                    title = "catalogues"
                    language = "fr"
                }
            }
        }

        Assertions.assertThat(catalogue1.identifier).isEqualTo("http://example.com/catalogue")
        Assertions.assertThat(catalogue1.datasets).hasSize(2)
    }

}
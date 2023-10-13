package city.smartb.registry.s2.catalogue.domain

import city.smartb.registry.s2.catalogue.domain.model.DCatApCatalogueModel
import city.smartb.registry.s2.catalogue.domain.model.catalogue
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test

class StandardsCatalogueTest {
    @Test
    fun shouldCreateCatalogueWithDataset() {
        val catalogue1: DCatApCatalogueModel = catalogue {
            identifier = "http://example.com/catalogue1"
        }
        val catalogue2: DCatApCatalogueModel = catalogue {
            identifier = "http://example.com/catalogue2"
            catalogues {
                +catalogue1
            }
        }
        Assertions.assertThat(catalogue2.identifier).isEqualTo("http://example.com/catalogue2")
        Assertions.assertThat(catalogue2.catalogues).hasSize(1)
    }

}

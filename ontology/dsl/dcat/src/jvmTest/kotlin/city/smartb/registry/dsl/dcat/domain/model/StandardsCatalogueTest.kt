package city.smartb.registry.dsl.dcat.domain.model

import city.smartb.registry.s2.structure.domain.model.Structure
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test

class StandardsCatalogueTest {
    @Test
    fun shouldCreateCatalogueWithDataset() {
        val catalogue1: DCatApCatalogueModel = catalogue {
            identifier = "http://example.com/catalogue1"
            type = "catalogues"
            title = "catalogues"
            structure = Structure("catalogues")
        }
        val catalogue2: DCatApCatalogueModel = catalogue {
            identifier = "http://example.com/catalogue2"
            type = "catalogues"
            title = "catalogues"
            structure = Structure("catalogues")
            catalogues {
                +catalogue1
            }
        }
        Assertions.assertThat(catalogue2.identifier).isEqualTo("http://example.com/catalogue2")
        Assertions.assertThat(catalogue2.catalogues).hasSize(1)
    }

}

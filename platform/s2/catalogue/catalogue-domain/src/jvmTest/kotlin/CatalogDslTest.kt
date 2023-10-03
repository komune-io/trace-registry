package city.smartb.registry.s2.catalogue.domain

import city.smartb.registry.s2.catalogue.domain.model.DcatCatalogue
import city.smartb.registry.s2.catalogue.domain.model.catalogue
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test

class CatalogueDslTest {
    @Test
    fun shouldCreateCatalogue() {
        val catalogue1: DcatCatalogue = catalog {
            identifier = "catalog1"
        }
        Assertions.assertThat(catalog1.identifier).isEqualTo("catalog1")
    }
    @Test
    fun shouldCreateCatalogueWithDatasets() {
        val catalog1: DcatCatalogue = catalog {
            identifier = "catalog1"
            datasets {
                dataset {
                    identifier = "dataset1"
                }
                dataset {
                    identifier = "dataset2"
                }
            }
        }
        Assertions.assertThat(catalog1.datasets).hasSize(2)
    }

    @Test
    fun shouldCreateCatalogueWithThemes() {
        val catalog1: DcatCatalogue = catalog {
            identifier = "catalog1"
            themes {
                theme {
                    id = "theme1"
                }
                theme {
                    id = "theme2"
                }
            }
        }
        Assertions.assertThat(catalog1.themes).hasSize(2)
    }

    @Test
    fun shouldCreateCatalogueWithServices() {
        val catalog1: DcatCatalogue = catalog {
            identifier = "catalog1"
            services {
                service {
                    identifier = "service1"
                }
                service {
                    identifier = "service2"
                }
            }
        }
        Assertions.assertThat(catalog1.services).hasSize(2)
    }

    @Test
    fun shouldCreateCatalogueWithCatalogues() {
        val catalog1: DcatCatalogue = catalog {
            identifier = "catalog1"
            catalogs {
                catalog {
                    identifier = "subCatalogue1"
                }
                catalog {
                    identifier = "subCatalogue2"
                }
            }
        }
        Assertions.assertThat(catalog1.catalogs).hasSize(2)
    }

    @Test
    fun shouldCreateCatalogueWithRecords() {
        val catalog1: DcatCatalogue = catalog {
            identifier = "catalog1"
            title = "Catalogue 1"
            catalogRecords {
                catalogRecord {
                    identifier = "catalogRecords1"
                    title = "catalogRecords 1"
                }
                catalogRecord {
                    identifier = "catalogRecords2"
                    title = "catalogRecords 2"
                }
            }
        }
        Assertions.assertThat(catalog1.catalogRecords).hasSize(2)
    }
}

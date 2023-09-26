package city.smartb.registry.s2.catalog.domain

import city.smartb.registry.s2.catalog.domain.model.DcatCatalog
import city.smartb.registry.s2.catalog.domain.model.catalog
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test

class CatalogDslTest {
    @Test
    fun shouldCreateCatalog() {
        val catalog1: DcatCatalog = catalog {
            identifier = "catalog1"
        }
        Assertions.assertThat(catalog1.identifier).isEqualTo("catalog1")
    }
    @Test
    fun shouldCreateCatalogWithDatasets() {
        val catalog1: DcatCatalog = catalog {
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
    fun shouldCreateCatalogWithThemes() {
        val catalog1: DcatCatalog = catalog {
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
    fun shouldCreateCatalogWithServices() {
        val catalog1: DcatCatalog = catalog {
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
    fun shouldCreateCatalogWithCatalogs() {
        val catalog1: DcatCatalog = catalog {
            identifier = "catalog1"
            catalogs {
                catalog {
                    identifier = "subCatalog1"
                }
                catalog {
                    identifier = "subCatalog2"
                }
            }
        }
        Assertions.assertThat(catalog1.catalogs).hasSize(2)
    }

    @Test
    fun shouldCreateCatalogWithRecords() {
        val catalog1: DcatCatalog = catalog {
            identifier = "catalog1"
            title = "Catalog 1"
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

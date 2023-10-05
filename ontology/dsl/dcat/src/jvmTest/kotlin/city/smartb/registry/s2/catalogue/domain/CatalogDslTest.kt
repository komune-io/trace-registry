package city.smartb.registry.s2.catalogue.domain

import city.smartb.registry.s2.catalogue.domain.model.DcatApCatalogue
import city.smartb.registry.s2.catalogue.domain.model.catalogue
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test

class CatalogueDslTest {
    @Test
    fun shouldCreateCatalogue() {
        val catalogue1: DcatApCatalogue = catalogue {
            identifier = "catalogue1"
        }
        Assertions.assertThat(catalogue1.identifier).isEqualTo("catalogue1")
    }
    @Test
    fun shouldCreateCatalogueWithDatasets() {
        val catalogue1: DcatApCatalogue = catalogue {
            identifier = "catalogue1"
            datasets {
                dataset {
                    identifier = "dataset1"
                }
                dataset {
                    identifier = "dataset2"
                }
            }
        }
        Assertions.assertThat(catalogue1.datasets).hasSize(2)
    }

    @Test
    fun shouldCreateCatalogueWithThemes() {
        val catalogue1: DcatApCatalogue = catalogue {
            identifier = "catalogue1"
            themes {
                theme {
                    id = "theme1"
                }
                theme {
                    id = "theme2"
                }
            }
        }
        Assertions.assertThat(catalogue1.themes).hasSize(2)
    }

    @Test
    fun shouldCreateCatalogueWithServices() {
        val catalogue1: DcatApCatalogue = catalogue {
            identifier = "catalogue1"
            services {
                service {
                    identifier = "service1"
                }
                service {
                    identifier = "service2"
                }
            }
        }
        Assertions.assertThat(catalogue1.services).hasSize(2)
    }

    @Test
    fun shouldCreateCatalogueWithCatalogues() {
        val catalogue1: DcatApCatalogue = catalogue {
            identifier = "catalogue1"
            catalogues {
                catalogue {
                    identifier = "subCatalogue1"
                }
                catalogue {
                    identifier = "subCatalogue2"
                }
            }
        }
        Assertions.assertThat(catalogue1.catalogues).hasSize(2)
    }

    @Test
    fun shouldCreateCatalogueWithRecords() {
        val catalogue1: DcatApCatalogue = catalogue {
            identifier = "catalogue1"
            title = "Catalogue 1"
            catalogueRecords{
                catalogueRecord {
                    identifier = "catalogueRecords1"
                    title = "catalogueRecords 1"
                }
                catalogueRecord {
                    identifier = "catalogueRecords2"
                    title = "catalogueRecords 2"
                }
            }
        }
        Assertions.assertThat(catalogue1.catalogueRecords).hasSize(2)
    }
}

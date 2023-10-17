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
            type = "catalogues"
            display = "catalogues"
            title = "catalogues"
        }
        Assertions.assertThat(catalogue1.identifier).isEqualTo("catalogue1")
    }
    @Test
    fun shouldCreateCatalogueWithDatasets() {
        val catalogue1: DcatApCatalogue = catalogue {
            identifier = "catalogue1"
            type = "catalogues"
            display = "catalogues"
            title = "catalogues"
            datasets {
                dataset {
                    identifier = "dataset1"
                    type = "catalogues"
                    title = "catalogues"
                }
                dataset {
                    identifier = "dataset2"
                    type = "catalogues"
                    title = "catalogues"
                }
            }
        }
        Assertions.assertThat(catalogue1.datasets).hasSize(2)
    }

    @Test
    fun shouldCreateCatalogueWithThemes() {
        val catalogue1: DcatApCatalogue = catalogue {
            identifier = "catalogue1"
            type = "catalogues"
            display = "catalogues"
            title = "catalogues"
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
            type = "catalogues"
            display = "catalogues"
            title = "catalogues"
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
            type = "catalogues"
            display = "catalogues"
            title = "catalogues"
            catalogues {
                catalogue {
                    identifier = "subCatalogue1"
                    type = "catalogues"
                    display = "catalogues"
                    title = "catalogues"
                }
                catalogue {
                    identifier = "subCatalogue2"
                    type = "catalogues"
                    display = "catalogues"
                    title = "catalogues"
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
            type = "catalogues"
            display = "catalogues"
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

package io.komune.registry.dsl.dcat.domain.model.model

import io.komune.registry.dsl.dcat.domain.model.DcatApCatalogue
import io.komune.registry.dsl.dcat.domain.model.catalogue
import io.komune.registry.s2.structure.domain.model.Structure
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test

class CatalogueDslTestJvm {
    @Test
    fun shouldCreateCatalogue() {
        val catalogue1: DcatApCatalogue = catalogue {
            identifier = "catalogue1"
            type = "catalogues"
            language = "fr"
            structure = Structure("catalogues")
            title = "catalogues"
        }
        Assertions.assertThat(catalogue1.identifier).isEqualTo("catalogue1")
    }
    @Test
    fun shouldCreateCatalogueWithDatasets() {
        val catalogue1: DcatApCatalogue = catalogue {
            identifier = "catalogue1"
            type = "catalogues"
            structure = Structure("catalogues")
            language = "fr"
            title = "catalogues"
            datasets {
                dataset {
                    identifier = "dataset1"
                    type = "catalogues"
                    title = "catalogues"
                    language = "fr"
                }
                dataset {
                    identifier = "dataset2"
                    type = "catalogues"
                    title = "catalogues"
                    language = "fr"
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
            language = "fr"
            structure = Structure("catalogues")
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
            language = "fr"
            structure = Structure("catalogues")
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
            structure = Structure("catalogues")
            language = "fr"
            title = "catalogues"
            catalogues {
                catalogue {
                    identifier = "subCatalogue1"
                    type = "catalogues"
                    structure = Structure("catalogues")
                    language = "fr"
                    title = "catalogues"
                }
                catalogue {
                    identifier = "subCatalogue2"
                    type = "catalogues"
                    structure = Structure("catalogues")
                    language = "fr"
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
            language = "fr"
            structure = Structure("catalogues")
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

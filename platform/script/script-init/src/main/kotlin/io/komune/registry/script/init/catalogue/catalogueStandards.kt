package io.komune.registry.script.init.catalogue

import io.komune.registry.dsl.dcat.domain.model.CatalogueBuilder
import io.komune.registry.dsl.dcat.domain.model.catalogue
import io.komune.registry.dsl.dcat.domain.model.dataService
import io.komune.registry.s2.structure.domain.model.Structure

fun catalogueStandards(debug: String) = catalogue {
    identifier = "standards${debug}"
    title = "Standards"
    type = "standards"
    structure = Structure("grid")
    description = """
        Explore our comprehensive list of recognized standards for environmental project evaluation and certification. 
        Discover diverse opportunities in energy, carbon, water, waste, and more. 
        Choose the standard that aligns with your goals and make a positive environmental impact.
    """.trimIndent()
    services {
        dataService {
            identifier = "standards"
            endpointURL = "https://standardsregistry.verra.org/api/standards"
        }
    }
    catalogues {
        +verraCatalogue(debug)
        +cee(debug)
        +goldStandard(debug)
        +cdm(debug)
    }
}

fun getImg(name: String): String? {
    return "classpath:$name"
}


fun CatalogueBuilder.datasetBase(parentIdentifier: String) {
    datasets {
        dataset {
            identifier = "${parentIdentifier}-documents"
            title = "Documents"
            type = "document"
        }
        dataset {
            identifier = "${parentIdentifier}-activities"
            title = "Activities"
            type = "activity"
        }
    }
}

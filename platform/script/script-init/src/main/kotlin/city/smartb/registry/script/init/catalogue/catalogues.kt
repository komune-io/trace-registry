package city.smartb.registry.script.init.catalogue

import city.smartb.registry.dsl.dcat.domain.model.CatalogueBuilder
import city.smartb.registry.dsl.dcat.domain.model.catalogue
import city.smartb.registry.dsl.dcat.domain.model.dataService

fun catalogueStandards(debug: String) = catalogue {
    identifier = "standards${debug}"
    title = "Standards"
    type = "standards"
    display = "grid"
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
    return CatalogueFactory::class.java.getResource("/$name")?.file.also {
        println("getImg: $name - $it")
    }
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

package city.smartb.registry.script.init.catalogue

import city.smartb.registry.s2.catalogue.domain.model.CatalogueBuilder
import city.smartb.registry.s2.catalogue.domain.model.catalogue
import city.smartb.registry.s2.catalogue.domain.model.concept
import city.smartb.registry.s2.catalogue.domain.model.dataService

fun cdm(debug: String) = catalogue {
    identifier = "cdm${debug}"
    homepage =
        "https://unfccc.int/process-and-meetings/the-kyoto-protocol/mechanisms-under-the-kyoto-protocol/the-clean-development-mechanism"
    title = "CDM"
    type = "standard"
    display = "item"
    img = getImg("cdm.png")
    description = """
           The Clean Development Mechanism (CDM) is a key component of the United Nations Framework Convention 
           on Climate Change (UNFCCC) designed to promote emission reduction projects in developing countries. 
            """.trimIndent()
    themes {
    }
    datasetBase(identifier)
}


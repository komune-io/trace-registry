package city.smartb.registry.script.init.catalogue

import city.smartb.registry.s2.catalogue.domain.model.CatalogueBuilder
import city.smartb.registry.s2.catalogue.domain.model.catalogue
import city.smartb.registry.s2.catalogue.domain.model.concept
import city.smartb.registry.s2.catalogue.domain.model.dataService


fun cee(debug: String) = catalogue {
    identifier = "cee${debug}"
    homepage = "https://www.ecologie.gouv.fr/dispositif-des-certificats-deconomies-denergie"
    title = "CEE"
    type = "standard"
    display = "item"
    img = getImg("cee.png")
    description = """
           The CEE (Energy Savings Certificates) programs are initiatives that allow obtaining 
           CEE certificates without directly carrying out energy-saving actions. 
            """.trimIndent()
    themes {
    }
    datasetBase(identifier)
}

package io.komune.registry.script.init.catalogue

import io.komune.registry.dsl.dcat.domain.model.catalogue
import io.komune.registry.s2.structure.domain.model.Structure


fun cee(debug: String) = catalogue {
    identifier = "cee${debug}"
    homepage = "https://www.ecologie.gouv.fr/dispositif-des-certificats-deconomies-denergie"
    title = "CEE"
    type = "standard"
    structure = Structure("item")
    img = getImg("cee.png")
    description = """
           The CEE (Energy Savings Certificates) programs are initiatives that allow obtaining 
           CEE certificates without directly carrying out energy-saving actions. 
            """.trimIndent()
    themes {
    }
    datasetBase(identifier)
}

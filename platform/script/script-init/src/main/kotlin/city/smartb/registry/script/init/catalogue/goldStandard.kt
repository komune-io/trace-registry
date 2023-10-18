package city.smartb.registry.script.init.catalogue

import city.smartb.registry.s2.catalogue.domain.model.CatalogueBuilder
import city.smartb.registry.s2.catalogue.domain.model.catalogue
import city.smartb.registry.s2.catalogue.domain.model.concept
import city.smartb.registry.s2.catalogue.domain.model.dataService


fun goldStandardCatalogue(debug: String) = catalogue {
    identifier = "goldstandard${debug}"
    homepage = "https://www.goldstandard.org/"
    title = "Gold Standard"
    type = "standard"
    display = "item"
    img = getImg("goldstandard.png")
    description = """
           Gold Standard for the Global Goals is a standard that sets requirements to design projects 
           for maximum positive impact in climate and development -- and to measure and report outcomes 
           in the most credible and efficient way.
            """.trimIndent()
    datasetBase(identifier)
    themes {
        concept {
            id = "RenewableEnergySupply"
            prefLabels = mutableMapOf(
                "en" to "Renewable Energy Supply",
                "fr" to "Approvisionnement en énergie renouvelable"  // French translation may need to be adjusted
            )
        }
        concept {
            id = "CommunityServiceProjects"
            prefLabels = mutableMapOf(
                "en" to "Community Service Projects",
                "fr" to "Projets de service communautaire"  // French translation may need to be adjusted
            )

        }
        concept {
            id = "WasteManagement"
            prefLabels = mutableMapOf(
                "en" to "Waste Management",
                "fr" to "Gestion des déchets"
            )
        }
        concept {
            id = "LandUseAndForests"
            prefLabels = mutableMapOf(
                "en" to "Land Use and Forests",
                "fr" to "Utilisation des terres et forêts"
            )
        }
    }
}
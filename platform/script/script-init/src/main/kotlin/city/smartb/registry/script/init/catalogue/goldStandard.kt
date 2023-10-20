package city.smartb.registry.script.init.catalogue

import city.smartb.registry.s2.catalogue.domain.model.catalogue
import city.smartb.registry.s2.catalogue.domain.model.concept


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
    catalogues {
        catalogue {
            identifier = "standards-goldstandard-programs${debug}"
            title = "Programs"
            type = "programs"
            display = "grid"
            datasetBase(identifier)
            catalogues {
                +GoldStandardProgram.communityServices(debug)
                +GoldStandardProgram.renewableEnergy(debug)
                +GoldStandardProgram.landUseForests(debug)
                +GoldStandardProgram.goldStandardSustainableUrbanDevelopment(debug)
            }
        }
        catalogue {
            identifier = "standards-goldstandard-programsOfActivities${debug}"
            title = "Programs of activities"
            type = "programs"
            display = "grid"
            datasetBase(identifier)
            catalogues {
//                +otherGridTemp(debug)
                +GoldStandardProgram.communityServices(debug)
                +GoldStandardProgram.renewableEnergy(debug)
                +GoldStandardProgram.landUseForests(debug)
                +GoldStandardProgram.goldStandardSustainableUrbanDevelopment(debug)
            }
        }
    }
}

//fun otherGridTemp(debug: String) = catalogue {
//    identifier = "standards-goldstandard-programs-otherGridTemp-${debug}"
//    title = "Other Grid Temp"
//    type = "programs"
//    display = "grid"
//    datasetBase(identifier)
//    catalogues {
//        +GoldStandardProgram.communityServices(debug)
//        +GoldStandardProgram.renewableEnergy(debug)
//        +GoldStandardProgram.landUseForests(debug)
//        +GoldStandardProgram.goldStandardSustainableUrbanDevelopment(debug)
//    }
//}


object GoldStandardProgram{
    fun communityServices(debug: String) = catalogue {
        identifier = "standards-goldstandard-programs-communityServices${debug}"
        title = "Community services"
        type = "programs"
        display = "item"
        datasetBase(identifier)
    }

    fun renewableEnergy(debug: String) = catalogue {
        identifier = "standards-goldstandard-programs-renewableEnergy${debug}"
        title = "Renewable Energy"
        type = "programs"
        display = "item"
        datasetBase(identifier)
    }

    fun landUseForests(debug: String) = catalogue {
        identifier = "standards-goldstandard-programs-landUseForests${debug}"
        title = "Community services"
        type = "programs"
        display = "item"
        datasetBase(identifier)
    }

    fun goldStandardSustainableUrbanDevelopment(debug: String) = catalogue {
        identifier = "standards-goldstandard-programs-goldStandardSustainableUrbanDevelopment${debug}"
        title = "Gold Standard for sustainable urban development"
        type = "programs"
        display = "item"
        datasetBase(identifier)
    }
}

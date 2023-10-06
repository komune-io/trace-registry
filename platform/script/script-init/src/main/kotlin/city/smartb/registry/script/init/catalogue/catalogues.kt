package city.smartb.registry.script.init.catalogue

import city.smartb.registry.s2.catalogue.domain.model.catalogue
import city.smartb.registry.s2.catalogue.domain.model.concept
import city.smartb.registry.s2.catalogue.domain.model.dataService
import java.util.UUID

fun catalogueStandards(debug: String) = catalogue {
    identifier = "standards${debug}"
    title = "Standards"
    type = "grid"
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
        +goldStandardCatalogue
    }
}


fun verraCatalogue(debug: String) = catalogue {
    identifier = "verra${debug}"
    homepage = "https://verra.org/"
    title = "Verra"
    type = "standard"
    description = """
            Verra, formerly known as Verified Carbon Standard (VCS), is a leading global standard 
            for the certification of greenhouse gas emission reduction projects.
            """.trimIndent()
    themes {
        concept {
            id = "EnergyRenewableNonRenewable"
            prefLabels = mutableMapOf(
                "en" to "Energy (renewable/non-renewable)",
                "fr" to "Energie (renouvelable/non renouvelable)"
            )
        }
        concept {
            id = "EnergyDistribution"
            prefLabels = mutableMapOf(
                "en" to "Energy distribution",
                "fr" to "Distribution d'énergie"
            )
        }
        concept {
            id = "EnergyDemand"
            prefLabels = mutableMapOf(
                "en" to "Energy demand",
                "fr" to "Demande d'énergie"
            )
        }
        concept {
            id = "ManufacturingIndustries"
            prefLabels = mutableMapOf(
                "en" to "Manufacturing industries",
                "fr" to "Industries manufacturières"
            )
        }
        concept {
            id = "ChemicalIndustry"
            prefLabels = mutableMapOf(
                "en" to "Chemical industry",
                "fr" to "Industrie chimique"
            )
        }
        concept {
            id = "Construction"
            prefLabels = mutableMapOf(
                "en" to "Construction",
                "fr" to "Construction"
            )
        }
        concept {
            id = "Transport"
            prefLabels = mutableMapOf(
                "en" to "Transport",
                "fr" to "Transport"
            )
        }
        concept {
            id = "MiningMineralProduction"
            prefLabels = mutableMapOf(
                "en" to "Mining/Mineral production",
                "fr" to "Production minière/minérale"
            )
        }
        concept {
            id = "MetalProduction"
            prefLabels = mutableMapOf(
                "en" to "Metal production",
                "fr" to "Production de métaux"
            )
        }
        concept {
            id = "FugitiveEmissionsFromFuels"
            prefLabels = mutableMapOf(
                "en" to "Fugitive emissions – from fuels (solid, oil, and gas)",
                "fr" to "Emissions fugitives - des combustibles (solides, pétrole et gaz)"
            )
        }
        concept {
            id = "FugitiveEmissionsFromIndustrialGases"
            prefLabels = mutableMapOf(
                "en" to "Fugitive emissions – from Industrial gases (halocarbons and sulphur hexafluoride)",
                "fr" to "Emissions fugitives - des gaz industriels (halocarbures et hexafluorure de soufre)"
            )
        }
        concept {
            id = "SolventsUse"
            prefLabels = mutableMapOf(
                "en" to "Solvents use",
                "fr" to "Utilisation de solvants"
            )
        }
        concept {
            id = "WasteHandlingDisposal"
            prefLabels = mutableMapOf(
                "en" to "Waste handling and disposal",
                "fr" to "Gestion et élimination des déchets"
            )
        }
        concept {
            id = "AgricultureForestryAndOtherLandUse"
            prefLabels = mutableMapOf(
                "en" to "Agriculture forestry and other land use (AFOLU)",
                "fr" to "Agriculture foresterie et autres utilisations des terres (AFOLU)"
            )
        }
        concept {
            id = "LivestockManureManagement"
            prefLabels = mutableMapOf(
                "en" to "Livestock and manure management",
                "fr" to "Gestion du bétail et du fumier"
            )
        }
        concept {
            id = "CarbonCaptureStorage"
            prefLabels = mutableMapOf(
                "en" to "Carbon capture and storage",
                "fr" to "Capture et stockage du carbone"
            )
        }
    }
    catalogues {
        +VerraProgram.verraVerifiedCarbonStandard(debug)
        +VerraProgram.plasticWasteReductionProgram(debug)
        +VerraProgram.climateCommunityBiodiversityStandards(debug)
        +VerraProgram.sustainableDevelopmentVerifiedImpactStandard(debug)
        +VerraProgram.californiaOffsetProject(debug)
    }
    datasets {
        dataset {
            identifier = "documents"
            title = "documents"
            type = "document"
        }
        dataset {
            identifier = "projects"
            title = "documents"
            type = "projects"
        }
    }
}

object VerraProgram {
    fun verraVerifiedCarbonStandard(debug: String) = catalogue {
        identifier = "verra-verifiedcarbonctandard${debug}"
        title = "Verified Carbon Standard"
        type = "program"
        description = """
            The Verified Carbon Standard Program creates tradable carbon credits 
            from certified projects that reduce or remove greenhouse gas emissions.
            """.trimIndent()
        themes {
            concept {
                id = "EnergyRenewableNonRenewable"
                prefLabels = mutableMapOf(
                    "en" to "Energy (renewable/non-renewable)",
                    "fr" to "Energie (renouvelable/non renouvelable)"
                )
            }
            concept {
                id = "EnergyDistribution"
                prefLabels = mutableMapOf(
                    "en" to "Energy distribution",
                    "fr" to "Distribution d'énergie"
                )
            }
            concept {
                id = "EnergyDemand"
                prefLabels = mutableMapOf(
                    "en" to "Energy demand",
                    "fr" to "Demande d'énergie"
                )
            }
            concept {
                id = "ManufacturingIndustries"
                prefLabels = mutableMapOf(
                    "en" to "Manufacturing industries",
                    "fr" to "Industries manufacturières"
                )
            }
            concept {
                id = "ChemicalIndustry"
                prefLabels = mutableMapOf(
                    "en" to "Chemical industry",
                    "fr" to "Industrie chimique"
                )
            }
            concept {
                id = "Construction"
                prefLabels = mutableMapOf(
                    "en" to "Construction",
                    "fr" to "Construction"
                )
            }
            concept {
                id = "Transport"
                prefLabels = mutableMapOf(
                    "en" to "Transport",
                    "fr" to "Transport"
                )
            }
            concept {
                id = "MiningMineralProduction"
                prefLabels = mutableMapOf(
                    "en" to "Mining/Mineral production",
                    "fr" to "Production minière/minérale"
                )
            }
            concept {
                id = "MetalProduction"
                prefLabels = mutableMapOf(
                    "en" to "Metal production",
                    "fr" to "Production de métaux"
                )
            }
            concept {
                id = "FugitiveEmissionsFromFuels"
                prefLabels = mutableMapOf(
                    "en" to "Fugitive emissions – from fuels (solid, oil, and gas)",
                    "fr" to "Emissions fugitives - des combustibles (solides, pétrole et gaz)"
                )
            }
            concept {
                id = "FugitiveEmissionsFromIndustrialGases"
                prefLabels = mutableMapOf(
                    "en" to "Fugitive emissions – from Industrial gases (halocarbons and sulphur hexafluoride)",
                    "fr" to "Emissions fugitives - des gaz industriels (halocarbures et hexafluorure de soufre)"
                )
            }
            concept {
                id = "SolventsUse"
                prefLabels = mutableMapOf(
                    "en" to "Solvents use",
                    "fr" to "Utilisation de solvants"
                )
            }
            concept {
                id = "WasteHandlingDisposal"
                prefLabels = mutableMapOf(
                    "en" to "Waste handling and disposal",
                    "fr" to "Gestion et élimination des déchets"
                )
            }
            concept {
                id = "AgricultureForestryAndOtherLandUse"
                prefLabels = mutableMapOf(
                    "en" to "Agriculture, forestry and other land use (AFOLU)",
                    "fr" to "Agriculture, foresterie et autres utilisations des terres (AFOLU)"
                )
            }
            concept {
                id = "LivestockManureManagement"
                prefLabels = mutableMapOf(
                    "en" to "Livestock and manure management",
                    "fr" to "Gestion du bétail et du fumier"
                )
            }
            concept {
                id = "CarbonCaptureStorage"
                prefLabels = mutableMapOf(
                    "en" to "Carbon capture and storage",
                    "fr" to "Capture et stockage du carbone"
                )
            }
        }
        datasets {
            dataset {
                identifier = "documents"
                title = "documents"
                type = "document"
            }
            dataset {
                identifier = "projects"
                title = "Projects"
                type = "projects"
            }
        }
    }
    fun plasticWasteReductionProgram(debug: String) = catalogue {
        identifier = "verra-plasticWasteReductionProgram${debug}"
        title = "The Plastic Waste Reduction Program"
        type = "program"
        description = """
           The Plastic Waste Reduction Program finances and expands recycling and collection to divert plastic waste 
           from the environment and support the circular economy.
            """.trimIndent()
        themes {

            concept {
                id = "PlasticWasteCollection"
                prefLabels = mutableMapOf(
                    "en" to "Plastic Waste Collection",
                    "fr" to "Collecte des déchets plastiques"
                )
            }
            concept {
                id = "PlasticWasteRecycling"
                prefLabels = mutableMapOf(
                    "en" to "Plastic Waste Recycling",
                    "fr" to "Recyclage des déchets plastiques"
                )
            }
        }
        datasets {
            dataset {
                identifier = "documents"
                title = "documents"
                type = "document"
            }
            dataset {
                identifier = "projects"
                title = "Projects"
                type = "projects"
            }
        }
    }
    fun climateCommunityBiodiversityStandards(debug: String) = catalogue {
        identifier = "verra-climateCommunityBiodiversityStandards${debug}"
        title = "Climate, Community & Biodiversity Standards"
        type = "program"
        description = """
          The Climate, Community & Biodiversity Program certifies land management projects that deliver net positive 
          impacts for climate, communities and biodiversity.
            """.trimIndent()
        themes {
            concept {
                id = " AfforestationReforestationRevegetation "
                prefLabels = mutableMapOf(
                    "en" to "Afforestation, Reforestation and Revegetation",
                    "fr" to "Afforestation, reboisement et revégétalisation"
                )
            }
            concept {
                id = "AgriculturalLandManagement"
                prefLabels = mutableMapOf(
                    "en" to "Agricultural Land Management",
                    "fr" to "Gestion des terres agricoles"
                )
            }
            concept {
                id = "AvoidedConversionOfGrasslandsAndShrublands"
                prefLabels = mutableMapOf(
                    "en" to "Avoided Conversion of Grasslands and Shrublands",
                    "fr" to "Eviter la conversion des prairies et des broussailles"
                )
            }
            concept {
                id = "ManufacturingIndustries"
                prefLabels = mutableMapOf(
                    "en" to "Manufacturing industries",
                    "fr" to "Industries manufacturières"
                )
            }
            concept {
                id = "ImprovedForestManagement"
                prefLabels = mutableMapOf(
                    "en" to "Improved Forest Management",
                    "fr" to "Gestion forestière améliorée"
                )
            }
            concept {
                id = "ReducedEmissionsFromDeforestationDegradation"
                prefLabels = mutableMapOf(
                    "en" to "Reduced Emissions from Deforestation and Degradation",
                    "fr" to "Réduction des émissions dues à la déforestation et à la dégradation"
                )
            }
            concept {
                id = "Wetland Rewetting and Conservation"
                prefLabels = mutableMapOf(
                    "en" to "Wetland Rewetting and Conservation",
                    "fr" to "Réhumidification et conservation des zones humides"
                )
            }
        }
        datasets {
            dataset {
                identifier = "documents"
                title = "documents"
                type = "document"
            }
            dataset {
                identifier = "projects"
                title = "Projects"
                type = "projects"
            }
        }
    }
    fun sustainableDevelopmentVerifiedImpactStandard(debug: String) = catalogue {
        identifier = "verra-sustainableDevelopmentVerifiedImpactStandard${debug}"
        title = "Sustainable Development Verified Impact Standard"
        type = "program"
        description = """
          The Sustainable Development Verified Impact Standard assesses projects delivering social and environmental 
          benefits aligned with the UN Sustainable Development Goals.
            """.trimIndent()
        themes {
            concept {
                id = "AgricultureForestryAndOtherLandUse"
                prefLabels = mutableMapOf(
                    "en" to "Agriculture, Forestry, and Other Land Use",
                    "fr" to "Agriculture, foresterie et autres utilisations des terres"
                )
            }
            concept {
                id = "Transport"
                prefLabels = mutableMapOf(
                    "en" to "Transport",
                    "fr" to "Transport"
                )
            }
            concept {
                id = "ClimateChangeAdaption"
                prefLabels = mutableMapOf(
                    "en" to "Climate Change Adaption",
                    "fr" to "Adaptation au changement climatique"
                )
            }
            concept {
                id = "Energy"
                prefLabels = mutableMapOf(
                    "en" to "Energy",
                    "fr" to "Énergie"
                )
            }
            concept {
                id = "Food"
                prefLabels = mutableMapOf(
                    "en" to "Food",
                    "fr" to "Alimentation"
                )
            }
            concept {
                id = "Livelihoods"
                prefLabels = mutableMapOf(
                    "en" to "Livelihoods",
                    "fr" to "Moyens de subsistance"
                )
            }
            concept {
                id = "WaterAccessAndSanitation"
                prefLabels = mutableMapOf(
                    "en" to "Water Access and Sanitation",
                    "fr" to "Accès à l'eau et assainissement"
                )
            }
            concept {
                id = "WomensEmpowerment"
                prefLabels = mutableMapOf(
                    "en" to "Women’s Empowerment",
                    "fr" to "Autonomisation des femmes"
                )
            }
        }
        datasets {
            dataset {
                identifier = "documents"
                title = "documents"
                type = "document"
            }
            dataset {
                identifier = "projects"
                title = "Projects"
                type = "projects"
            }
        }
    }
    fun californiaOffsetProject(debug: String) = catalogue {
        identifier = "verra-californiaOffsetProject${debug}"
        title = "California Offset Project"
        type = "program"
        description = """
            The Verra California Offset Project Registry facilitates the verification and issuance of credits 
            from greenhouse gas reduction projects under California's cap-and-trade program.
            """.trimIndent()
        themes {
            concept {
                id = "MineMethaneCapture"
                prefLabels = mutableMapOf(
                    "en" to "Mine Methane Capture (MMC) Projects",
                    "fr" to "Projets de capture de méthane minier (MMC)"  // Adjust the French translation as needed
                )
            }
            concept {
                id = "USForestProjects"
                prefLabels = mutableMapOf(
                    "en" to "U.S. Forest Projects",
                    "fr" to "Projets forestiers américains"  // Adjust if there's a standard French term for "U.S. Forest Projects"
                )
            }
        }
        datasets {
            dataset {
                identifier = "documents"
                title = "documents"
                type = "document"
            }
            dataset {
                identifier = "projects"
                title = "Projects"
                type = "projects"
            }
        }
    }

}
val goldStandardCatalogue = city.smartb.registry.s2.catalogue.domain.model.catalogue {
    identifier = "goldstandard-${UUID.randomUUID()}"
    homepage = "https://www.goldstandard.org/"
    title = "Gold Standard"
    type = "standard"
    description = """
           Gold Standard for the Global Goals is a standard that sets requirements to design projects 
           for maximum positive impact in climate and development -- and to measure and report outcomes 
           in the most credible and efficient way.
            """.trimIndent()
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
    datasets {
        dataset {
            identifier = "documents"
            title = "documents"
            type = "document"
        }
        dataset {
            identifier = "projects"
            title = "documents"
            type = "projects"
        }
    }
}


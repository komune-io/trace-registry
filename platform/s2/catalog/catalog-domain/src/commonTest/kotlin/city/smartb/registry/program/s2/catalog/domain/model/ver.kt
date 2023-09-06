package city.smartb.registry.program.s2.catalog.domain.model

val framwork = catalog {
    identifier = "standards"
    description = """
        Explore our comprehensive list of recognized standards for environmental project evaluation and certification. 
        Discover diverse opportunities in energy, carbon, water, waste, and more. 
        Choose the standard that aligns with your goals and make a positive environmental impact.
    """.trimIndent()
    catalogs {
        catalog {
            identifier = "standards/verra"
            homepage = "https://verra.org/"
            title = "Verra"
            description = """
                Verra, formerly known as Verified Carbon Standard (VCS), is a leading global standard 
                for the certification of greenhouse gas emission reduction projects.
                """.trimIndent()
            themes {
                concept {
                    id = "ForestryAndLandUse"
                    prefLabels = mutableMapOf("en" to "Forestry and Land Use")
                    definitions = mutableMapOf("en" to "Forestry and Land Use")
                }
                concept {
                    id = "Transport"
                    prefLabels = mutableMapOf("en" to "Transport")
                    definitions = mutableMapOf("en" to "Transport")
                }
                concept {
                    id = "Energy Efficiency"
                    prefLabels = mutableMapOf("en" to "Energy Efficiency")
                    definitions = mutableMapOf("en" to "Energy Efficiency")
                }
                concept {
                    id = "Collection, Recycling"
                    prefLabels = mutableMapOf("en" to "Collection, Recycling")
                    definitions = mutableMapOf("en" to "Collection, Recycling")
                }
            }
            dataset {
                identifier = "standards"
                title = "standards"
                description = """
                """.trimIndent()
            }
            dataset {
                identifier = "programs"
                title = "programs"
                description = """
                Explore our comprehensive list of recognized standards for environmental project evaluation 
                and certification. Discover diverse opportunities in energy, carbon, water, waste, and more. 
                Choose the standard that aligns with your goals and make a positive environmental impact.
                """.trimIndent()
            }
            dataset {
                identifier = "methodologies"
                title = "methodologies"
            }
            dataset {
                identifier = "documents"
                title = "documents"
            }
        }
        catalog {
            identifier = "standards/cee"
            title = "Programmes CEE"
            homepage = "https://www.ecologie.gouv.fr/cee-programmes-daccompagnement"
            description = """
                The CEE (Energy Savings Certificates) programs are initiatives that allow obtaining CEE certificates 
                without directly carrying out energy-saving actions.
                """.trimIndent()
            themes {
                concept {
                    id = "ForestryAndLandUse"
                    prefLabels = mutableMapOf("en" to "Forestry and Land Use")
                    definitions = mutableMapOf("en" to "Forestry and Land Use")
                }
                concept {
                    id = "Transport"
                    prefLabels = mutableMapOf("en" to "Transport")
                    definitions = mutableMapOf("en" to "Transport")
                }
                concept {
                    id = "Energy Efficiency"
                    prefLabels = mutableMapOf("en" to "Energy Efficiency")
                    definitions = mutableMapOf("en" to "Energy Efficiency")
                }
                concept {
                    id = "Collection, Recycling"
                    prefLabels = mutableMapOf("en" to "Collection, Recycling")
                    definitions = mutableMapOf("en" to "Collection, Recycling")
                }
            }
            dataset {
                identifier = "standards"
                title = "standards"
            }
            dataset {
                identifier = "programs"
                title = "programs"
                description = """
                Explore our comprehensive list of recognized standards for environmental project evaluation 
                and certification. Discover diverse opportunities in energy, carbon, water, waste, and more. 
                Choose the standard that aligns with your goals and make a positive environmental impact.
                """.trimIndent()
            }
            dataset {
                identifier = "methodologies"
                title = "methodologies"
            }
            dataset {
                identifier = "indicator"
                title = "methodologies"
                type = "indicator"
            }
            dataset {
                identifier = "methodologies"
                title = "methodologies"
            }
        }
        catalog {
            identifier = "standards/goldstandard"
            title = "Gold Standard"
            homepage = "https://www.goldstandard.org/"
            description = """
                By achieving Gold Standard certification, projects demonstrate their commitment 
                to high-quality environmental and social impact, which can attract investors 
                and consumers looking to support.
                """.trimIndent()
            themes {
                concept {
                    id = "ForestryAndLandUse"
                    prefLabels = mutableMapOf("en" to "Forestry and Land Use")
                    definitions = mutableMapOf("en" to "Forestry and Land Use")
                }
                concept {
                    id = "Transport"
                    prefLabels = mutableMapOf("en" to "Transport")
                    definitions = mutableMapOf("en" to "Transport")
                }
                concept {
                    id = "Energy Efficiency"
                    prefLabels = mutableMapOf("en" to "Energy Efficiency")
                    definitions = mutableMapOf("en" to "Energy Efficiency")
                }
                concept {
                    id = "Collection, Recycling"
                    prefLabels = mutableMapOf("en" to "Collection, Recycling")
                    definitions = mutableMapOf("en" to "Collection, Recycling")
                }
            }
        }
        catalog {
            identifier = "standards/cdm"
            title = "CDM"
            homepage = "https://cdm.unfccc.int/"
            description = """
                The Clean Development Mechanism (CDM) is a key component of the United Nations Framework Convention 
                on Climate Change (UNFCCC) designed to promote emission reduction projects in developing countries.
                """.trimIndent()
            themes {
                concept {
                    id = "ForestryAndLandUse"
                    prefLabels = mutableMapOf("en" to "Forestry and Land Use")
                    definitions = mutableMapOf("en" to "Forestry and Land Use")
                }
                concept {
                    id = "Transport"
                    prefLabels = mutableMapOf("en" to "Transport")
                    definitions = mutableMapOf("en" to "Transport")
                }
                concept {
                    id = "Energy Efficiency"
                    prefLabels = mutableMapOf("en" to "Energy Efficiency")
                    definitions = mutableMapOf("en" to "Energy Efficiency")
                }
                concept {
                    id = "Collection, Recycling"
                    prefLabels = mutableMapOf("en" to "Collection, Recycling")
                    definitions = mutableMapOf("en" to "Collection, Recycling")
                }
            }
        }
    }
}

val standards = catalog {
    identifier = "standards"
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
    datasets {
        dataset {
            identifier = "standards"
            title = "standards"
            description = """
               Explore our comprehensive list of recognized standards for environmental project evaluation 
               and certification. Discover diverse opportunities in energy, carbon, water, waste, and more. 
               Choose the standard that aligns with your goals and make a positive environmental impact. 
            """.trimIndent()
            distributions {

            }
        }
        dataset {
            identifier = "programs"
            title = "programs"
            description = """
                Explore our comprehensive list of recognized standards for environmental project evaluation 
                and certification. Discover diverse opportunities in energy, carbon, water, waste, and more. 
                Choose the standard that aligns with your goals and make a positive environmental impact.
                """.trimIndent()
        }
        dataset {
            identifier = "methodologies"
            title = "methodologies"
        }
    }
    datasets {
        dataset {
            identifier = "http://example.com/datasets/weather"
            distributions {
                distribution {
                    identifier = "http://example.com/datasets/weather/csv"
                    mediaType = "text/csv"
                    format = "CSV"
                }
            }
        }
    }
}

val programs = catalog {

}



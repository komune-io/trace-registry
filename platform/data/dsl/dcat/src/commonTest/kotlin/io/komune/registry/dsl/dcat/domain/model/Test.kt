package io.komune.registry.dsl.dcat.domain.model

import io.komune.registry.dsl.skos.domain.model.concept

val catalogue = catalogue {
    identifier = "standards/verra"
    homepage = "https://verra.org/"
    title = "Verra"
    description = """
                Verra, formerly known as Verified Carbon Standard (VCS), is a leading global standard 
                for the certification of greenhouse gas emission reduction projects.
                """.trimIndent()
    type = "standards"
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

val dataset = dataset {
    identifier = "programs"
    title = "programs"
    description = """
        Explore our comprehensive list of recognized standards for environmental project evaluation 
        and certification. Discover diverse opportunities in energy, carbon, water, waste, and more. 
        Choose the standard that aligns with your goals and make a positive environmental impact.
    """.trimIndent()
    type = "Dataset"
    conformsTo {

    }
    distributions {
        distribution {
            identifier = "programs/verra"
            mediaType = "application/json"
            downloadURL = "https://trace/download"
//            accessService = DataServiceModel(
//                identifier = "identifier",
//                endpointURL = "https://trace/download",
//                endpointDescription = ""
//            )
        }
    }

}
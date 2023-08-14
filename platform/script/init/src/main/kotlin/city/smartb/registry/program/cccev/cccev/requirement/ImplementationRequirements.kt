package city.smartb.registry.program.cccev.cccev.requirement

import cccev.dsl.model.XSDString
import cccev.dsl.model.builder.InformationConceptBuilder
import cccev.dsl.model.builder.InformationConceptListBuilder
import cccev.dsl.model.builder.InformationRequirementBuilder
import city.smartb.registry.program.cccev.cccev.ver.Activities

import city.smartb.registry.program.cccev.cccev.ver.ReferenceFramework
import city.smartb.registry.program.f2.activity.domain.model.RequirementType

fun InformationConceptListBuilder.implementationStep(init: InformationConceptBuilder.() -> Unit) =
    +InformationConceptBuilder().apply {
        type = RequirementType.Step
        unit = XSDString
    }.apply(init).build()

fun implementationActivity(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +Activities.Implementation
        }
        isDerivedFrom {
            +ReferenceFramework.AxessImpact
        }
        type = RequirementType.Activity
    }.apply(init).build()


val ProtocolDefinition = implementationActivity {
    identifier = "C10"
    name = "Protocol definition"
    description = """
        Defining the procedures and guidelines for the project's implementation, including the scope of the project, 
        the methods for measuring emissions, and the requirements for data collection and reporting.
    """.trimIndent()
    hasConcept {
        implementationStep {
            identifier = "C100"
            name = "Protocol definition"
        }
    }
}

val DataCollection = implementationActivity {
    identifier = "C20"
    name = "Data collection"
    description = "Collecting data on emissions sources and activities related to the project."
    hasConcept {
        implementationStep {
            identifier = "C200"
            name = "Project interface"
        }
    }
}
val ProjectInterface = implementationActivity {
    identifier = "C30"
    name = "Project interface"
    description = """
        Establishing a communication and information-sharing system between project developers and third-party verifiers.
    """.trimIndent()
    hasConcept {
        implementationStep {
            identifier = "C300"
            name = "Project interface"
        }
    }
}
val BlockchainOrganization = implementationActivity {
    identifier = "C40"
    name = "Blockchain organization"
    description = "Implementing a blockchain-based system for storing and verifying emissions data."
    hasConcept {
        implementationStep {
            identifier = "C400"
            name = "Blockchain organization"
        }
    }
}
val AllocationOfValidationKeys = implementationActivity {
    identifier = "C50"
    name = "Allocation of validation keys"
    description = """
        Using smart protocols to allocate validation keys to project participants based on their level of compliance 
        with project requirements.
    """.trimIndent()
    hasConcept {
        implementationStep {
            identifier = "C500"
            name = "Allocation of validation keys"
        }
    }
}
val MonitoringProcess = implementationActivity {
    identifier = "C60"
    name = "Monitoring process"
    description = """
        Establishing a system for monitoring project activities and emissions reductions over time.
    """.trimIndent()
    hasConcept {
        implementationStep {
            identifier = "C600"
            name = "Monitoring process"
        }
    }
}

val SelectionOfStandard = implementationActivity {
    identifier = "C70"
    name = "Selecton of Standard"
    description = """
        Selection of standards for enhancing the project.
    """.trimIndent()
    hasConcept {
        implementationStep {
            identifier = "C700"
            name = "Selecton of Standard"
        }
    }
}


val PreliminaryStudy = implementationActivity {
    identifier = "C80"
    name = "Preliminary study"
    description = "Provide a preliminary study for the project."
    hasConcept {
        implementationStep {
            identifier = "C801"
            name = "Cartographie"
            description = "Provide a cartographie for the project."
        }
        implementationStep {
            identifier = "C802"
            name = "Socio-economic study"
            description = "Provide a socio-economic study for the project."
        }
        implementationStep {
            identifier = "C803"
            name = "Social Clauses PV"
            description = "Provide a social clauses PV for the project."
        }
    }
}

val ImplementationRequirements = buildList {
    add(ProtocolDefinition)
    add(DataCollection)
    add(ProjectInterface)
    add(BlockchainOrganization)
    add(AllocationOfValidationKeys)
    add(MonitoringProcess)
    add(SelectionOfStandard)
    add(PreliminaryStudy)
}

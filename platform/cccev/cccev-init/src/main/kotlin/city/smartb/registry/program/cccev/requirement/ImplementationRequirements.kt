package city.smartb.registry.program.cccev.requirement

import cccev.dsl.model.builder.InformationRequirementBuilder
import city.smartb.registry.program.cccev.ver.Activities
import city.smartb.registry.program.cccev.ver.ReferenceFramework
import city.smartb.registry.program.cccev.ver.Type

fun implementationStep(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isDerivedFrom {
            +ReferenceFramework.AxessImpact
        }
        type = Type.Steps
    }.apply(init).build()

fun implementationActivityStep(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +Activities.Implementation
        }
        isDerivedFrom {
            +ReferenceFramework.AxessImpact
        }
        type = Type.Steps

    }.apply(init).build()

fun implementationActivity(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +Activities.Implementation
        }
        isDerivedFrom {
            +ReferenceFramework.AxessImpact
        }
        type = Type.Activities
    }.apply(init).build()


val ProtocolDefinition = implementationActivityStep {
    identifier = "C100"
    name = "Protocol definition"
    description = """
        Defining the procedures and guidelines for the project's implementation, including the scope of the project, 
        the methods for measuring emissions, and the requirements for data collection and reporting.
    """.trimIndent()

}

val DataCollection = implementationActivityStep {
    identifier = "C200"
    name = "Data collection"
    description = "Collecting data on emissions sources and activities related to the project."
}
val ProjectInterface = implementationActivityStep {
    identifier = "C300"
    name = "Project interface"
    description = """
        Establishing a communication and information-sharing system between project developers and third-party verifiers.
    """.trimIndent()
}
val BlockchainOrganization = implementationActivityStep {
    identifier = "C400"
    name = "Blockchain organization"
    description = "Implementing a blockchain-based system for storing and verifying emissions data."
}
val AllocationOfValidationKeys = implementationActivityStep {
    identifier = "C500"
    name = "Allocation of validation keys"
    description = """
        Using smart protocols to allocate validation keys to project participants based on their level of compliance 
        with project requirements.
    """.trimIndent()
}
val MonitoringProcess = implementationActivityStep {
    identifier = "C600"
    name = "Monitoring process"
    description = """
        Establishing a system for monitoring project activities and emissions reductions over time.
    """.trimIndent()
}

val SelectionOfStandard = implementationActivityStep {
    identifier = "C700"
    name = "Selecton of Standard"
    description = """
        Selection of standards for enhancing the project.
    """.trimIndent()
}


val PreliminaryStudy = implementationActivity {
    identifier = "C80X"
    name = "Preliminary study"
    description = "Provide a preliminary study for the project."
    hasRequirement {
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

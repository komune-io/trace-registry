package city.smartb.registry.program.cccev

import cccev.dsl.model.builder.InformationRequirementBuilder
import city.smartb.registry.program.cccev.ver.Activities
import city.smartb.registry.program.cccev.ver.ReferenceFramework
import city.smartb.registry.program.cccev.ver.Type

fun implementationStep(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +Activities.Implementation
        }
        isDerivedFrom {
            +ReferenceFramework.AxessImpact
        }
        type = Type.Steps

    }.apply(init).build()


val ProtocolDefinition = implementationStep {
    identifier = "C100"
    name = "Protocol definition"
    description = """
        Defining the procedures and guidelines for the project's implementation, including the scope of the project, 
        the methods for measuring emissions, and the requirements for data collection and reporting.
    """.trimIndent()

}

val DataCollection = implementationStep {
    identifier = "C200"
    name = "Data collection"
    description = "Collecting data on emissions sources and activities related to the project."
}
val ProjectInterface = implementationStep {
    identifier = "C300"
    name = "Project interface"
    description = """
        Establishing a communication and information-sharing system between project developers and third-party verifiers.
    """.trimIndent()
}
val BlockchainOrganization = implementationStep {
    identifier = "C400"
    name = "Blockchain organization"
    description = "Implementing a blockchain-based system for storing and verifying emissions data."
}
val AllocationOfValidationKeys = implementationStep {
    identifier = "C500"
    name = "Allocation of validation keys"
    description = """
        Using smart protocols to allocate validation keys to project participants based on their level of compliance 
        with project requirements.
    """.trimIndent()
}
val MonitoringProcess = implementationStep {
    identifier = "C600"
    name = "Monitoring process"
    description = """
        Establishing a system for monitoring project activities and emissions reductions over time.
    """.trimIndent()
}

val ImplementationRequirements = buildList {
    add(ProtocolDefinition)
    add(DataCollection)
    add(ProjectInterface)
    add(BlockchainOrganization)
    add(AllocationOfValidationKeys)
    add(MonitoringProcess)
}

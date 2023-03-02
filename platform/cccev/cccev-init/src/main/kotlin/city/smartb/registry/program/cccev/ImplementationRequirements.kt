package city.smartb.registry.program.cccev

import cccev.dsl.model.informationRequirement


//hasRequirement {
//    informationRequirement {
//        identifier = "ProtocolDefinition"
//        name = "Protocol definition"
//        description =
//            "Defining the procedures and guidelines for the project's implementation, including the scope of the project, the methods for measuring emissions, and the requirements for data collection and reporting."
//    }
//    informationRequirement {
//        identifier = "DataCollection"
//        name = "Data collection"
//        description =
//            "Collecting data on the project's activities and emissions in accordance with the project protocol."
//    }
//    informationRequirement {
//        identifier = "ProjectInterface"
//        name = "Project interface"
//        description = "Establishing a project interface to manage the project's activities and emissions data."
//    }
//    informationRequirement {
//        identifier = "BlockchainOrganization"
//        name = "Blockchain organization"
//        description =
//            "Implementing a blockchain-based system to securely and transparently record project activities and emissions data."
//    }
//    informationRequirement {
//        identifier = "AllocationOfValidationKeys"
//        name = "Allocation of validation keys"
//        description =
//            "Allocating validation keys or smart protocols to ensure the integrity of project data and emissions reductions."
//    }
//    informationRequirement {
//        identifier = "MonitoringProcess"
//        name = "Monitoring process"
//        description =
//            "Establishing a monitoring process to ensure that the project is being implemented according to the project protocol."
//    }
//    informationRequirement {
//        identifier = "SelectionOfStandard"
//        name = "Selection of standard"
//        description = "Selecting a standard, such as VCS, for measuring and reporting emissions reductions."
//    }
//    informationRequirement {
//        identifier = "PreliminaryStudy"
//        name = "Preliminary study"
//        description =
//            "Conducting a preliminary study to assess the feasibility and potential emissions reductions of the project."
//    }
//}

val ProtocolDefinition = informationRequirement {
    identifier = "C100"
    name = "Protocol definition"
    description = "Defining the procedures and guidelines for the project's implementation, including the scope of the project, the methods for measuring emissions, and the requirements for data collection and reporting."
}

val DataCollection = informationRequirement {
    identifier = "C200"
    name = "Data collection"
    description = "Collecting data on emissions sources and activities related to the project."
}
val ProjectInterface = informationRequirement {
    identifier = "C300"
    name = "Project interface"
    description = "Establishing a communication and information-sharing system between project developers and third-party verifiers."
}
val BlockchainOrganization = informationRequirement {
    identifier = "C400"
    name = "Blockchain organization"
    description = "Implementing a blockchain-based system for storing and verifying emissions data."
}
val AllocationOfValidationKeys = informationRequirement {
    identifier = "C500"
    name = "Allocation of validation keys"
    description = "Using smart protocols to allocate validation keys to project participants based on their level of compliance with project requirements."
}
val MonitoringProcess = informationRequirement {
    identifier = "C600"
    name = "Monitoring process"
    description = "Establishing a system for monitoring project activities and emissions reductions over time."
}

val ImplementationRequirements = buildList {
    add(ProtocolDefinition)
    add(DataCollection)
    add(ProjectInterface)
    add(BlockchainOrganization)
    add(AllocationOfValidationKeys)
    add(MonitoringProcess)
}

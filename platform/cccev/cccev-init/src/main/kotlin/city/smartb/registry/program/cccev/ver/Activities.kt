package city.smartb.registry.program.cccev.ver

import cccev.dsl.model.informationRequirement
import city.smartb.registry.program.f2.activity.domain.model.RequirementType

object Activities {
    val LOI = informationRequirement {
        identifier = "P0"
        name = "LOI"
        description =
            "Stands for Letter of Intent. This activity involves the submission of a letter expressing the intention to develop and implement a VERs project."
        type = RequirementType.Activity
        isDerivedFrom {
            +ReferenceFramework.AxessImpact
        }
    }

    val Eligibility = informationRequirement {
        identifier = "P1"
        name = "Eligibility"
        description =
            "This activity involves assessing whether the project meets the criteria or conditions set out in the project protocol and is eligible to receive certification."
        type = RequirementType.Activity
        isDerivedFrom {
            +ReferenceFramework.AxessImpact
        }
    }
    val Implementation = informationRequirement {
        identifier = "P2"
        name = "Implementation"
        description =
            "This activity involves the actual implementation of the project according to the project protocol."
        type = RequirementType.Activity
        isDerivedFrom {
            +ReferenceFramework.AxessImpact
        }
    }
    val ProtocolPreparation = informationRequirement {
        identifier = "P3"
        name = "Protocol preparation"
        description = ""
        type = RequirementType.Activity
        isDerivedFrom {
            +ReferenceFramework.AxessImpact
        }
    }
    val ProtocolValidation = informationRequirement {
        identifier = "P4"
        name = "Protocol validation"
        description = ""
        type = RequirementType.Activity
        isDerivedFrom {
            +ReferenceFramework.AxessImpact
        }
    }
    val Certification = informationRequirement {
        identifier = "P5"
        name = "Certification"
        description = ""
        type = RequirementType.Activity
        isDerivedFrom {
            +ReferenceFramework.AxessImpact
        }
    }
}

val ActivitiesAxess = informationRequirement {
    identifier = "AXESS"
    name = "Axess Activityies"
    description = "Axess activities"
    hasRequirement {
        +Activities.LOI
        +Activities.Eligibility
        +Activities.Implementation
        +Activities.ProtocolPreparation
        +Activities.ProtocolValidation
    }
}

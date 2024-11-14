package io.komune.registry.script.init.cccev.ver

import cccev.dsl.model.informationRequirement
import io.komune.registry.f2.activity.domain.model.RequirementType

const val QUALIFIED_RELATION = "IS_RELATED_TO"

object Activities {
    val Certification = informationRequirement {
        identifier = "P5"
        name = "Certification"
        description = ""
        type = RequirementType.Activity.identifier
        isDerivedFrom {
            +ReferenceFramework.VerraProject
        }
    }

    val ProtocolValidation = informationRequirement {
        identifier = "P4"
        name = "Protocol validation"
        description = ""
        type = RequirementType.Activity.identifier
        isDerivedFrom {
            +ReferenceFramework.VerraProject
        }
        hasQualifiedRelation(QUALIFIED_RELATION) {
            +Certification
        }
    }

    val ProtocolPreparation = informationRequirement {
        identifier = "P3"
        name = "Protocol preparation"
        description = ""
        type = RequirementType.Activity.identifier
        isDerivedFrom {
            +ReferenceFramework.VerraProject
        }
        hasQualifiedRelation(QUALIFIED_RELATION) {
            +ProtocolValidation
        }
    }

    val Implementation = informationRequirement {
        identifier = "P2"
        name = "Implementation"
        description =
            "This activity involves the actual implementation of the project according to the project protocol."
        type = RequirementType.Activity.identifier
        isDerivedFrom {
            +ReferenceFramework.VerraProject
        }
        hasQualifiedRelation(QUALIFIED_RELATION) {
            +ProtocolPreparation
        }
    }

    val Eligibility = informationRequirement {
        identifier = "P1"
        name = "Eligibility"
        description =
            "This activity involves assessing whether the project meets the criteria or conditions " +
                    "set out in the project protocol and is eligible to receive certification."
        type = RequirementType.Activity.identifier
        isDerivedFrom {
            +ReferenceFramework.VerraProject
        }
        hasQualifiedRelation(QUALIFIED_RELATION) {
            +Implementation
        }
    }

    val LOI = informationRequirement {
        identifier = "P0"
        name = "LOI"
        description =
            "Stands for Letter of Intent. This activity involves the submission of a letter " +
                    "expressing the intention to develop and implement a VERs project."
        type = RequirementType.Activity.identifier
        isDerivedFrom {
            +ReferenceFramework.VerraProject
        }
        hasQualifiedRelation(QUALIFIED_RELATION) {
            +Eligibility
        }
    }
}

val ActivitiesVerraProject = informationRequirement {
    identifier = "VERRA_PROJECT"
    name = "Verra Project Activityies"
    description = "Verra Project activities"
    hasRequirement {
        +Activities.LOI
        +Activities.Eligibility
        +Activities.Implementation
        +Activities.ProtocolPreparation
        +Activities.ProtocolValidation
    }
}

package city.smartb.registry.program.cccev.requirement

import cccev.dsl.model.informationRequirement
import city.smartb.registry.program.cccev.ver.Activities
import city.smartb.registry.program.cccev.ver.ReferenceFramework
import city.smartb.registry.program.cccev.ver.Type

val loiStep = informationRequirement {
    identifier = "A100"
    name = "Letter of Intent (LOI)"
    description = "A preliminary document indicating the intention of the project developers to participate in a VERs project and comply with its requirements."
    isRequirementOf {
        +Activities.LOI
    }
    isDerivedFrom {
        +ReferenceFramework.AxessImpact
    }
    type = Type.Steps
}

val LOIRequirements = buildList {
    add(loiStep)
}

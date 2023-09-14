package city.smartb.registry.script.init.cccev.requirement

import cccev.dsl.model.informationRequirement
import city.smartb.registry.script.init.cccev.ver.Activities

import city.smartb.registry.script.init.cccev.ver.ReferenceFramework
import city.smartb.registry.program.f2.activity.domain.model.RequirementType

val loiStep = informationRequirement {
    identifier = "A10"
    name = "Letter of Intent (LOI)"
    description = "A preliminary document indicating the intention of the project developers to participate in a VERs project and comply with its requirements."
    isRequirementOf {
        +Activities.LOI
    }
    isDerivedFrom {
        +ReferenceFramework.AxessImpact
    }
    type = RequirementType.Step
}

val LOIRequirements = buildList {
    add(loiStep)
}

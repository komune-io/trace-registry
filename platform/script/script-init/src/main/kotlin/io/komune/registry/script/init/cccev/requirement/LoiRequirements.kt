package io.komune.registry.script.init.cccev.requirement

import cccev.dsl.model.informationRequirement
import io.komune.registry.f2.activity.domain.model.RequirementType
import io.komune.registry.script.init.cccev.ver.Activities
import io.komune.registry.script.init.cccev.ver.ReferenceFramework

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

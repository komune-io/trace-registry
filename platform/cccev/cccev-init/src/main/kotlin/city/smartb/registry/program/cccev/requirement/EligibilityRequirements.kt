package city.smartb.registry.program.cccev.requirement

import cccev.dsl.model.builder.InformationRequirementBuilder
import cccev.dsl.model.builder.RequirementsLinkedBuilder
import city.smartb.registry.program.cccev.ver.Activities
import city.smartb.registry.program.cccev.ver.ReferenceFramework
import city.smartb.registry.program.cccev.ver.Type

fun eligibilityActivity(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +Activities.Eligibility
        }
        isDerivedFrom {
            +ReferenceFramework.AxessImpact
        }
        type = Type.Activities
    }.apply(init).build()

private fun eligibilityStepSingle(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isDerivedFrom {
            +ReferenceFramework.AxessImpact
        }
        type = Type.Steps
    }.apply(init).build()

fun eligibilityStep(init: InformationRequirementBuilder.() -> Unit) = eligibilityStepSingle(init)
fun RequirementsLinkedBuilder.eligibilityStep(init: InformationRequirementBuilder.() -> Unit) = +eligibilityStepSingle(init)


val SurveyOfEligibility = eligibilityStep {
    identifier = "B100"
    name = "Survey of eligibility"
    description =
        "Conduct an initial assessment of the project to determine if it meets the eligibility criteria."
    isRequirementOf {
        +Activities.Eligibility
    }
}


val IdentificationOfProject = eligibilityActivity {
    identifier = "B10X"
    name = "Identification of the project"
    description = "This activity involves identifying the project and its location."
    hasRequirement {
        eligibilityStep {
            identifier = "B101"
            name = "Project name"
            description = "Provide a name for the project."
        }
        eligibilityStep {
            identifier = "B102"
            name = "Map numbering"
            description = "Assign a number to the project location on the map."
        }
        eligibilityStep {
            identifier = "B103"
            name = "CFC number"
            description = "Assign a unique number to the project from the Cadastre Forestier."
        }
        eligibilityStep {
            identifier = "B104"
            name = "CCC number"
            description = "Assign a unique number to the project from the Cadastre des Concessions de Chasse."
        }
        eligibilityStep {
            identifier = "B105"
            name = "Province"
            description = "Identify the province where the project is located."
        }
        eligibilityStep {
            identifier = "B106"
            name = "Location on map"
            description = "Provide a visual representation of the project location on the map."
        }
    }
}

val FirstDocumentation = eligibilityActivity {
    identifier = "B20X"
    name = "First Documentation"
    description = "Obtaining the necessary legal and administrative documents for the project."
    hasRequirement {
        eligibilityStep {
            identifier = "B200"
            name = "Notarial Deeds"
            description = "Obtaining notarized documents such as articles of incorporation or bylaws."
        }
        eligibilityStep {
            identifier = "B201"
            name = "RCCM"
            description = "Obtaining the Registre de Commerce et du Crédit Mobilier (RCCM) registration number for the project."
        }
        eligibilityStep {
            identifier = "B202"
            name = "Tax Number"
            description = "Obtaining the project's tax identification number."
        }
        eligibilityStep {
            identifier = "B203"
            name = "Forest Conservation Concession Contract"
            description = "Obtaining the contract for the forest conservation concession."
        }
    }
}

val FirstEstimate = eligibilityStep {
    identifier = "B300"
    name = "First emissions estimate"
    description = "An initial estimation of the baseline emissions of the project, used as a reference for measuring emissions reductions."
    isRequirementOf {
        +Activities.Eligibility
    }
}

val ThirdPartyAudit = eligibilityStep {
    identifier = "B400"
    name = "Third-party audit"
    description = "An independent review of the project's emissions data and reduction claims by a third-party organization to ensure accuracy and credibility."
    isRequirementOf {
        +Activities.Eligibility
    }
}

val Validation = eligibilityStep {
    identifier = "B500"
    name = "Validation"
    description = "A formal process of verifying that the project meets the criteria or conditions set out in the project protocol and is eligible to receive certification."
    isRequirementOf {
        +Activities.Eligibility
    }
}

val EligibilityRequirements = buildList {
    add(SurveyOfEligibility)
    add(IdentificationOfProject)
    add(FirstDocumentation)
    add(FirstEstimate)
    add(ThirdPartyAudit)
    add(Validation)
}

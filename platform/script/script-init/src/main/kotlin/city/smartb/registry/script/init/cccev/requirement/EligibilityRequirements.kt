package city.smartb.registry.script.init.cccev.requirement

import cccev.dsl.model.XSDString
import cccev.dsl.model.builder.InformationConceptBuilder
import cccev.dsl.model.builder.InformationConceptListBuilder
import cccev.dsl.model.builder.InformationRequirementBuilder
import city.smartb.registry.program.f2.activity.domain.model.RequirementType
import city.smartb.registry.script.init.cccev.ver.Activities
import city.smartb.registry.script.init.cccev.ver.ReferenceFramework

fun eligibilityActivity(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +Activities.Eligibility
        }
        isDerivedFrom {
            +ReferenceFramework.AxessImpact
        }
        type = RequirementType.Activity
    }.apply(init).build()

private fun eligibilityStepSingle(init: InformationConceptBuilder.() -> Unit) =
    InformationConceptBuilder().apply {
        type = RequirementType.Step
        unit = XSDString
    }.apply(init).build()

fun InformationConceptListBuilder.eligibilityStep(init: InformationConceptBuilder.() -> Unit) = +eligibilityStepSingle(init)


val SurveyOfEligibility = eligibilityActivity {
    identifier = "B10"
    name = "Survey of eligibility"
    description =
        "Conduct an initial assessment of the project to determine if it meets the eligibility criteria."
    isRequirementOf {
        +Activities.Eligibility
    }
    hasConcept {
        eligibilityStep {
            identifier = "B100"
            name = "Project name"
            description = "Provide a name for the project."
        }
    }
}


val IdentificationOfProject = eligibilityActivity {
    identifier = "B11"
    name = "Identification of the project"
    description = "This activity involves identifying the project and its location."
    hasConcept {
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
    identifier = "B20"
    name = "First Documentation"
    description = "Obtaining the necessary legal and administrative documents for the project."
    hasConcept {
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

val FirstEstimate = eligibilityActivity {
    identifier = "B30"
    name = "First emissions estimate"
    description = "An initial estimation of the baseline emissions of the project, used as a reference for measuring emissions reductions."
    isRequirementOf {
        +Activities.Eligibility
    }
    hasConcept {
        eligibilityStep {
            identifier = "B300"
            name = "First emissions estimate"
        }
    }
}

val ThirdPartyAudit = eligibilityActivity {
    identifier = "B40"
    name = "Third-party audit"
    description = "An independent review of the project's emissions data and reduction claims by a third-party organization to ensure accuracy and credibility."
    isRequirementOf {
        +Activities.Eligibility
    }
    hasConcept {
        eligibilityStep {
            identifier = "B400"
            name = "First emissions estimate"
        }
    }
}

val Validation = eligibilityActivity {
    identifier = "B50"
    name = "Validation"
    description = "A formal process of verifying that the project meets the criteria or conditions set out in the project protocol and is eligible to receive certification."
    isRequirementOf {
        +Activities.Eligibility
    }
    hasConcept {
        eligibilityStep {
            identifier = "B500"
            name = "Validation"
        }
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

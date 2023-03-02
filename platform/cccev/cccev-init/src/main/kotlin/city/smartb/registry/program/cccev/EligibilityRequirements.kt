package city.smartb.registry.program.cccev

import cccev.dsl.model.builder.InformationRequirementBuilder
import city.smartb.registry.program.cccev.ver.Activities
import city.smartb.registry.program.cccev.ver.Type



// TODO find Methodology and ReferenceFramework

fun loiStep(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +Activities.LOI
//            +Methodology.FicherLocalConsultationName
        }
        isDerivedFrom {
//            +VERReferenceFramework.LocalConsultation
        }
        type = Type.Steps
    }.apply(init).build()

fun eligibilityActivity(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +Activities.Eligibility
//            +Methodology.FicherLocalConsultationName
        }
        isDerivedFrom {
//            +VERReferenceFramework.LocalConsultation
        }
        type = Type.Activities
    }.apply(init).build()

fun eligibilityStep(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +Activities.Eligibility
//            +Methodology.FicherLocalConsultationName
        }
        isDerivedFrom {
//            +VERReferenceFramework.LocalConsultation
        }
        type = Type.Steps
    }.apply(init).build()


val LOI = loiStep {
    identifier = "A100"
    name = "Letter of Intent (LOI)"
    description = "A preliminary document indicating the intention of the project developers to participate in a VERs project and comply with its requirements."
}

val SurveyOfEligibility = eligibilityStep {
    identifier = "B100"
    name = "Survey of eligibility"
    description =
        "Conduct an initial assessment of the project to determine if it meets the eligibility criteria."
}


val IdentificationOfProject = eligibilityActivity {
    identifier = "IdentificationOfProject"
    name = "Identification of the project"
    description = "This activity involves identifying the project and its location."
    hasRequirement {
        eligibilityStep {
            identifier = "ProjectName"
            name = "Project name"
            description = "Provide a name for the project."
        }
        eligibilityStep {
            identifier = "MapNumbering"
            name = "Map numbering"
            description = "Assign a number to the project location on the map."
        }
        eligibilityStep {
            identifier = "CFCNumber"
            name = "CFC number"
            description = "Assign a unique number to the project from the Cadastre Forestier."
        }
        eligibilityStep {
            identifier = "CCCNumber"
            name = "CCC number"
            description = "Assign a unique number to the project from the Cadastre des Concessions de Chasse."
        }
        eligibilityStep {
            identifier = "Province"
            name = "Province"
            description = "Identify the province where the project is located."
        }
        eligibilityStep {
            identifier = "LocationOnMap"
            name = "Location on map"
            description = "Provide a visual representation of the project location on the map."
        }
    }
}

val FirstDocumentation = eligibilityActivity {
    identifier = "FirstDocumentation"
    name = "First Documentation"
    description = "Obtaining the necessary legal and administrative documents for the project."
    hasRequirement {
        eligibilityStep {
            identifier = "NotarialDeeds"
            name = "Notarial Deeds"
            description = "Obtaining notarized documents such as articles of incorporation or bylaws."
        }
        eligibilityStep {
            identifier = "RCCM"
            name = "RCCM"
            description = "Obtaining the Registre de Commerce et du Crédit Mobilier (RCCM) registration number for the project."
        }
        eligibilityStep {
            identifier = "TaxNumber"
            name = "Tax Number"
            description = "Obtaining the project's tax identification number."
        }
        eligibilityStep {
            identifier = "ForestConservationConcessionContract"
            name = "Forest Conservation Concession Contract"
            description = "Obtaining the contract for the forest conservation concession."
        }
    }
}

val FirstEstimate = eligibilityStep {
    identifier = "B300"
    name = "First emissions estimate"
    description = "An initial estimation of the baseline emissions of the project, used as a reference for measuring emissions reductions."
}

val ThirdPartyAudit = eligibilityStep {
    identifier = "B400"
    name = "Third-party audit"
    description = "An independent review of the project's emissions data and reduction claims by a third-party organization to ensure accuracy and credibility."
}

val Validation = eligibilityStep {
    identifier = "B500"
    name = "Validation"
    description = "A formal process of verifying that the project meets the criteria or conditions set out in the project protocol and is eligible to receive certification."
}

val EligibilityRequirements = buildList {
    add(LOI)
    add(SurveyOfEligibility)
    add(IdentificationOfProject)
    add(FirstDocumentation)
    add(FirstEstimate)
    add(ThirdPartyAudit)
    add(Validation)
}

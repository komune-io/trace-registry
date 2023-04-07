package city.smartb.registry.program.cccev.requirement

import cccev.dsl.model.builder.InformationConceptBuilder
import cccev.dsl.model.builder.InformationConceptListBuilder
import  cccev.dsl.model.builder.InformationRequirementBuilder
import city.smartb.registry.program.cccev.ver.Activities
import city.smartb.registry.program.cccev.ver.Methodology
import city.smartb.registry.program.cccev.ver.ReferenceFramework
import city.smartb.registry.program.f2.activity.domain.model.RequirementType

fun InformationConceptListBuilder.verraVcsProtocolStep(init: InformationConceptBuilder.() -> Unit) =
    +InformationConceptBuilder().apply {
        type = RequirementType.Step
    }.apply(init).build()

fun verraVcsProtocolPreparationActivity(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +Activities.ProtocolPreparation
            +Methodology.VM0011
        }
        isDerivedFrom {
            +ReferenceFramework.Verra
        }
        type = RequirementType.Activity
    }.apply(init).build()

fun verraVcsProtocolValidationActivity(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +Activities.ProtocolValidation
            +Methodology.VM0011
        }
        isDerivedFrom {
            +ReferenceFramework.Verra
        }
        type = RequirementType.Activity
    }.apply(init).build()

fun verraVcsProtocolCertificationActivity(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +Activities.Certification
            +Methodology.VM0011
        }
        isDerivedFrom {
            +ReferenceFramework.Verra
        }
        type = RequirementType.Activity
    }.apply(init).build()


val DraftPDDVCSCCB = verraVcsProtocolPreparationActivity {
    identifier = "H10"
    name = "Draft PDD VCS+CCB"
    description = "This activity involves the preparation and revision of the Project Design Document (PDD) for the VCS+CCB certification process."
    hasConcept {
        verraVcsProtocolStep {
            identifier = "H100"
            name = "Rédaction PDD"
            description = "Draft the initial version of the PDD."
        }
        verraVcsProtocolStep {
            identifier = "H101"
            name = "Révision PDD"
            description = "Review and revise the PDD to address any issues or feedback."
        }
        verraVcsProtocolStep {
            identifier = "H102"
            name = "Intégrer possibles commentaires"
            description = "Incorporate any comments or feedback provided by the VCS+CCB auditors during the certification process."
        }
        verraVcsProtocolStep {
            identifier = "H103"
            name = "Charger PDD au pipeline"
            description = "Upload the PDD to the certification pipeline."
        }
    }
}

val EntreeApipelineVerra = verraVcsProtocolPreparationActivity {
    identifier = "E20"
    name = "Entrée au pipeline Verra"
    description = "This activity involves submitting the project for validation and verification by the Verra registry."
    hasConcept {
        verraVcsProtocolStep {
            identifier = "E200"
            name = "Réviser draft PDD"
            description = "Review and revise the draft project design document (PDD) to ensure compliance with Verra requirements."
        }
        verraVcsProtocolStep {
            identifier = "E201"
            name = "Créer compte Verra"
            description = "Create an account with the Verra registry to submit the project for validation and verification."
        }
        verraVcsProtocolStep {
            identifier = "E202"
            name = "Charger PDD"
            description = "Upload the revised project design document to the Verra registry for review and validation."
        }
        verraVcsProtocolStep {
            identifier = "E203"
            name = "Intégrer possibles commentaires"
            description = "Incorporate any comments or feedback provided by the Verra registry during the validation and verification process."
        }
    }
}




val ValidationPDDVCSCCB = verraVcsProtocolValidationActivity {
    identifier = "H30"
    name = "Validation PDD VCS+CCB"
    description = "This activity involves the validation process of the Project Design Document (PDD) under the Verified Carbon Standard (VCS) and the Climate, Community and Biodiversity (CCB) Standards."
    hasConcept {
        verraVcsProtocolStep {
            identifier = "H300"
            name = "Entretien/Offre autre VVB"
            description = "Conduct interviews or solicit other Validation/Verification Bodies (VVBs) for their input or offers."
        }
        verraVcsProtocolStep {
            identifier = "H301"
            name = "Sélection"
            description = "Select a Validation/Verification Body (VVB) based on their experience and expertise."
        }
        verraVcsProtocolStep {
            identifier = "H302"
            name = "Formalisation d'accord de validation/vérification"
            description = "Formalize an agreement with the selected Validation/Verification Body (VVB) for the validation process."
        }
        verraVcsProtocolStep {
            identifier = "H303"
            name = "Mission"
            description = "The Validation/Verification Body (VVB) conducts a site visit and review of the Project Design Document (PDD)."
        }
        verraVcsProtocolStep {
            identifier = "H304"
            name = "Validation"
            description = "The Validation/Verification Body (VVB) evaluates the project against the VCS and CCB Standards and validates the Project Design Document (PDD)."
        }
        verraVcsProtocolStep {
            identifier = "H305"
            name = "Updates/Marge"
            description = "Make updates to the Project Design Document (PDD) based on the Validation/Verification Body's (VVB's) recommendations, and provide a margin of error for the project's expected emissions reductions."
        }
    }
}


val VerraVcsProtocolCertificationRequirements = verraVcsProtocolCertificationActivity {
    identifier = "H40"
    name = "Verification PDD VCS+CCB"
    description = "This activity involves verifying the emissions reductions claimed in the PDD according to the VCS+CCB standards."
    hasConcept {
        verraVcsProtocolStep {
            identifier = "H400"
            name = "Choice of provider"
            description = "Select a third-party verification provider to conduct the verification."
        }
        verraVcsProtocolStep {
            identifier = "H401"
            name = "Monitoring"
            description = "Monitor the project's emissions and ensure that they are being accurately measured and reported."
        }
        verraVcsProtocolStep {
            identifier = "H402"
            name = "Verification"
            description = "Conduct an independent third-party verification of the emissions reductions claimed in the PDD."
        }
        verraVcsProtocolStep {
            identifier = "H403"
            name = "Certificate"
            description = "Issue a certificate confirming the verified emissions reductions."
        }
    }
}

val VerraVcsRequirement = buildList {
    add(DraftPDDVCSCCB)
    add(EntreeApipelineVerra)
    add(ValidationPDDVCSCCB)
    add(VerraVcsProtocolCertificationRequirements)
}

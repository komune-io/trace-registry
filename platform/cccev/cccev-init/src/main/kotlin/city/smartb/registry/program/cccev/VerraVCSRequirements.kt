package city.smartb.registry.program.cccev

import  cccev.dsl.model.builder.InformationRequirementBuilder
import cccev.dsl.model.builder.RequirementsLinkedBuilder
import cccev.dsl.model.informationRequirement
import city.smartb.registry.program.cccev.ver.Activities
import city.smartb.registry.program.cccev.ver.Methodology
import city.smartb.registry.program.cccev.ver.Type
import city.smartb.registry.program.cccev.ver.ReferenceFramework

fun RequirementsLinkedBuilder.verraVcsProtocolPreparation(init: InformationRequirementBuilder.() -> Unit) =
    +InformationRequirementBuilder().apply {
        isRequirementOf {
            +Activities.ProtocolPreparation
            +Methodology.VM0011
        }
        isDerivedFrom {
            +ReferenceFramework.Verra
        }
        type = Type.Steps
    }.apply(init).build()

fun RequirementsLinkedBuilder.verraVcsProtocolValidation(init: InformationRequirementBuilder.() -> Unit) =
    +InformationRequirementBuilder().apply {
        isRequirementOf {
            +Activities.ProtocolValidation
            +Methodology.VM0011
        }
        isDerivedFrom {
            +ReferenceFramework.Verra
        }

        type = Type.Steps
    }.apply(init).build()

fun RequirementsLinkedBuilder.verraVcsProtocolCertification(init: InformationRequirementBuilder.() -> Unit) =
    +InformationRequirementBuilder().apply {
        isRequirementOf {
            +Activities.Certification
            +Methodology.VM0011
        }
        isDerivedFrom {
            +ReferenceFramework.Verra
        }
        type = Type.Steps
    }.apply(init).build()

val DraftPDDVCSCCB = informationRequirement {
    identifier = "DPVCS+CCB"
    name = "Draft PDD VCS+CCB"
    description = "This activity involves the preparation and revision of the Project Design Document (PDD) for the VCS+CCB certification process."
    hasRequirement {
        verraVcsProtocolPreparation {
            identifier = "H100"
            name = "Rédaction PDD"
            description = "Draft the initial version of the PDD."
        }
        verraVcsProtocolPreparation {
            identifier = "H101"
            name = "Révision PDD"
            description = "Review and revise the PDD to address any issues or feedback."
        }
        verraVcsProtocolPreparation {
            identifier = "H102"
            name = "Intégrer possibles commentaires"
            description = "Incorporate any comments or feedback provided by the VCS+CCB auditors during the certification process."
        }
        verraVcsProtocolPreparation {
            identifier = "H103"
            name = "Charger PDD au pipeline"
            description = "Upload the PDD to the certification pipeline."
        }
    }
}

val EntreeApipelineVerra = informationRequirement {
    identifier = "EntréeAuPipelineVerra"
    name = "Entrée au pipeline Verra"
    description = "This activity involves submitting the project for validation and verification by the Verra registry."
    hasRequirement {
        verraVcsProtocolPreparation {
            identifier = "E200"
            name = "Réviser draft PDD"
            description = "Review and revise the draft project design document (PDD) to ensure compliance with Verra requirements."
        }
        verraVcsProtocolPreparation {
            identifier = "E201"
            name = "Créer compte Verra"
            description = "Create an account with the Verra registry to submit the project for validation and verification."
        }
        verraVcsProtocolPreparation {
            identifier = "E202"
            name = "Charger PDD"
            description = "Upload the revised project design document to the Verra registry for review and validation."
        }
        verraVcsProtocolPreparation {
            identifier = "E203"
            name = "Intégrer possibles commentaires"
            description = "Incorporate any comments or feedback provided by the Verra registry during the validation and verification process."
        }
    }
}




val ValidationPDDVCSCCB = informationRequirement {
    identifier = "ValidationPDDVCS_CCB"
    name = "Validation PDD VCS+CCB"
    description = "This activity involves the validation process of the Project Design Document (PDD) under the Verified Carbon Standard (VCS) and the Climate, Community and Biodiversity (CCB) Standards."
    hasRequirement {
        verraVcsProtocolValidation {
            identifier = "H300"
            name = "Entretien/Offre autre VVB"
            description = "Conduct interviews or solicit other Validation/Verification Bodies (VVBs) for their input or offers."
        }
        verraVcsProtocolValidation {
            identifier = "H301"
            name = "Sélection"
            description = "Select a Validation/Verification Body (VVB) based on their experience and expertise."
        }
        verraVcsProtocolValidation {
            identifier = "H302"
            name = "Formalisation d'accord de validation/vérification"
            description = "Formalize an agreement with the selected Validation/Verification Body (VVB) for the validation process."
        }
        verraVcsProtocolValidation {
            identifier = "H303"
            name = "Mission"
            description = "The Validation/Verification Body (VVB) conducts a site visit and review of the Project Design Document (PDD)."
        }
        verraVcsProtocolValidation {
            identifier = "H304"
            name = "Validation"
            description = "The Validation/Verification Body (VVB) evaluates the project against the VCS and CCB Standards and validates the Project Design Document (PDD)."
        }
        verraVcsProtocolValidation {
            identifier = "H305"
            name = "Updates/Marge"
            description = "Make updates to the Project Design Document (PDD) based on the Validation/Verification Body's (VVB's) recommendations, and provide a margin of error for the project's expected emissions reductions."
        }
    }
}


val VerraVcsProtocolCertificationRequirements = informationRequirement {
    identifier = "VerificationPDDVCS+CCB"
    name = "Verification PDD VCS+CCB"
    description = "This activity involves verifying the emissions reductions claimed in the PDD according to the VCS+CCB standards."
    hasRequirement {
        verraVcsProtocolCertification {
            identifier = "ChoiceOfProvider"
            name = "Choice of provider"
            description = "Select a third-party verification provider to conduct the verification."
        }
        verraVcsProtocolCertification {
            identifier = "Monitoring"
            name = "Monitoring"
            description = "Monitor the project's emissions and ensure that they are being accurately measured and reported."
        }
        verraVcsProtocolCertification {
            identifier = "Verification"
            name = "Verification"
            description = "Conduct an independent third-party verification of the emissions reductions claimed in the PDD."
        }
        verraVcsProtocolCertification {
            identifier = "Certificate"
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

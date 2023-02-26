package city.smartb.registry.program.cccev

import  cccev.dsl.model.builder.InformationRequirementBuilder

fun verraVcsProtocolPreparation(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +ProtocolPreparation
            +REDDPlus
        }
    }.apply(init).build()

fun verraVcsProtocolValidation(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +ProtocolValidation
            +REDDPlus
        }
    }.apply(init).build()

fun verraVcsProtocolCertification(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +ProtocolCertification
            +REDDPlus
        }
    }.apply(init).build()

val DraftPDDVCSCCB = listOf(
    verraVcsProtocolPreparation {
        identifier = "H100"
        name = "Rédaction PDD"
    },
    verraVcsProtocolPreparation {
        identifier = "H101"
        name = "Révision PDD"
    },
    verraVcsProtocolPreparation {
        identifier = "H102"
        name = "Intégrer possibles commentaires"
    },
    verraVcsProtocolPreparation {
        identifier = "H103"
        name = "Charger PDD au pipeline"
    },
)
val EntreeApipelineVerra = listOf(
    verraVcsProtocolPreparation {
        identifier = "E200"
        name = "Réviser draft PDD"
    },
    verraVcsProtocolPreparation {
        identifier = "E201"
        name = "Créer compte Verra"
    },
    verraVcsProtocolPreparation {
        identifier = "E202"
        name = "Charger PDD"
    },
    verraVcsProtocolPreparation {
        identifier = "E203"
        name = "Intégrer possibles commentaires"
    }
)








val ValidationPDDVCSCCB = listOf(
    verraVcsProtocolValidation {
        identifier = "H300"
        name = "Entretien/Offre autre VVB"
    },
    verraVcsProtocolValidation {
        identifier = "H301"
        name = "Sélection"
    },
    verraVcsProtocolValidation {
        identifier = "H302"
        name = "Formalisation d'accord de validation/vérification"
    },
    verraVcsProtocolValidation {
        identifier = "H303"
        name = "Mission"
    },
    verraVcsProtocolValidation {
        identifier = "H304"
        name = "Validation"
    },
    verraVcsProtocolValidation {
        identifier = "H305"
        name = "Updates/Marge"
    }
)

val VerraVcsProtocolCertificationRequirements = listOf(
    verraVcsProtocolCertification {
        identifier = "H400"
        name = "Choix du prestataire"
    },
    verraVcsProtocolCertification {
        identifier = "H401"
        name = "Monitoring"
    },
    verraVcsProtocolCertification {
        identifier = "H402"
        name = "Vérification"
    },
    verraVcsProtocolCertification {
        identifier = "H403"
        name = "Certificate"
    },
)


val VerraVcsProtocol = buildList {
    addAll(DraftPDDVCSCCB)
    addAll(EntreeApipelineVerra)
    addAll(ValidationPDDVCSCCB)
    addAll(VerraVcsProtocolCertificationRequirements)
}

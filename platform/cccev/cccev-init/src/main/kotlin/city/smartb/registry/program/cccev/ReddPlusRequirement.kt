package city.smartb.registry.program.cccev

import  cccev.dsl.model.builder.InformationRequirementBuilder

fun reddPlusProtocolPreparation(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +ProtocolPreparation
            +REDDPlus
        }
    }.apply(init).build()

fun reddPlusProtocolValidation(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +ProtocolValidation
            +REDDPlus
        }
    }.apply(init).build()

fun reddPlusProtocolCertification(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +ProtocolCertification
            +REDDPlus
        }
    }.apply(init).build()


val RedactionDuPIN = listOf(
    reddPlusProtocolPreparation {
        identifier = "E100"
        name = "Document PA/SE"
    },
    reddPlusProtocolPreparation {
        identifier = "E101"
        name = "Cartographie"
    },
    reddPlusProtocolPreparation {
        identifier = "E102"
        name = "Concertation locale"
    },
    reddPlusProtocolPreparation {
        identifier = "E103"
        name = "Légalité"
    },
    reddPlusProtocolPreparation {
        identifier = "E104"
        name = "Inventaires forestiers"
    },
    reddPlusProtocolPreparation {
        identifier = "E105"
        name = "Coefficient/indicateurs/paramètres"
    },
    reddPlusProtocolPreparation {
        identifier = "E106"
        name = "Dégradation"
    },
    reddPlusProtocolPreparation {
        identifier = "E107"
        name = "Régénération"
    },
    reddPlusProtocolPreparation {
        identifier = "E108"
        name = "Activité d'exploitation"
    },
    reddPlusProtocolPreparation {
        identifier = "E109"
        name = "Exploitation non-planifiée"
    },
    reddPlusProtocolPreparation {
        identifier = "E110"
        name = "Régénération anihilée sous baseline"
    },
    reddPlusProtocolPreparation {
        identifier = "E111"
        name = "Activités de projet"
    },
    reddPlusProtocolPreparation {
        identifier = "E112"
        name = "Exploitation non-planifiée"
    },
)

val DepotDuPINAuMinistere = listOf(
    //Validation
    reddPlusProtocolValidation {
        identifier = "E200"
        name = "Dépot du PIN"
    },
    reddPlusProtocolValidation {
        identifier = "E200"
        name = "Montrer preuve de paiement"
    },
    reddPlusProtocolValidation {
        identifier = "E200"
        name = "Accusé de réception du PIN"
    },
    reddPlusProtocolValidation {
        identifier = "E200"
        name = "Lettre d’approbation"
    },
    reddPlusProtocolCertification {
        identifier = "E303"
        name = "Montrer preuve de paiement"
    }
)


val ReddPlusProtocol = buildList {
    addAll(RedactionDuPIN)
    addAll(DepotDuPINAuMinistere)
}

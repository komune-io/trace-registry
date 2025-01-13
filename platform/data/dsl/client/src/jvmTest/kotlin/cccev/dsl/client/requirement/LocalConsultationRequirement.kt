package cccev.dsl.client.requirement

import cccev.dsl.model.builder.InformationRequirementBuilder

fun localConsultationProtocolPreparation(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +ProtocolPreparation
            +LocalConsultation
            informationRequirement {
                identifier = "P"
                name = "Protocol"
                hasRequirement {
                    informationRequirement {
                        identifier = "PoP"
                        name = "ProtocolOfTheProtocol"
                        hasRequirement {
                            informationRequirement {
                                identifier = "PoPinP"
                                name = "ProtocolOfTheProtocolInTheProtocol"
                            }
                            informationRequirement {
                                identifier = "PoPinP2"
                                name = "ProtocolOfTheProtocolInTheProtocol2"
                                hasQualifiedRelation("IS_RELATED_TO") {
                                    informationRequirement { identifier = "PoPinP" }
                                }
                            }
                        }
                    }
                }
            }
        }
    }.apply(init).build()

val LocalConsultationProtocolPreparationRequirements = listOf(
    localConsultationProtocolPreparation {
        identifier = "D100"
        name = "TermesDeReference"
    },
    localConsultationProtocolPreparation {
        identifier = "D101"
        name = "Termes de référence (TDR)"
        hasQualifiedRelation("IS_RELATED_TO") {
            +localConsultationProtocolPreparation { identifier = "D100" }
        }
        hasRequirement {
            +localConsultationProtocolPreparation {
                identifier = "D101-Pierre"
                name = "TDRRRrrrr!!!"
                description = "Il va faire tout noir !"
            }
        }
    },
    localConsultationProtocolPreparation {
        identifier = "D102"
        name = "Présentation de la composante des communautés locales"
    },
    localConsultationProtocolPreparation {
        identifier = "D103"
        name = "PV des délégués communautaires"
    },
    localConsultationProtocolPreparation {
        identifier = "D104"
        name = "Liste des projets communautaires de la concession"
    },
    localConsultationProtocolPreparation {
        identifier = "D105"
        name = "Budget du Fonds de Développement Local (FDL) des communautés de la concession forestière"
    },
    localConsultationProtocolPreparation {
        identifier = "D106"
        name = "PV de négociation d'avenant"
    },
    localConsultationProtocolPreparation {
        identifier = "D107"
        name = "Guide pour l'établissement des modalités de gestion du FDL"
    },
    localConsultationProtocolPreparation {
        identifier = "D108"
        name = "PV d'installation des membres du CLG"
    },
    localConsultationProtocolPreparation {
        identifier = "D109"
        name = "Modèle de reglement d'ordre intérieur du CLG"
    },
    localConsultationProtocolPreparation {
        identifier = "D110"
        name = "PV de collaboration (par groupement ethnique)"
    },
    localConsultationProtocolPreparation {
        identifier = "D111"
        name = "Coordonnées de localisation du périmètre et de la superficie de l'investissement REDD+ (Shapefile)"
    },
    localConsultationProtocolPreparation {
        identifier = "D112"
        name = "CLIP"
        isRequirementOf {
            informationRequirement { identifier = "D111" }
        }
    }
)

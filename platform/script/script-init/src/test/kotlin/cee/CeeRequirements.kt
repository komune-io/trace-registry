package cee

import cccev.dsl.model.Criterion
import cccev.dsl.model.EvidenceTypeBase
import cccev.dsl.model.EvidenceTypeListBase
import cccev.dsl.model.InformationRequirement
import cccev.dsl.model.PartialRequirement
import cccev.dsl.model.Requirement

class SecteurApplication(
    vararg requirements: Requirement,
): Criterion(
    name = "Secteur d’application",
    description = "Le secteur d'application de la fiche.",
    type = FicheCode.SecteurActivite,
    identifier = "secteurApplication",
    hasRequirement = requirements.asList()
)

class Denomination(
    description: String,
    vararg requirements: Requirement
): Criterion(
    name = "Dénomination",
    description = description,
    type = FicheCode.SecteurActivite,
    identifier = "denomination",
    hasRequirement = requirements.asList()
)

class ConditionsDelivranceCertificats(
    vararg requirements: Requirement,
): Criterion(
    name = "Conditions pour la délivrance de certificats",
    description = "La liste des critères à valider",
    type = FicheCode.ConditionsDelivranceCertificats,
    identifier = "conditionsDelivranceCertificats",
    hasRequirement = requirements.asList()
)

class DureeVieConventionnelle(
    vararg requirements: Requirement,
): PartialRequirement(
    name = "Durée de vie conventionnelle",
    description = """
        Le montant de certificats d'économies d'énergie, à attribuer suite à la réalisation d'une opération standardisée d'économies 
        d'énergie, figure au point 5 des fiches. Ce montant dépend de la durée de vie conventionnelle du produit en question mentionnée
        quant à elle au point 4. Ainsi, le produit est supposé être détenu par le bénéficiaire durant toute sa durée de vie conventionnelle 
        Par conséquent, les CEE ne peuvent être délivrés à un même bénéficiaire qui renouvelle une opération d'économies d'énergie 
        ayant déjà fait l'objet d'une délivrance de CEE dans les mêmes conditions, durant la durée de vie conventionnelle de l'opération.
    """.trimIndent(),
    type = FicheCode.DureeVieConventionnelle,
    identifier = "dureeVieConventionnelle",
    minRequirementsToMeet = 1,
    hasRequirement = requirements.asList().plus(
        AucunPrecedentDossierPourMemeOperationEtConditions
    ),
    hasEvidenceTypeList = listOf(
        EvidenceTypeListBase(
            description = "Précédent dossier CEE pour la même opération et dans les mêmes conditions",
            identifier = "precedentDossierCee",
            name = "Précédent dossier CEE",
            specifiesEvidenceType = listOf(
                EvidenceTypeBase(
                    evidenceTypeClassification = DossierCee,
                    identifier = "dossierCee",
                    name = "Précédent dossier CEE"
                )
            )
        )
    )
)

object AucunPrecedentDossierPourMemeOperationEtConditions: InformationRequirement(
    description = "Le bénériciaire n'a jamais bénéficié de crédits CEE pour la même opération et dans les même conditions",
    identifier = "aucunPrecedentDossierPourMemeOperationEtConditions",
    name = "Aucun précédent dossier pour meme operation et conditions",
    type = FicheCode.DureeVieConventionnelle,
    hasEvidenceTypeList = listOf(
        EvidenceTypeListBase(
            description = "Déclare sur l'honneur ne jamais avoir bénéficié de crédits CEE avec la même fiche et dans les mêmes conditions",
            identifier = "declarationHonneurDureeVieConventionnelle",
            name = "Declaration honneur durée vie conventionnelle",
            specifiesEvidenceType = listOf(
                EvidenceTypeBase(
                    evidenceTypeClassification = DeclarationHonneur,
                    identifier = "declarationHonneurDureeVieConventionnelle",
                    name = "Déclaration honneur durée vie conventionnelle"
                )
            )
        )
    )
)

class MontantCertificatsCumac(
    vararg requirements: Requirement
): Criterion(
    name = "Montant de certificats en kWh cumac",
    description = "Montant en kWh/W en fonction du nombre de types dispositif de gestion de l'éclairage",
    type = FicheCode.MontantCertificatsCumac,
    identifier = "montantCertificatsCumac",
    hasRequirement = requirements.asList()
)

object EstProfessionnelInformationRequirement: InformationRequirement(
    description = "La mise en place est réalisée par un professionnel.",
    identifier = "estProfessionnel",
    name = "CertificatProfessionel",
    type = FicheCode.ConditionsDelivranceCertificats,
    hasEvidenceTypeList = listOf(
        CertificatProfessionnel
    )
)

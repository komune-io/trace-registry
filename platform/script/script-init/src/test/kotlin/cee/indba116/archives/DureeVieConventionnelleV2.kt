package cee.indba116.archives

import cccev.dsl.cee.indba116.NombreTypesDispositifGestionEclairage
import cccev.dsl.model.Constraint
import cccev.dsl.model.EvidenceTypeBase
import cccev.dsl.model.EvidenceTypeListBase
import cccev.dsl.model.InformationRequirement
import cccev.dsl.model.PartialRequirement
import cccev.dsl.model.Requirement
import cee.DateTravaux
import cee.DeclarationHonneur
import cee.DossierCee
import cee.FicheCode

object DureeVieConventionnelleV2 {

    val value = DureeVieConventionnelle(
        DureeVieConventionnelleSansDispositifGestionEclairage,
        DureeVieConventionnelleAvec1DispositifGestionEclairage,
        DureeVieConventionnelleAvec2DispositifsGestionEclairage
    )

    class DureeVieConventionnelle(
        vararg requirements: Requirement,
    ): PartialRequirement(
        name = "Durée de vie conventionnelle",
        description = """
            Le montant de certificats d'économies d'énergie, à attribuer suite à la réalisation d'une opération standardisée d'économies 
            d'énergie, figure au point 5 des fiches. Ce montant dépend de la durée de vie conventionnelle du produit en question mentionnée
            quant à elle au point 4. 
            Ainsi, le produit est supposé être détenu par le bénéficiaire durant toute sa durée de vie conventionnelle. 
            Par conséquent, les CEE ne peuvent être délivrés à un même bénéficiaire qui renouvelle une opération d'économies d'énergie 
            ayant déjà fait l'objet d'une délivrance de CEE dans les mêmes conditions, 
            durant la durée de vie conventionnelle de l'opération.
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
                        identifier = "dossierCee",
                        name = "Précédent dossier CEE",
                        evidenceTypeClassification = DossierCee
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
                description = "Déclare sur l'honneur ne jamais avoir bénéficié de crédits CEE " +
                        "avec la même fiche et dans les mêmes conditions",
                identifier = "declarationHonneurDureeVieConventionnelle",
                name = "Declaration honneur durée vie conventionnelle",
                specifiesEvidenceType = listOf(
                    EvidenceTypeBase(
                        identifier = "declarationHonneurDureeVieConventionnelle",
                        name = "Declaration honneur durée vie conventionnelle",
                        evidenceTypeClassification = DeclarationHonneur
                    )
                )
            )
        )
    )

    object DureeVieConventionnelleSansDispositifGestionEclairage: DureeVieConventionnelleConstraint(
        name = "13 ans sans dispositif de gestion de l’éclairage",
        nombreDispositifGestionEclairage = 0,
        yearsCount = 13
    )

    object DureeVieConventionnelleAvec1DispositifGestionEclairage: DureeVieConventionnelleConstraint(
        name = "14 ans avec 1 dispositif de gestion de l’éclairage",
        nombreDispositifGestionEclairage = 1,
        yearsCount = 14
    )

    object DureeVieConventionnelleAvec2DispositifsGestionEclairage: DureeVieConventionnelleConstraint(
        name = "16 ans avec 2 dispositifs de gestion de l’éclairage",
        nombreDispositifGestionEclairage = 2,
        yearsCount = 16
    )


    open class DureeVieConventionnelleConstraint(nombreDispositifGestionEclairage: Int, name: String, yearsCount: Int): Constraint(
        description = "${NombreTypesDispositifGestionEclairage.identifier} == $nombreDispositifGestionEclairage",
        identifier = "${nombreDispositifGestionEclairage}TypesDispositifGestionEclairage",
        name = name,
        type = FicheCode.DureeVieConventionnelle,
        hasRequirement = listOf(
            DatePrecedentsTravaux(yearsCount)
        ),
        hasConcept = listOf(
            NombreTypesDispositifGestionEclairage
        )
    )


    open class DatePrecedentsTravaux(yearsCount: Int): Constraint(
        description = "now - ${DateTravaux.identifier} >= $yearsCount ans",
        identifier = "${yearsCount}AnsDepuisPrecedentsTravaux",
        name = "$yearsCount ans depuis les précédents travaux",
        type = FicheCode.DureeVieConventionnelle,
        hasConcept = listOf(
            DateTravaux
        )
    )
}

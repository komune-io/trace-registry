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

object DureeVieConventionnelleV1 {

    val value = DureeVieConventionnelle(
        DureeVieConventionnelleConditionnelle
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
            AucunPrecedentDossierPourMemeOperationEtConditions,
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
                description = "Déclare sur l'honneur ne jamais avoir bénéficié de crédits CEE" +
                        " avec la même fiche et dans les mêmes conditions",
                identifier = "declarationHonneurDureeVieConventionnelle",
                name = "Declaration honneur durée vie conventionnelle",
                specifiesEvidenceType = listOf(
                    EvidenceTypeBase(
                        identifier = "declarationHonneurDureeVieConventionnelle",
                        name = "Déclaration honneur durée vie conventionnelle",
                        evidenceTypeClassification = DeclarationHonneur
                    )
                )
            )
        )
    )

    object DureeVieConventionnelleConditionnelle: PartialRequirement(
        description = "Durée de vie conventionnelle en fonction du dispositif de gestion de l'éclairage",
        identifier = "dureeVieConventionnelleConditionnelle",
        name = """
            - 13 ans sans dispositif de gestion de l’éclairage ;
            - 14 ans avec un dispositif de gestion de l’éclairage (détection de présence ou variation de lumière) ;
            - 16 ans avec deux dispositifs de gestion de l’éclairage (détection de présence et variation de lumière). 
        """.trimIndent(),
        type = FicheCode.ConditionsDelivranceCertificats,
        hasRequirement = listOf(
            DureeVieConventionnelleSansDispositifGestionEclairage,
            DureeVieConventionnelleAvec1DispositifGestionEclairage,
            DureeVieConventionnelleAvec2DispositifsGestionEclairage
        ),
        minRequirementsToMeet = 1
    )

    object DureeVieConventionnelleSansDispositifGestionEclairage: Constraint(
        description = "13 ans si aucun dispositif de gestion d'éclairage",
        identifier = "dureeVieConventionnelleSansDispositifGestionEclairage",
        name = "13 ans sans dispositif de gestion de l’éclairage",
        type = FicheCode.ConditionsDelivranceCertificats,
        hasRequirement = listOf(
            AucunDispositifGestionEclairage,
            DatePrecedentsTravaux(yearsCount = 13)
        ),
        hasConcept = listOf(
            DateTravaux
        )
    )

    object DureeVieConventionnelleAvec1DispositifGestionEclairage: Constraint(
        description = "14 ans avec un dispositif de gestion de l’éclairage (détection de présence ou variation de lumière)",
        identifier = "dureeVieConventionnelleAvec1DispositifGestionEclairage",
        name = "14 ans avec 1 dispositif de gestion de l’éclairage",
        type = FicheCode.ConditionsDelivranceCertificats,
        hasRequirement = listOf(
            UnDispositifGestionEclairage,
            DatePrecedentsTravaux(yearsCount = 14)
        ),
        hasConcept = listOf(
            DateTravaux
        )
    )

    object DureeVieConventionnelleAvec2DispositifsGestionEclairage: Constraint(
        description = "16 ans avec deux dispositifs de gestion de l’éclairage (détection de présence et variation de lumière)",
        identifier = "dureeVieConventionnelleAvec2DispositifsGestionEclairage",
        name = "16 ans avec 2 dispositifs de gestion de l’éclairage",
        type = FicheCode.ConditionsDelivranceCertificats,
        hasRequirement = listOf(
            DeuxDispositifsGestionEclairage,
            DatePrecedentsTravaux(yearsCount = 16)
        ),
        hasConcept = listOf(
            DateTravaux
        )
    )

    open class NombreTypesDispositifGestionEclairageConstraint(count: Int, name: String): Constraint(
        description = "${NombreTypesDispositifGestionEclairage.identifier} == $count ",
        identifier = "${count}TypesDispositifGestionEclairage",
        name = name,
        type = FicheCode.DureeVieConventionnelle,
        hasConcept = listOf(
            NombreTypesDispositifGestionEclairage
        )
    )

    object AucunDispositifGestionEclairage: NombreTypesDispositifGestionEclairageConstraint(
        count = 0,
        name = "Aucun dispositif de gestion d'éclairage"
    )

    object UnDispositifGestionEclairage: NombreTypesDispositifGestionEclairageConstraint(
        count = 1,
        name = "Détection de présence OU système de détection tenant compte des apports de lumière du jour"
    )

    object DeuxDispositifsGestionEclairage: NombreTypesDispositifGestionEclairageConstraint(
        count = 2,
        name = "Détection de présence ET système de détection tenant compte des apports de lumière du jour "
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

package cee.baten101

import cccev.dsl.model.Constraint
import cccev.dsl.model.Criterion
import cccev.dsl.model.InformationRequirement
import cee.DateDevis
import cee.DatePrecedentsTravaux
import cee.DateTravaux
import cee.FicheCode
import cee.indba116.Cumac
import cee.indba116.DureeVieConventionnelleLuminaire
import java.util.UUID

object ResistanceThermiqueMinimale: Constraint(
    description = "${ResistanceThermique.identifier} >= 6",
    identifier = "resistanceThermiqueMinimale",
    name = """
        La résistance thermique R de l'isolation installée est supérieure ou égale à 6 m².K/W 
        en plancher de comble perdu ou en rampant de toiture.
        La résistance thermique est évaluée selon la norme NF EN 12664, la norme NF EN 12667 ou la norme NF EN 12939 
        pour les isolants non réfléchissants et selon la norme NF EN 16012+A1 pour les isolants réfléchissants.
    """.trimIndent(),
    type = FicheCode.ConditionsDelivranceCertificats.toString(),
    hasConcept = listOf(
        ResistanceThermique
    ),
    enablingCondition = null,
    enablingConditionDependencies = emptyList(),
    required = true,
    validatingCondition = null,
    validatingConditionDependencies = emptyList(),
    order = null,
    properties = null,
    // TODO Clean That
    isDerivedFrom = emptyList(),
    isRequirementOf = emptyList(),
    evidenceValidatingCondition = null,
    id = UUID.randomUUID().toString()
)

object BesoinPareVapeur: InformationRequirement(
    description = """
        L'isolation thermique réalisée a-t-elle nécessité la mise en place d'un pare-vapeur ou tout autre dispositif 
        permettant d'atteindre un résuiltat équivalent
    """.trimIndent(),
    identifier = "resistanceThermiqueMinimale",
    name = """
        Un pare-vapeur ou tout autre dispositif permettant d'atteindre un résultat équivalent est mis en place, lorsqu'il est nécessaire 
        de protéger les matériaux d'isolation thermique contre les transferts d'humidité pour garantir la performance de l'ouvrage.
    """.trimIndent(),
    type = FicheCode.ConditionsDelivranceCertificats.toString(),
    enablingCondition = null,
    enablingConditionDependencies = emptyList(),
    required = true,
    validatingCondition = null,
    validatingConditionDependencies = emptyList(),
    order = null,
    properties = null,
    // TODO Clean That
    isDerivedFrom = emptyList(),
    isRequirementOf = emptyList(),
    evidenceValidatingCondition = null,
    hasConcept = emptyList(),
    id = UUID.randomUUID().toString()
)

object DateTravauxRegles: Criterion(
    description = "Contraintes sur la date des travaux",
    identifier = "dateTravauxRegles",
    name = """
        Un délai minimal de sept jours francs est respecté entre la date d'acceptation du devis 
        et la date de début des travaux (pose de l'isolant).
        Une opération ne peut être engagée moins de douze mois suivant 
        l'engagement d'une opération portant sur un même bâtiment et un même bénéficiaire.
    """.trimIndent(),
    type = FicheCode.ConditionsDelivranceCertificats.toString(),
    hasRequirement = listOf(
        DateDevisContrainte,
        DatePrecedentsTravauxMemeBatimentContrainte
    ),
    enablingCondition = null,
    enablingConditionDependencies = emptyList(),
    required = true,
    validatingCondition = null,
    validatingConditionDependencies = emptyList(),
    order = null,
    properties = null,
    // TODO Clean That
    isDerivedFrom = emptyList(),
    isRequirementOf = emptyList(),
    evidenceValidatingCondition = null,
    hasConcept = emptyList(),
    id = UUID.randomUUID().toString()
)

object DateDevisContrainte: Constraint(
    description = "${DateTravaux.identifier} - ${DateDevis.identifier} >= 7 days",
    identifier = "dateDevisContrainte",
    name = """
        Un délai minimal de sept jours francs est respecté entre la date d'acceptation du devis 
        et la date de début des travaux (pose de l'isolant).
    """.trimIndent(),
    type = FicheCode.ConditionsDelivranceCertificats.toString(),
    hasConcept = listOf(
        DateDevis,
        DateTravaux
    ),
    enablingCondition = null,
    enablingConditionDependencies = emptyList(),
    required = true,
    validatingCondition = null,
    validatingConditionDependencies = emptyList(),
    order = null,
    properties = null,
    // TODO Clean That
    isDerivedFrom = emptyList(),
    isRequirementOf = emptyList(),
    evidenceValidatingCondition = null,
    id = UUID.randomUUID().toString()
)

object DatePrecedentsTravauxMemeBatimentContrainte: Constraint(
    description = "${DateTravaux.identifier} - ${DatePrecedentsTravauxMemeBatiment.identifier} >= 7 days",
    identifier = "datePrecedentsTravauxMemeBatimentContrainte",
    name = """
        Une opération ne peut être engagée moins de douze mois suivant 
        l'engagement d'une opération portant sur un même bâtiment et un même bénéficiaire.
    """.trimIndent(),
    type = FicheCode.ConditionsDelivranceCertificats.toString(),
    hasConcept = listOf(
        DatePrecedentsTravauxMemeBatiment,
        DateTravaux
    ),
    enablingCondition = null,
    enablingConditionDependencies = emptyList(),
    required = true,
    validatingCondition = null,
    validatingConditionDependencies = emptyList(),
    order = null,
    properties = null,
    // TODO Clean That
    isDerivedFrom = emptyList(),
    isRequirementOf = emptyList(),
    evidenceValidatingCondition = null,
    id = UUID.randomUUID().toString()
)

object DatePrecedentsTravauxContrainte: Constraint(
    description = "${DateTravaux.identifier} - ${DatePrecedentsTravaux.identifier} >= 30 ans",
    identifier = "datePrecedentsTravauxContrainte",
    name = "Date des précédents travaux",
    type = FicheCode.DureeVieConventionnelle.toString(),
    hasConcept = listOf(
        DureeVieConventionnelleLuminaire,
        DateTravaux
    ),
    enablingCondition = null,
    enablingConditionDependencies = emptyList(),
    required = true,
    validatingCondition = null,
    validatingConditionDependencies = emptyList(),
    order = null,
    properties = null,
    // TODO Clean That
    isDerivedFrom = emptyList(),
    isRequirementOf = emptyList(),
    evidenceValidatingCondition = null,
    id = UUID.randomUUID().toString()
)

object CalculCertificatsCumac: Constraint(
    description = "${CumacPerM2Isolant.identifier} * ${FacteurCorrectif.identifier} *" +
            " ${SurfaceIsolant.identifier} = ${Cumac.identifier}",
    identifier = "calculCertificatsCumac",
    name = "Montant de certificats en kWh cumac",
    type = FicheCode.MontantCertificatsCumac.toString(),
    hasConcept = listOf(
        Cumac,
        CumacPerM2Isolant,
        FacteurCorrectif,
        SurfaceIsolant
    ),
    enablingCondition = null,
    enablingConditionDependencies = emptyList(),
    required = true,
    validatingCondition = null,
    validatingConditionDependencies = emptyList(),
    order = null,
    properties = null,
    // TODO Clean That
    isDerivedFrom = emptyList(),
    isRequirementOf = emptyList(),
    evidenceValidatingCondition = null,
    id = UUID.randomUUID().toString()
)

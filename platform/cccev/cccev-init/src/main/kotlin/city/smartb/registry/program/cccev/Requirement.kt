package city.smartb.registry.program.cccev

import cccev.core.dsl.CUnit
import cccev.core.dsl.CUnitType
import cccev.core.dsl.Code
import cccev.core.dsl.Constraint
import cccev.core.dsl.Criterion
import cccev.core.dsl.InformationConceptBase
import cccev.core.dsl.Requirement
import cccev.core.dsl.SquareMeter
import cccev.core.dsl.XSDDouble
import cccev.core.dsl.XSDInt
import cccev.core.dsl.XSDString
import cccev.core.dsl.criterion

/**
 * TODO Change
 */
object FicheCee: Code

object FicheCode {
    object SecteurActivite: Code
    object Denomination: Code
    object ConditionsDelivranceCertificats: Code
    object DureeVieConventionnelle: Code
    object MontantCertificatsCumac: Code
    object Annexe1: Code
}
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

class SecteurApplication(
    vararg requirements: Requirement,
): Criterion(
    name = "Secteur d’application",
    description = "Le secteur d'application de la fiche.",
    type = FicheCode.SecteurActivite,
    identifier = "secteurApplication",
    hasRequirement = requirements.asList()
)

object SecteurActivite: InformationConceptBase(
    identifier = "secteurActivite",
    name = "Secteur d'activité",
    unit = XSDString,
    type = FicheCode.SecteurActivite,
    description = "Secteur d'activité d'une entité"
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
object NombreTypesDispositifGestionEclairage: InformationConceptBase(
    identifier = "nombreTypesDispositifGestionEclairage",
    name = "Nombre Types Dispositif Gestion Eclairage",
    unit = XSDInt,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Nombre de types de dispositifs de gestion de l'éclairage"
)

object FacteurCorrectif: InformationConceptBase(
    identifier = "facteurCorrectif",
    name = "Facteur correctif",
    unit = XSDDouble,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Facteur correctif en fonction du secteur d'activité",
    expressionOfExpectedValue = """
        {
            Bureaux: 0.6,
            Enseignement: 0.6,
            Commerces: 0.6,
            'Hôtellerie/Restauration': 0.7,
            Santé: 1.2,
            Autres: 0.6
        }.get(${SecteurActivite.identifier})
    """.trimIndent(),
    dependsOn = listOf(SecteurActivite.identifier)
)

object CumacPerM2Isolant: InformationConceptBase(
    identifier = "cumacPerM2Isolant",
    name = "Montant en kWh cumac par m2 d'isolant",
    unit = KWhCumacPerSquareMeter,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Montant en kWh/m2 en fonction de la zone climatique",
    expressionOfExpectedValue = "{H1: 25, H2: 30, H3: 34}.get(${NombreTypesDispositifGestionEclairage.identifier})",
    dependsOn = listOf(NombreTypesDispositifGestionEclairage.identifier)
)

object SurfaceIsolant: InformationConceptBase(
    identifier = "surfaceIsolant",
    name = "Surface Isolant",
    unit = SquareMeter,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Surface Isolant"
)

object CalculCertificatsCumac: Constraint(
    description = "${CumacPerM2Isolant.identifier} * ${FacteurCorrectif.identifier} * ${SurfaceIsolant.identifier} = ${Cumac.identifier}",
    identifier = "calculCertificatsCumac",
    name = "Montant de certificats en kWh cumac",
    type = FicheCode.MontantCertificatsCumac,
    hasConcept = listOf(
        Cumac,
        CumacPerM2Isolant,
        FacteurCorrectif,
        SurfaceIsolant
    )
)

object Cumac: InformationConceptBase(
    identifier = "kWhCumac",
    name = "kWh Cumac",
    unit = KWhCumac,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "kWh Cumac"
)

object KWhCumac: CUnit(
    identifier = "kWhCumac",
    name = "Kilowatt-Heure CUMAC",
    description = "kilowatt-heures cumulés et actualisés",
    notation = "kWh Cumac",
    type = CUnitType.number
)

object KWhCumacPerSquareMeter: CUnit(
    identifier = "kwhPerSquareMeter",
    name = "Killowatt-heure Cumac par mètre carré",
    description = "Killowatt-heure Cumac par mètre carré",
    notation = "kWh Cumac/m²",
    type = CUnitType.number
)


val BAT_EN_101 = criterion {
    identifier = "BAT-EN-101"
    name = "Isolation de combles ou de toitures"
    type = FicheCee
    +SecteurApplication(
    )
    +Denomination(
        "Mise en place d'une isolation thermique en plancher de combles perdus ou en rampant de toiture"
    )
    +MontantCertificatsCumac(
        CalculCertificatsCumac
    )
    hasEvidenceTypeList = listOf()
}

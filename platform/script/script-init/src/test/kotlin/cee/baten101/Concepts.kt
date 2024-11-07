package cee.baten101

import cccev.dsl.model.InformationConceptBase
import cccev.dsl.model.SquareMeter
import cccev.dsl.model.XSDDate
import cccev.dsl.model.XSDDouble
import cccev.dsl.model.XSDString
import cee.FicheCode
import cee.indba116.NombreTypesDispositifGestionEclairage
import java.util.UUID

object ResistanceThermique: InformationConceptBase(
    identifier = "resistanceThermique",
    name = "Résistance Thermique",
    unit = SquareMeterKelvinPerWatt,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Résistance Thermique",
    id = UUID.randomUUID().toString()
)

object DatePrecedentsTravauxMemeBatiment: InformationConceptBase(
    identifier = "datePrecedentsTravauxMemeBatiment",
    name = "Résistance Thermique",
    unit = XSDDate,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Résistance Thermique",
    id = UUID.randomUUID().toString()
)

object SurfaceIsolant: InformationConceptBase(
    identifier = "surfaceIsolant",
    name = "Surface Isolant",
    unit = SquareMeter,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Surface Isolant",
    id = UUID.randomUUID().toString()
)

object CumacPerM2Isolant: InformationConceptBase(
    identifier = "cumacPerM2Isolant",
    name = "Montant en kWh cumac par m2 d'isolant",
    unit = KwhCumacPerSquareMeter,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Montant en kWh/m2 en fonction de la zone climatique",
    expressionOfExpectedValue = "{H1: 25, H2: 30, H3: 34}.get(${NombreTypesDispositifGestionEclairage.identifier})",
    dependsOn = listOf(NombreTypesDispositifGestionEclairage.identifier),
    id = UUID.randomUUID().toString()
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
    dependsOn = listOf(SecteurActivite.identifier),
    id = UUID.randomUUID().toString()
)

object ZoneClimatique: InformationConceptBase(
    identifier = "zoneClimatique",
    name = "Zone Climatique",
    unit = XSDString,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Zone Climatique",
    id = UUID.randomUUID().toString()
)

object SecteurActivite: InformationConceptBase(
    identifier = "secteurActivite",
    name = "Secteur d'activité",
    unit = XSDString,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Secteur d'activité",
    id = UUID.randomUUID().toString()
)


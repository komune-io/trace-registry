package cccev.dsl.cee.indba116

import cccev.dsl.model.Duration
import cccev.dsl.model.InformationConceptBase
import cccev.dsl.model.Ratio
import cccev.dsl.model.XSDInt
import cccev.dsl.model.XSDString
import cee.FicheCode
import cee.KWhCumac
import cee.indba116.KWhCumacPerW
import cee.indba116.LumenPerW
import cee.indba116.Variation
import cee.indba116.Watt

object SecteurActivite: InformationConceptBase(
    identifier = "secteurActivite",
    name = "Secteur d'activité",
    unit = XSDString,
    type = FicheCode.SecteurActivite,
    description = "Secteur d'activité d'une entité"
)

object UsageLuminaire: InformationConceptBase(
    identifier = "usageLuminaire",
    name = "Usage Luminaire",
    unit = XSDString,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Type d'utilisation d'un luminaire"
)

object DureeDeVieLuminaire: InformationConceptBase(
    identifier = "dureeVieLuminaire",
    name = "Durée de vie luminaire",
    unit = Duration.Hour,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Durée de vie calculée à 25°C avec une chute du flux lumineux <= 20%"
)

object EfficaciteLumineuse: InformationConceptBase(
    identifier = "efficaciteLumineuse",
    name = "Efficacité lumineuse",
    unit = LumenPerW,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Flux lumineux total sortant du luminaire divisé par la puissance totale du luminaire auxiliaire d’alimentation compris"
)

object FacteurPuissance: InformationConceptBase(
    identifier = "facteurPuissance",
    name = "Facteur de puissance",
    unit = Ratio,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Facteur de puissance"
)

object TauxDistorsionHarmonique: InformationConceptBase(
    identifier = "tauxDistorsionHarmonique",
    name = "Taux de distorsion harmonique",
    unit = Variation,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Taux de distortion harmonique"
)

open class Norme(identifier: String = "norme"): InformationConceptBase(
    identifier = identifier,
    name = "Norme",
    unit = XSDString,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Identifie une norme"
)

object TauxDistorsionHarmoniqueNormeCalcul: Norme("tauxDistorsionHarmoniqueNormeCalcul")

object NombreTypesDispositifGestionEclairage: InformationConceptBase(
    identifier = "nombreTypesDispositifGestionEclairage",
    name = "Nombre Types Dispositif Gestion Eclairage",
    unit = XSDInt,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Nombre de types de dispositifs de gestion de l'éclairage"
)

object DureeVieConventionnelleLuminaire: InformationConceptBase(
    identifier = "dureeVieConventionnelleLuminaire",
    name = "Durée de vie conventionnelle Luminaire",
    unit = Duration.Year,
    type = FicheCode.DureeVieConventionnelle,
    description = "Durée de vie conventionnelle de luminaires en fonction du dispositif de gestion d'éclairage",
    expressionOfExpectedValue = "{0: 13, 1: 14, 2: 16}.get(\${${NombreTypesDispositifGestionEclairage.identifier}})",
    dependsOn = listOf(NombreTypesDispositifGestionEclairage.identifier)
)

object CumacParWatt: InformationConceptBase(
    identifier = "cumacParWatt",
    name = "Montant en kWh par Watt",
    unit = KWhCumacPerW,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Montant en kWh/W en fonction du nombre de types dispositif de gestion de l'éclairage",
    expressionOfExpectedValue = "{0: 25, 1: 30, 2: 34}.get(\${${NombreTypesDispositifGestionEclairage.identifier}})",
    dependsOn = listOf(NombreTypesDispositifGestionEclairage.identifier)
)

object Puissance: InformationConceptBase(
    identifier = "puissance",
    name = "Puissance",
    unit = Watt,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Puissance en Watt"
)

object Cumac: InformationConceptBase(
    identifier = "kWhCumac",
    name = "kWh Cumac",
    unit = KWhCumac,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "kWh Cumac"
)

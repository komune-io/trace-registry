package cee

import cccev.dsl.model.InformationConceptBase
import cccev.dsl.model.XSDDate

object DateTravaux: InformationConceptBase(
    identifier = "dateTravaux",
    name = "Date Travaux",
    unit = XSDDate,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Date de travaux"
)

object DatePrecedentsTravaux: InformationConceptBase(
    identifier = "datePrecedentsTravaux",
    name = "Date Précédents Travaux",
    unit = XSDDate,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Date des précédents travaux"
)

object DateDevis: InformationConceptBase(
    identifier = "dateDevis",
    name = "Date Devis",
    unit = XSDDate,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Date de devis"
)

package cee

import cccev.dsl.model.InformationConcept
import cccev.dsl.model.XSDDate
import java.util.UUID

object DateTravaux: InformationConcept(
    identifier = "dateTravaux",
    name = "Date Travaux",
    unit = XSDDate,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Date de travaux",
    id = UUID.randomUUID().toString()
)

object DatePrecedentsTravaux: InformationConcept(
    identifier = "datePrecedentsTravaux",
    name = "Date Précédents Travaux",
    unit = XSDDate,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Date des précédents travaux",
    id = UUID.randomUUID().toString()
)

object DateDevis: InformationConcept(
    identifier = "dateDevis",
    name = "Date Devis",
    unit = XSDDate,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Date de devis",
    id = UUID.randomUUID().toString()
)

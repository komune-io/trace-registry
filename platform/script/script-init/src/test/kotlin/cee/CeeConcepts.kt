package cee

import cccev.dsl.model.InformationConceptBase
import cccev.dsl.model.XSDDate
import java.util.UUID

object DateTravaux: InformationConceptBase(
    identifier = "dateTravaux",
    name = "Date Travaux",
    unit = XSDDate,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Date de travaux",
    id = UUID.randomUUID().toString()
)

object DatePrecedentsTravaux: InformationConceptBase(
    identifier = "datePrecedentsTravaux",
    name = "Date Précédents Travaux",
    unit = XSDDate,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Date des précédents travaux",
    id = UUID.randomUUID().toString()
)

object DateDevis: InformationConceptBase(
    identifier = "dateDevis",
    name = "Date Devis",
    unit = XSDDate,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Date de devis",
    id = UUID.randomUUID().toString()
)

package cee

import cccev.dsl.model.EvidenceTypeBase
import cccev.dsl.model.EvidenceTypeListBase
import cccev.dsl.model.PeriodOfTime


object CertificatProfessionnel: EvidenceTypeListBase(
    identifier = "CertificatProfessionnel",
    name = "Certificat Professionnel",
    description = "CertificatProfessionnel",
    specifiesEvidenceType = listOf(
        CertificatCerfa
    )
)

object CertificatCerfa: EvidenceTypeBase(
    identifier = "CERFA-2321122",
    name = "Certificat Cerfat",
    evidenceTypeClassification = CerfaCode,
    validityPeriodConstraint = PeriodOfTime(
        duration = "10 ans"
    )
)

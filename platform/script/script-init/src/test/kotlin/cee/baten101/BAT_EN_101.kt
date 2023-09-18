package cee.baten101

import cccev.dsl.model.criterion
import cee.ConditionsDelivranceCertificats
import cee.Denomination
import cee.DureeVieConventionnelle
import cee.EstProfessionnelInformationRequirement
import cee.FicheCee
import cee.MontantCertificatsCumac
import cee.SecteurApplication

val BAT_EN_101 = criterion {
    identifier = "BAT-EN-101"
    name = "Isolation de combles ou de toitures"
    type = FicheCee
    +SecteurApplication(
    )
    +Denomination(
        "Mise en place d'une isolation thermique en plancher de combles perdus ou en rampant de toiture"
    )
    +ConditionsDelivranceCertificats(
        EstProfessionnelInformationRequirement,
        ResistanceThermiqueMinimale,
        BesoinPareVapeur,
        DateTravauxRegles
    )
    +DureeVieConventionnelle(
        DatePrecedentsTravauxContrainte
    )
    +MontantCertificatsCumac(
        CalculCertificatsCumac
    )
    hasEvidenceTypeList = listOf(
    )
}

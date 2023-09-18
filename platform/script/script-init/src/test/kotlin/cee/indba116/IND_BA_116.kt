package cee.indba116

import cccev.dsl.model.criterion
import cee.ConditionsDelivranceCertificats
import cee.Denomination
import cee.DureeVieConventionnelle
import cee.EstProfessionnelInformationRequirement
import cee.FicheCee
import cee.MontantCertificatsCumac
import cee.SecteurApplication

val IND_BA_116 = criterion {
	identifier = "IND-BA-116"
	name = "Luminaires à modules LED"
	type = FicheCee
	+SecteurApplication(
		EstBatimentIndustriel
	)
	+Denomination(
		"Mise en place d'un luminaire à modules LED avec ou sans dispositif de gestion d'éclairage",
		DenominationTypeUsageNonMouvementOuIntrusion
	)
	+ConditionsDelivranceCertificats(
		EstProfessionnelInformationRequirement,
		DureeDeVie25DegresAvecChuteFluxLumineuxInferieur20Pourcents,
		EfficaciteLumineuseMinimale,
		FacteurPuissanceMinimal,
		TauxDistorsionHarmoniqueValide,
		EtudeDimensionnementEclairagePrealableInfo
	)
	+DureeVieConventionnelle(
		DatePrecedentsTravauxContrainte
	)
	+MontantCertificatsCumac(
		CalculCertificatsCumac
	)
	hasEvidenceTypeList = listOf(
		Annexe1AvecDetailsEquipement,
		Annexe1AvecReferencesEquipement
	)
}

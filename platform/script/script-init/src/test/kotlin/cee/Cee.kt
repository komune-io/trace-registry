package cee

import cccev.dsl.model.Code
import cccev.dsl.model.ReferenceFramework
import kotlinx.serialization.Serializable

val cee = ReferenceFramework(
	identifier = "Cee",
	name = "Cee"
)

@Serializable
object FicheCode {
	object SecteurActivite: Code
	object Denomination: Code
	object ConditionsDelivranceCertificats: Code
	object DureeVieConventionnelle: Code
	object MontantCertificatsCumac: Code
	object Annexe1: Code
}

object FicheCee: Code
object DossierCee: Code
object DeclarationHonneur: Code

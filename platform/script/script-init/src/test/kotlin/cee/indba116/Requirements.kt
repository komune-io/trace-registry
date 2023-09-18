package cee.indba116

import cccev.dsl.cee.indba116.Cumac
import cccev.dsl.cee.indba116.CumacParWatt
import cccev.dsl.cee.indba116.DureeDeVieLuminaire
import cccev.dsl.cee.indba116.DureeVieConventionnelleLuminaire
import cccev.dsl.cee.indba116.EfficaciteLumineuse
import cccev.dsl.cee.indba116.FacteurPuissance
import cccev.dsl.cee.indba116.Puissance
import cccev.dsl.cee.indba116.SecteurActivite
import cccev.dsl.cee.indba116.TauxDistorsionHarmonique
import cccev.dsl.cee.indba116.TauxDistorsionHarmoniqueNormeCalcul
import cccev.dsl.cee.indba116.UsageLuminaire
import cccev.dsl.model.Constraint
import cccev.dsl.model.Criterion
import cccev.dsl.model.InformationRequirement
import cee.DatePrecedentsTravaux
import cee.DateTravaux
import cee.FicheCode

object EstBatimentIndustriel: Constraint(
    description = "${SecteurActivite.identifier} == Industriel",
    identifier = "BAT-IND",
    name = "Secteur d'application",
    type = FicheCode.SecteurActivite,
    hasConcept = listOf(
        SecteurActivite
    )
)

object DenominationTypeUsageNonMouvementOuIntrusion: Constraint(
    description = "${UsageLuminaire.identifier} !in [Intrusion, Mouvement]",
    identifier = "Usage non autorisé",
    name = """
		Les installations d'éclairage destinées à assurer la protection des biens lorsqu'elles sont asservies à des dispositifs
		de détection de mouvement ou d'intrusion ne sont pas éligibles. 
	""".trimIndent(),
    type = FicheCode.Denomination,
    hasConcept = listOf(
        UsageLuminaire
    )
)

object DureeDeVie25DegresAvecChuteFluxLumineuxInferieur20Pourcents: Constraint(
    description = "${DureeDeVieLuminaire.identifier} >= 50000 heures",
    identifier = "dureeVie25CEtChuteMax20P",
    name = "Durée de vie calculée à 25°C >= 50 000 heures avec une chute du flux lumineux <= 20%",
    type = FicheCode.ConditionsDelivranceCertificats,
    hasConcept = listOf(
        DureeDeVieLuminaire
    )
)

object EfficaciteLumineuseMinimale: Constraint(
    description = "${EfficaciteLumineuse.identifier} ≥ 110",
    identifier = "efficaciteLumineuseMinimale",
    name = """
		efficacité lumineuse (flux lumineux total sortant du luminaire divisé par 
		la puissance totale du luminaire auxiliaire d’alimentation compris) >= 110 lm/W
	""".trimIndent(),
    type = FicheCode.ConditionsDelivranceCertificats,
    hasConcept = listOf(
        EfficaciteLumineuse
    )
)

object FacteurPuissanceMinimal: Constraint(
    description = "${FacteurPuissance.identifier} > 0.9",
    identifier = "facteurPuissanceMinimal",
    name = "facteur de puissance > 0,9 quelle que soit la puissance",
    type = FicheCode.ConditionsDelivranceCertificats,
    hasConcept = listOf(
        FacteurPuissance
    )
)

object TauxDistorsionHarmoniqueValide: Criterion(
    description = "Liste de contraintes sur le taux de distorsion harmonique",
    identifier = "tauxDistorsionHarmoniqueMaximal",
    name = """
        conformité à la norme EN 61000-3-2 au niveau harmonique avec un taux de distorsion harmonique sur le 
        courant inférieur à 25 %
    """.trimIndent(),
    type = FicheCode.ConditionsDelivranceCertificats,
    hasRequirement = listOf(
        TauxDistorsionHarmoniqueMaximal,
        TauxDistorsionHarmoniqueCalculSelonNorme
    )
)

object TauxDistorsionHarmoniqueMaximal: Constraint(
    description = "${TauxDistorsionHarmonique.identifier} < 25%",
    identifier = "tauxDistorsionHarmoniqueMaximal",
    name = "taux de distorsion harmonique sur le courant inférieur à 25 %",
    type = FicheCode.ConditionsDelivranceCertificats,
    hasConcept = listOf(
        TauxDistorsionHarmonique
    )
)

object TauxDistorsionHarmoniqueCalculSelonNorme: Constraint(
    description = "${TauxDistorsionHarmoniqueNormeCalcul.identifier} == EN 61000-3-2",
    identifier = "tauxDistorsionHarmoniqueNorme",
    name = "le taux de distorsion harmonique sur le courant est déterminé conformément à la norme EN 61000-3-2.",
    type = FicheCode.ConditionsDelivranceCertificats,
    hasConcept = listOf(
        TauxDistorsionHarmoniqueNormeCalcul
    )
)

object EtudeDimensionnementEclairagePrealableInfo: InformationRequirement(
    description = "",
    identifier = "etudeDimensionnementEclairagePrealableInfo",
    name = """
        La mise en place des luminaires à modules LED fait l’objet d’une étude préalable de dimensionnement de 
        l’éclairage effectuée, datée et signée par un professionnel ou un bureau d’étude. Cette étude dresse l’état des lieux 
        des équipements en place avant rénovation, identifie les besoins afin de garantir le bon éclairage des locaux et la 
        maîtrise des consommations d’énergie, indique les caractéristiques, le nombre et l’implantation des nouveaux 
        luminaires et dimensionne les économies d’énergie attendues. 
    """.trimIndent(),
    type = FicheCode.ConditionsDelivranceCertificats,
    hasEvidenceTypeList = listOf(
        EtudeDimensionnementEclairagePrealable
    )
)

object DatePrecedentsTravauxContrainte: Constraint(
    description = "${DateTravaux.identifier} - ${DatePrecedentsTravaux.identifier} >= ${DureeVieConventionnelleLuminaire.identifier} ans",
    identifier = "datePrecedentsTravaux",
    name = "Date des précédents travaux",
    type = FicheCode.DureeVieConventionnelle,
    hasConcept = listOf(
        DureeVieConventionnelleLuminaire,
        DateTravaux
    )
)

object CalculCertificatsCumac: Constraint(
    description = "${CumacParWatt.identifier} * ${Puissance.identifier} = ${Cumac.identifier}",
    identifier = "calculCertificatsCumac",
    name = "Montant de certificats en kWh cumac",
    type = FicheCode.MontantCertificatsCumac,
    hasConcept = listOf(
        CumacParWatt,
        Cumac,
        Puissance
    )
)

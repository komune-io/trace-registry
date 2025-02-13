package cee.indba116

import cccev.dsl.model.Constraint
import cccev.dsl.model.Criterion
import cccev.dsl.model.InformationRequirement
import cee.DatePrecedentsTravaux
import cee.DateTravaux
import cee.FicheCode
import java.util.UUID

object EstBatimentIndustriel: Constraint(
    description = "${SecteurActivite.identifier} == Industriel",
    identifier = "BAT-IND",
    name = "Secteur d'application",
    type = FicheCode.SecteurActivite.toString(),
    hasConcept = listOf(
        SecteurActivite
    ),
    enablingCondition = null,
    enablingConditionDependencies = emptyList(),
    required = true,
    validatingCondition = null,
    validatingConditionDependencies = emptyList(),
    order = null,
    properties = null,
    // TODO Clean That
    isDerivedFrom = emptyList(),
    isRequirementOf = emptyList(),
    evidenceValidatingCondition = null,
    id = UUID.randomUUID().toString()
)

object DenominationTypeUsageNonMouvementOuIntrusion: Constraint(
    description = "${UsageLuminaire.identifier} !in [Intrusion, Mouvement]",
    identifier = "Usage non autorisé",
    name = """
		Les installations d'éclairage destinées à assurer la protection des biens lorsqu'elles sont asservies à des dispositifs
		de détection de mouvement ou d'intrusion ne sont pas éligibles. 
	""".trimIndent(),
    type = FicheCode.Denomination.toString(),
    hasConcept = listOf(
        UsageLuminaire
    ),
    enablingCondition = null,
    enablingConditionDependencies = emptyList(),
    required = true,
    validatingCondition = null,
    validatingConditionDependencies = emptyList(),
    order = null,
    properties = null,
    // TODO Clean That
    isDerivedFrom = emptyList(),
    isRequirementOf = emptyList(),
    evidenceValidatingCondition = null,
    id = UUID.randomUUID().toString()
)

object DureeDeVie25DegresAvecChuteFluxLumineuxInferieur20Pourcents: Constraint(
    description = "${DureeDeVieLuminaire.identifier} >= 50000 heures",
    identifier = "dureeVie25CEtChuteMax20P",
    name = "Durée de vie calculée à 25°C >= 50 000 heures avec une chute du flux lumineux <= 20%",
    type = FicheCode.ConditionsDelivranceCertificats.toString(),
    hasConcept = listOf(
        DureeDeVieLuminaire
    ),
    enablingCondition = null,
    enablingConditionDependencies = emptyList(),
    required = true,
    validatingCondition = null,
    validatingConditionDependencies = emptyList(),
    order = null,
    properties = null,
    // TODO Clean That
    isDerivedFrom = emptyList(),
    isRequirementOf = emptyList(),
    evidenceValidatingCondition = null,
    id = UUID.randomUUID().toString()
)

object EfficaciteLumineuseMinimale: Constraint(
    description = "${EfficaciteLumineuse.identifier} ≥ 110",
    identifier = "efficaciteLumineuseMinimale",
    name = """
		efficacité lumineuse (flux lumineux total sortant du luminaire divisé par 
		la puissance totale du luminaire auxiliaire d’alimentation compris) >= 110 lm/W
	""".trimIndent(),
    type = FicheCode.ConditionsDelivranceCertificats.toString(),
    hasConcept = listOf(
        EfficaciteLumineuse
    ),
    enablingCondition = null,
    enablingConditionDependencies = emptyList(),
    required = true,
    validatingCondition = null,
    validatingConditionDependencies = emptyList(),
    order = null,
    properties = null,
    // TODO Clean That
    isDerivedFrom = emptyList(),
    isRequirementOf = emptyList(),
    evidenceValidatingCondition = null,
    id = UUID.randomUUID().toString()
)

object FacteurPuissanceMinimal: Constraint(
    description = "${FacteurPuissance.identifier} > 0.9",
    identifier = "facteurPuissanceMinimal",
    name = "facteur de puissance > 0,9 quelle que soit la puissance",
    type = FicheCode.ConditionsDelivranceCertificats.toString(),
    hasConcept = listOf(
        FacteurPuissance
    ),
    enablingCondition = null,
    enablingConditionDependencies = emptyList(),
    required = true,
    validatingCondition = null,
    validatingConditionDependencies = emptyList(),
    order = null,
    properties = null,
    // TODO Clean That
    isDerivedFrom = emptyList(),
    isRequirementOf = emptyList(),
    evidenceValidatingCondition = null,
    id = UUID.randomUUID().toString()
)

object TauxDistorsionHarmoniqueValide: Criterion(
    description = "Liste de contraintes sur le taux de distorsion harmonique",
    identifier = "tauxDistorsionHarmoniqueMaximal",
    name = """
        conformité à la norme EN 61000-3-2 au niveau harmonique avec un taux de distorsion harmonique sur le 
        courant inférieur à 25 %
    """.trimIndent(),
    type = FicheCode.ConditionsDelivranceCertificats.toString(),
    hasRequirement = listOf(
        TauxDistorsionHarmoniqueMaximal,
        TauxDistorsionHarmoniqueCalculSelonNorme
    ),
    enablingCondition = null,
    enablingConditionDependencies = emptyList(),
    required = true,
    validatingCondition = null,
    validatingConditionDependencies = emptyList(),
    order = null,
    properties = null,
    // TODO Clean That
    isDerivedFrom = emptyList(),
    isRequirementOf = emptyList(),
    evidenceValidatingCondition = null,
    hasConcept = emptyList(),
    id = UUID.randomUUID().toString()
)

object TauxDistorsionHarmoniqueMaximal: Constraint(
    description = "${TauxDistorsionHarmonique.identifier} < 25%",
    identifier = "tauxDistorsionHarmoniqueMaximal",
    name = "taux de distorsion harmonique sur le courant inférieur à 25 %",
    type = FicheCode.ConditionsDelivranceCertificats.toString(),
    hasConcept = listOf(
        TauxDistorsionHarmonique
    ),
    enablingCondition = null,
    enablingConditionDependencies = emptyList(),
    required = true,
    validatingCondition = null,
    validatingConditionDependencies = emptyList(),
    order = null,
    properties = null,
    // TODO Clean That
    isDerivedFrom = emptyList(),
    isRequirementOf = emptyList(),
    evidenceValidatingCondition = null,
    id = UUID.randomUUID().toString()
)

object TauxDistorsionHarmoniqueCalculSelonNorme: Constraint(
    description = "${TauxDistorsionHarmoniqueNormeCalcul.identifier} == EN 61000-3-2",
    identifier = "tauxDistorsionHarmoniqueNorme",
    name = "le taux de distorsion harmonique sur le courant est déterminé conformément à la norme EN 61000-3-2.",
    type = FicheCode.ConditionsDelivranceCertificats.toString(),
    hasConcept = listOf(
        TauxDistorsionHarmoniqueNormeCalcul
    ),
    enablingCondition = null,
    enablingConditionDependencies = emptyList(),
    required = true,
    validatingCondition = null,
    validatingConditionDependencies = emptyList(),
    order = null,
    properties = null,
    // TODO Clean That
    isDerivedFrom = emptyList(),
    isRequirementOf = emptyList(),
    evidenceValidatingCondition = null,
    id = UUID.randomUUID().toString()
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
    type = FicheCode.ConditionsDelivranceCertificats.toString(),
    hasEvidenceTypeList = listOf(
        EtudeDimensionnementEclairagePrealable
    ),
    enablingCondition = null,
    enablingConditionDependencies = emptyList(),
    required = true,
    validatingCondition = null,
    validatingConditionDependencies = emptyList(),
    order = null,
    properties = null,
    // TODO Clean That
    isDerivedFrom = emptyList(),
    isRequirementOf = emptyList(),
    evidenceValidatingCondition = null,
    hasConcept = emptyList(),
    id = UUID.randomUUID().toString()
)

object DatePrecedentsTravauxContrainte: Constraint(
    description = "${DateTravaux.identifier} - ${DatePrecedentsTravaux.identifier} " +
            ">= ${DureeVieConventionnelleLuminaire.identifier} ans",
    identifier = "datePrecedentsTravaux",
    name = "Date des précédents travaux",
    type = FicheCode.DureeVieConventionnelle.toString(),
    hasConcept = listOf(
        DureeVieConventionnelleLuminaire,
        DateTravaux
    ),
    enablingCondition = null,
    enablingConditionDependencies = emptyList(),
    required = true,
    validatingCondition = null,
    validatingConditionDependencies = emptyList(),
    order = null,
    properties = null,
    // TODO Clean That
    isDerivedFrom = emptyList(),
    isRequirementOf = emptyList(),
    evidenceValidatingCondition = null,
    id = UUID.randomUUID().toString()
)

object CalculCertificatsCumac: Constraint(
    description = "${CumacParWatt.identifier} * ${Puissance.identifier} = ${Cumac.identifier}",
    identifier = "calculCertificatsCumac",
    name = "Montant de certificats en kWh cumac",
    type = FicheCode.MontantCertificatsCumac.toString(),
    hasConcept = listOf(
        CumacParWatt,
        Cumac,
        Puissance
    ),
    enablingCondition = null,
    enablingConditionDependencies = emptyList(),
    required = true,
    validatingCondition = null,
    validatingConditionDependencies = emptyList(),
    order = null,
    properties = null,
    // TODO Clean That
    isDerivedFrom = emptyList(),
    isRequirementOf = emptyList(),
    evidenceValidatingCondition = null,
    id = UUID.randomUUID().toString()
)

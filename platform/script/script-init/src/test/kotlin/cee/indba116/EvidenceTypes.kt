package cee.indba116

import cccev.dsl.model.EvidenceTypeBase
import cccev.dsl.model.EvidenceTypeListBase
import cee.FicheCode

object EtudeDimensionnementEclairagePrealable: EvidenceTypeListBase(
    identifier = "etudeDimensionnementEclairagePrealable",
    name = """
        Le document justificatif spécifique à l’opération est l’étude de dimensionnement de l’éclairage préalable à la mise 
        en place des luminaires à modules LED. 
    """.trimIndent(),
    description = "Étude de dimensionnement de l'éclairage préalable à la mise en place des luminaires",
    specifiesEvidenceType = listOf(
        EtudeDimensionnementEclairagePrealableDocument
    )
)

object EtudeDimensionnementEclairagePrealableDocument: EvidenceTypeBase(
    identifier = "etudeDimensionnementEclairagePrealableDoc",
    name = "Etude préalable dimensionnement éclairage",
    evidenceTypeClassification = Etude
)

object Annexe1AvecDetailsEquipement: EvidenceTypeListBase(
    identifier = "annexe1Detaillee",
    name = """
        La preuve de réalisation de l’opération mentionne la mise en place de luminaires à modules LED, la quantité 
        d’équipements installés, leur puissance, leur durée de vie calculée à 25°C, leur chute de flux lumineux à l’issue de 
        leur durée de vie, leur efficacité lumineuse, auxiliaire d’alimentation compris, leur facteur de puissance, leur taux 
        de distorsion harmonique et lorsqu’il est mis en place l’installation d’un dispositif de gestion de l’éclairage en 
        précisant s’il s’agit d’une détection de présence et/ou d’un système de variation de lumière tenant compte des 
        apports de lumière du jour. 
    """.trimIndent(),
    description = "Annexe 1 avec détails des caractéristiques des équipements installés",
    specifiesEvidenceType = listOf(
        Annexe1AvecDetailsEquipementDocument
    )
)

object Annexe1AvecDetailsEquipementDocument: EvidenceTypeBase(
    identifier = "annexe1DetailleeDoc",
    name = "Annexe 1 avec détails équipements",
    evidenceTypeClassification = FicheCode.Annexe1
)

object Annexe1AvecReferencesEquipement: EvidenceTypeListBase(
    identifier = "annexe1References",
    name = """
        A défaut, la preuve de réalisation de l’opération mentionne : 
        - la mise en place d’un nombre donné de luminaires, identifiés par leur marque et référence ; 
        - la puissance de ces luminaires ; 
        - les marque et référence du dispositif de gestion de l’éclairage lorsqu’il est mis en place en précisant s’il s’agit 
        d’une détection de présence et/ou d’un système de variation de lumière tenant compte des apports de lumière du 
        jour. 
        Elle est complétée dans ce cas par un document issu du fabricant indiquant que les équipements de marque et 
        référence installés sont des luminaires à modules LED. Ce document précise la durée de vie des luminaires 
        calculée à 25°C, leur chute de flux lumineux à l’issue de leur durée de vie, leur efficacité lumineuse, auxiliaire 
        d'alimentation compris, leur facteur de puissance et leur taux de distorsion harmonique selon la norme EN 61000- 
        3-2. 
    """.trimIndent(),
    description = "Annexe 1 avec marques et références des équipements installés, complétée par les fiches constructeur",
    specifiesEvidenceType = listOf(
        Annexe1AvecReferencesEquipementDocument,
        Annexe1FicheConstructeur
    )
)

object Annexe1AvecReferencesEquipementDocument: EvidenceTypeBase(
    identifier = "annexe1ReferencesDoc",
    name = "Annexe 1 avec références équipements",
    evidenceTypeClassification = FicheCode.Annexe1
)

object Annexe1FicheConstructeur: EvidenceTypeBase(
    identifier = "annexe1References",
    name = "Fiches constructeur",
    evidenceTypeClassification = FicheCode.Annexe1
)

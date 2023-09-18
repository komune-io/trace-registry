package cccev.dsl.cee.indba116

import cccev.dsl.model.Evidence
import cccev.dsl.model.SupportedValue
import cee.CertificatCerfa
import cee.indba116.Annexe1AvecDetailsEquipementDocument
import cee.indba116.EtudeDimensionnementEclairagePrealableDocument

object Annexe1 {
    object Document: Evidence(
        identifier = "annexe1Document",
        isConformantTo = listOf(
            Annexe1AvecDetailsEquipementDocument.identifier
        ),
        supportsValue = listOf(
            puissanceTotale.identifier,
            dureeDeVie.identifier,
            efficaciteLumineuse.identifier,
            facteurPuissance.identifier,
            tauxDistorsionHarmonique.identifier,
            tauxDistorsionHarmoniqueNorme.identifier,
            nombreTypesDispositifGestionEclairage.identifier
        )
    )

    val puissanceTotale = SupportedValue(
        identifier = "puissanceTotale",
        value = "100",
        providesValueFor = Puissance.identifier
    )

    val dureeDeVie = SupportedValue(
        identifier = "SupportedValue",
        value = "60000",
        providesValueFor = DureeDeVieLuminaire.identifier
    )

    val efficaciteLumineuse = SupportedValue(
        identifier = "efficaciteLumineuse",
        value = "200",
        providesValueFor = EfficaciteLumineuse.identifier
    )

    val facteurPuissance = SupportedValue(
        identifier = "facteurPuissance",
        value = "0.95",
        providesValueFor = FacteurPuissance.identifier
    )

    val tauxDistorsionHarmonique = SupportedValue(
        identifier = "tauxDistorsionHarmonique",
        value = "200",
        providesValueFor = TauxDistorsionHarmonique.identifier
    )

    val tauxDistorsionHarmoniqueNorme = SupportedValue(
        identifier = "tauxDistorsionHarmoniqueNorme",
        value = "EN 61000-3-2",
        providesValueFor = TauxDistorsionHarmoniqueNormeCalcul.identifier
    )

    val nombreTypesDispositifGestionEclairage = SupportedValue(
        identifier = "nombreTypesDispositifGestionEclairage",
        value = "1",
        providesValueFor = NombreTypesDispositifGestionEclairage.identifier
    )
}

object EtudePrealable {
    object Document: Evidence(
        identifier = "etudePrealableDocument",
        isConformantTo = listOf(
            EtudeDimensionnementEclairagePrealableDocument.identifier
        ),
    )
}

object CertificatPro {
    object Document: Evidence(
        identifier = "certificatProDocument",
        isConformantTo = listOf(
            CertificatCerfa.identifier
        ),
    )
}

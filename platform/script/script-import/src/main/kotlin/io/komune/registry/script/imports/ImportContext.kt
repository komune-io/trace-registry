package io.komune.registry.script.imports

import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptDTOBase
import io.komune.registry.f2.cccev.domain.unit.model.DataUnitDTOBase
import io.komune.registry.f2.dataset.domain.dto.DatasetDTOBase
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.CatalogueType
import io.komune.registry.s2.commons.model.DataUnitIdentifier
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.DatasetIdentifier
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.concept.domain.ConceptIdentifier
import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.license.domain.LicenseIdentifier
import io.komune.registry.script.imports.model.CatalogueImportSettings
import io.komune.registry.script.imports.model.CatalogueReferenceIdentifier
import io.komune.registry.script.imports.model.CatalogueReferences
import java.io.File
import java.util.concurrent.ConcurrentHashMap

class ImportContext(
    val rootDirectory: File,
    val settings: CatalogueImportSettings
) {
    val concepts = ConcurrentHashMap<ConceptIdentifier, ConceptId?>()
    val licenses = ConcurrentHashMap<LicenseIdentifier, LicenseId>()
    val catalogueIds = ConcurrentHashMap<CatalogueIdentifier, CatalogueId>()
    val catalogueIdentifiersByTitle = ConcurrentHashMap<String, CatalogueIdentifier>()
    val catalogueParents = ConcurrentHashMap<CatalogueId, CatalogueReferences>()
    val catalogueCatalogueReferences = ConcurrentHashMap<CatalogueId, Map<String, List<CatalogueReferences>>>()
    val catalogueCatalogueBackReferences = ConcurrentHashMap<CatalogueId, Map<String, List<CatalogueReferences>>>()
    val catalogueDatasetReferences = ConcurrentHashMap<CatalogueIdentifier, List<DatasetId>>()

    val dataUnits = ConcurrentHashMap<DataUnitIdentifier, DataUnitDTOBase>()
    val informationConcepts = ConcurrentHashMap<InformationConceptIdentifier, InformationConceptDTOBase>()

    val preExistingDatasets = ConcurrentHashMap<DatasetIdentifier, DatasetDTOBase>()
    val preExistinggraphDataset = ConcurrentHashMap<Language, List<DatasetDTOBase>>()

    fun mapCatalogueType(type: String): String {
        return settings
            .mapping
            ?.catalogueTypes
            ?.get(type)
            ?: type
    }

    fun registerCatalogue(catalogue: CatalogueDTOBase) {
        registerCatalogue(catalogue.id, catalogue.identifier, catalogue.title)
    }

    fun registerCatalogue(catalogueId: CatalogueId, catalogueIdentifier: CatalogueIdentifier, title: String) {
        catalogueIds[catalogueIdentifier] = catalogueId
        catalogueIdentifiersByTitle[title] = catalogueIdentifier
    }

    fun registerParentOrDefault(catalogueId: CatalogueId, catalogueType: CatalogueType, parentReference: CatalogueReferences?) {
        if (parentReference != null) {
            catalogueParents[catalogueId] = parentReference
            return
        }

        val parentIdentifier = settings.defaults?.parent?.get(catalogueType)?.identifier
            ?: return

        catalogueParents[catalogueId] = CatalogueReferenceIdentifier(
            type = catalogueType,
            identifiers = listOf(parentIdentifier),
        )
    }
}

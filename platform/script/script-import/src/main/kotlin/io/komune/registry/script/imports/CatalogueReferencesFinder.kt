package io.komune.registry.script.imports

import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.script.imports.model.CatalogueReferenceChild
import io.komune.registry.script.imports.model.CatalogueReferenceIdentifier
import io.komune.registry.script.imports.model.CatalogueReferenceTitle
import io.komune.registry.script.imports.model.CatalogueReferences

class CatalogueReferencesFinder(
    private val importContext: ImportContext,
    private val importRepository: ImportRepository,
) {

    suspend fun findIdentifiers(references: CatalogueReferences, parentIdentifier: CatalogueIdentifier? = null): Set<CatalogueIdentifier> {
        return when (references) {
            is CatalogueReferenceIdentifier -> references.findIdentifiers(parentIdentifier)
            is CatalogueReferenceTitle -> references.findIdentifiers(parentIdentifier)
            is CatalogueReferenceChild -> references.findIdentifiers(parentIdentifier)
        }
    }

    private fun CatalogueReferenceIdentifier.findIdentifiers(parentIdentifier: CatalogueIdentifier?): Set<CatalogueIdentifier> {
        val mappedType = type?.let { importContext.mapCatalogueType(it) }
        if (identifiers.isEmpty()) {
            return setOfNotNull(mappedType)
        }

        return identifiers.map { identifier ->
            identifier.takeIf { it.startsWith(parentIdentifier ?: type ?: "") }
                ?: "${parentIdentifier ?: mappedType}-$identifier"
        }.toSet()
    }

    private suspend fun CatalogueReferenceTitle.findIdentifiers(parentIdentifier: CatalogueIdentifier?): Set<CatalogueIdentifier> {
        if (titles.isNullOrEmpty()) {
            return emptySet()
        }

        val mappedType = importContext.mapCatalogueType(type)

        return titles.mapAsync { title ->
            importRepository.findCatalogueByTitle(title, mappedType, parentIdentifier)
        }.filterNotNull().toSet()
    }

    private suspend fun CatalogueReferenceChild.findIdentifiers(parentIdentifier: CatalogueIdentifier?): Set<CatalogueIdentifier> {
        val rootIdentifiers = findIdentifiers(root, parentIdentifier)
        return rootIdentifiers.mapAsync {
            findIdentifiers(child, it)
        }.flatten().toSet()
    }
}

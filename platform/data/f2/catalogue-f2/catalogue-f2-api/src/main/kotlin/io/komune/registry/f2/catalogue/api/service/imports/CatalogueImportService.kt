package io.komune.registry.f2.catalogue.api.service.imports

import io.komune.registry.f2.catalogue.domain.dto.CatalogueImportType
import io.komune.registry.s2.commons.model.CatalogueId
import org.springframework.stereotype.Service
import java.io.InputStream

@Service
class CatalogueImportService(
    private val catalogue100mProjectsImportService: Catalogue100mProjectsImportService
) {
    suspend fun parseAndImport(type: CatalogueImportType, inputStream: InputStream): List<CatalogueId> = when (type) {
        CatalogueImportType.M100_PROJECTS -> catalogue100mProjectsImportService.parseAndImport(inputStream)
    }
}

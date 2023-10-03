package city.smartb.registry.f2.catalogue.api.service

import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import kotlinx.coroutines.coroutineScope
import org.springframework.stereotype.Service

@Service
class CatalogueF2ExecutorService {
    suspend fun createCatalogue(cmd: CatalogueCreateCommandDTOBase): CatalogueIdentifier = coroutineScope {
        cmd.identifier
    }
}

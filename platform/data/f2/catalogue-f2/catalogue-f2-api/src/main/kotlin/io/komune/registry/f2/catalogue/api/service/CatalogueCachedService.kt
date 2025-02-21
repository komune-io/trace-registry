package io.komune.registry.f2.catalogue.api.service

import io.komune.registry.f2.catalogue.api.model.CatalogueCacheContext
import io.komune.registry.f2.license.api.service.LicenseF2FinderService
import io.komune.registry.f2.organization.api.service.OrganizationF2FinderService
import io.komune.registry.f2.user.api.service.UserF2FinderService
import kotlinx.coroutines.withContext
import org.springframework.beans.factory.annotation.Autowired
import kotlin.coroutines.coroutineContext

open class CatalogueCachedService {

    @Autowired
    lateinit var licenseF2FinderService: LicenseF2FinderService

    @Autowired
    protected lateinit var organizationF2FinderService: OrganizationF2FinderService

    @Autowired
    protected lateinit var userF2FinderService: UserF2FinderService

    internal suspend fun <R> withCache(block: suspend (CatalogueCacheContext) -> R): R {
        val cache = coroutineContext[CatalogueCacheContext.Key]

        if (cache == null) {
            val cacheContext = CatalogueCacheContext(
                licenseF2FinderService = licenseF2FinderService,
                organizationF2FinderService = organizationF2FinderService,
                userF2FinderService = userF2FinderService
            )
            return withContext(cacheContext) {
                withCache(block)
            }
        }

        return block(cache)
    }
}

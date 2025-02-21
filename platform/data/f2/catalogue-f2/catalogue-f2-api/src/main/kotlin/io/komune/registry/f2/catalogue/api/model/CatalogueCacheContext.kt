package io.komune.registry.f2.catalogue.api.model

import io.komune.registry.api.commons.model.SimpleCache
import io.komune.registry.f2.license.api.service.LicenseF2FinderService
import io.komune.registry.f2.organization.api.service.OrganizationF2FinderService
import io.komune.registry.f2.user.api.service.UserF2FinderService
import kotlin.coroutines.CoroutineContext

internal class CatalogueCacheContext(
    private val licenseF2FinderService: LicenseF2FinderService,
    private val organizationF2FinderService: OrganizationF2FinderService,
    private val userF2FinderService: UserF2FinderService
) : CoroutineContext.Element {
    override val key: CoroutineContext.Key<CatalogueCacheContext> = Key
    companion object Key : CoroutineContext.Key<CatalogueCacheContext>

    val licenses = SimpleCache(licenseF2FinderService::getOrNull)
    val organizations = SimpleCache(organizationF2FinderService::getRef)
    val users = SimpleCache(userF2FinderService::getRef)
}

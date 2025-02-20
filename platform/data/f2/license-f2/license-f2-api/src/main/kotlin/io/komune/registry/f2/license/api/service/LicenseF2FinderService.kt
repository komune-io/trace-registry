package io.komune.registry.f2.license.api.service

import io.komune.registry.f2.license.api.model.toDTO
import io.komune.registry.f2.license.domain.model.LicenseDTOBase
import io.komune.registry.s2.license.api.LicenseFinderService
import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.license.domain.LicenseIdentifier
import org.springframework.stereotype.Service

@Service
class LicenseF2FinderService(
    private val licenseFinderService: LicenseFinderService
) {

    suspend fun getOrNull(id: LicenseId): LicenseDTOBase? {
        return licenseFinderService.getOrNull(id)?.toDTO()
    }

    suspend fun getByIdentifierOrNull(identifier: LicenseIdentifier): LicenseDTOBase? {
        return licenseFinderService.getByIdentifierOrNull(identifier)?.toDTO()
    }

    suspend fun list(): List<LicenseDTOBase> {
        return licenseFinderService.list()
            .map { it.toDTO() }
            .sortedBy(LicenseDTOBase::name)
    }
}

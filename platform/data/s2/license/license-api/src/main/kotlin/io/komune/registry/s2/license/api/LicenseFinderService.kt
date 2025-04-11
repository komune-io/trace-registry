package io.komune.registry.s2.license.api

import io.komune.registry.s2.commons.exception.NotFoundException
import io.komune.registry.s2.license.api.entity.LicenseRepository
import io.komune.registry.s2.license.api.entity.toModel
import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.license.domain.LicenseIdentifier
import io.komune.registry.s2.license.domain.model.LicenseModel
import org.springframework.stereotype.Service

@Service
class LicenseFinderService(
    private val licenseRepository: LicenseRepository
) {
    suspend fun getOrNull(id: LicenseId): LicenseModel? {
        return licenseRepository.findById(id)
            .orElse(null)
            ?.toModel()
    }

    suspend fun get(id: LicenseId): LicenseModel {
        return getOrNull(id)
            ?: throw NotFoundException("License", id)
    }

    suspend fun getByIdentifierOrNull(identifier: LicenseIdentifier): LicenseModel? {
        return licenseRepository.findByIdentifier(identifier)?.toModel()
    }

    suspend fun getByIdentifier(identifier: LicenseIdentifier): LicenseModel {
        return getByIdentifierOrNull(identifier)
            ?: throw NotFoundException("License", identifier)
    }

    suspend fun list(): List<LicenseModel> {
        return licenseRepository.findAll().map { it.toModel() }
    }
}

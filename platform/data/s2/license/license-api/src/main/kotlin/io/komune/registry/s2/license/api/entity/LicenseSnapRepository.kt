package io.komune.registry.s2.license.api.entity

import io.komune.registry.s2.license.domain.LicenseId
import org.springframework.stereotype.Service
import s2.sourcing.dsl.snap.SnapRepository

@Service
class LicenseSnapRepository(
    private val repository: LicenseRepository
): SnapRepository<LicenseEntity, LicenseId> {
    override suspend fun get(id: LicenseId): LicenseEntity? {
        return repository.findById(id).orElse(null)
    }

    override suspend fun remove(id: LicenseId): Boolean {
        repository.deleteById(id)
        return true
    }

    override suspend fun save(entity: LicenseEntity): LicenseEntity {
        return repository.save(entity)
    }
}

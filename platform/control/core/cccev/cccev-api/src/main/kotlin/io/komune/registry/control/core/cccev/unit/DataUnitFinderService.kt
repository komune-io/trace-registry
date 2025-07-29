package io.komune.registry.control.core.cccev.unit

import f2.spring.exception.NotFoundException
import io.komune.registry.control.core.cccev.unit.entity.DataUnit
import io.komune.registry.control.core.cccev.unit.entity.DataUnitRepository
import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.DataUnitIdentifier
import org.springframework.stereotype.Service

@Service
class DataUnitFinderService(
    private val dataUnitRepository: DataUnitRepository
) {
    suspend fun getOrNull(id: DataUnitId): DataUnit? {
        return dataUnitRepository.findById(id)
    }

    suspend fun get(id: DataUnitId): DataUnit {
        return getOrNull(id)
            ?: throw NotFoundException("DataUnit", id)
    }

    suspend fun getByIdentifierOrNull(id: DataUnitIdentifier): DataUnit? {
        return dataUnitRepository.findByIdentifier(id)
    }
}

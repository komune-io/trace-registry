package cccev.s2.unit.api

import cccev.projection.api.entity.unit.DataUnitRepository
import cccev.projection.api.entity.unit.toDataUnit
import cccev.s2.unit.domain.DataUnitFinder
import cccev.s2.unit.domain.DataUnitId
import cccev.s2.unit.domain.DataUnitIdentifier
import cccev.s2.unit.domain.model.DataUnit
import f2.spring.exception.NotFoundException
import kotlinx.coroutines.reactor.awaitSingleOrNull
import org.springframework.stereotype.Service

@Service
class DataUnitFinderService(
    private val dataUnitRepository: DataUnitRepository
): DataUnitFinder {
    override suspend fun getOrNull(id: DataUnitId): DataUnit? {
        return dataUnitRepository.findById(id)
            .awaitSingleOrNull()
            ?.toDataUnit()
    }
    override suspend fun getOrNullByIdentifier(id: DataUnitIdentifier): DataUnit? {
        return dataUnitRepository.findByIdentifier(id)
            .awaitSingleOrNull()
            ?.toDataUnit()
    }

    override suspend fun get(id: DataUnitId): DataUnit {
        return getOrNull(id) ?: throw NotFoundException("DataUnit", id)
    }
}

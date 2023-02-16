package city.smartb.registry.program.s2.protocol.api.entity

import com.redis.om.spring.repository.RedisDocumentRepository
import city.smartb.registry.program.s2.protocol.domain.model.ProtocolId
import java.util.Optional
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface ProtocolRepository:
    CrudRepository<ProtocolEntity, ProtocolId>,
    PagingAndSortingRepository<ProtocolEntity, ProtocolId>,
    RedisDocumentRepository<ProtocolEntity, ProtocolId> {
    override fun findById(id: ProtocolId): Optional<ProtocolEntity>

}

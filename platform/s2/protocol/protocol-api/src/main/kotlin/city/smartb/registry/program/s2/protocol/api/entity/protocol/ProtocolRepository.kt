package city.smartb.registry.program.s2.protocol.api.entity.protocol

import com.redis.om.spring.repository.RedisDocumentRepository
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolId
import java.util.Optional
import org.springframework.stereotype.Repository

@Repository
interface ProtocolRepository: RedisDocumentRepository<ProtocolEntity, ProtocolId> {
    override fun findById(id: ProtocolId): Optional<ProtocolEntity>

}

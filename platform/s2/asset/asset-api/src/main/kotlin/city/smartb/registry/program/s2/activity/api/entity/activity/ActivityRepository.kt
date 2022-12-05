package city.smartb.registry.program.s2.activity.api.entity.activity

import com.redis.om.spring.repository.RedisDocumentRepository
import city.smartb.registry.program.s2.activity.domain.automate.ActivityId
import java.util.Optional
import org.springframework.stereotype.Repository

@Repository
interface ActivityRepository: RedisDocumentRepository<ActivityEntity, ActivityId> {
    override fun findById(id: ActivityId): Optional<ActivityEntity>

}

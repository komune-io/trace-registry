package city.smartb.registry.program.s2.activity.api.entity

import city.smartb.registry.program.s2.activity.domain.model.ActivityId
import com.redis.om.spring.repository.RedisDocumentRepository
import java.util.Optional
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface ActivityRepository:
    CrudRepository<ActivityEntity, ActivityId>,
    PagingAndSortingRepository<ActivityEntity, ActivityId>,
    RedisDocumentRepository<ActivityEntity, ActivityId> {
//interface ActivityRepository: RedisDocumentRepository<ActivityEntity, ActivityId> {
    override fun findById(id: ActivityId): Optional<ActivityEntity>

}

package city.smartb.registry.program.s2.project.api.entity

import com.redis.om.spring.repository.RedisDocumentRepository
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import java.util.Optional
import org.springframework.stereotype.Repository

@Repository
interface ProjectRepository: RedisDocumentRepository<ProjectEntity, ProjectId> {
    override fun findById(id: ProjectId): Optional<ProjectEntity>

}

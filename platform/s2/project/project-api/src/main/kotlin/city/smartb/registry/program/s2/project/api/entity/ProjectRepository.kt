package city.smartb.registry.program.s2.project.api.entity

import city.smartb.registry.program.infra.redis.RedisRepository
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import java.util.Optional
import org.springframework.stereotype.Repository

@Repository
interface ProjectRepository: RedisRepository<ProjectEntity, ProjectId> {
    fun findByIdentifier(identifier: String): Optional<ProjectEntity>
}

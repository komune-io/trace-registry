package io.komune.registry.s2.project.api.entity

import io.komune.registry.infra.redis.RedisRepository
import io.komune.registry.s2.project.domain.model.ProjectId
import java.util.Optional
import org.springframework.stereotype.Repository

@Repository
interface ProjectRepository: RedisRepository<ProjectEntity, ProjectId> {
    fun findByIdentifier(identifier: String): Optional<ProjectEntity>
}

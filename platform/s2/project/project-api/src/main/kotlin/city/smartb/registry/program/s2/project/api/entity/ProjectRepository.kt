package city.smartb.registry.program.s2.project.api.entity

import com.redis.om.spring.repository.RedisDocumentRepository
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import java.util.Optional
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface ProjectRepository:
    CrudRepository<ProjectEntity, ProjectId>,
    PagingAndSortingRepository<ProjectEntity, ProjectId>,
    RedisDocumentRepository<ProjectEntity, ProjectId> {
    override fun findById(id: ProjectId): Optional<ProjectEntity>

}

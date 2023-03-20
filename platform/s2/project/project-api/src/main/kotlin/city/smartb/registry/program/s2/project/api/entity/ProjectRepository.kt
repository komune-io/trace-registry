package city.smartb.registry.program.s2.project.api.entity

import city.smartb.registry.program.s2.project.domain.model.ProjectId
import com.redis.om.spring.repository.RedisDocumentRepository
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository
import java.util.Optional

@Repository
interface ProjectRepository:
    CrudRepository<ProjectEntity, ProjectId>,
    PagingAndSortingRepository<ProjectEntity, ProjectId>,
    RedisDocumentRepository<ProjectEntity, ProjectId>
{
    override fun findById(id: ProjectId): Optional<ProjectEntity>

}

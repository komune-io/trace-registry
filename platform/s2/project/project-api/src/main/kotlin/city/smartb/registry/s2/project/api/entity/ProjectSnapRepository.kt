package city.smartb.registry.s2.project.api.entity

import city.smartb.registry.s2.project.domain.model.ProjectId
import org.springframework.stereotype.Service
import s2.sourcing.dsl.snap.SnapRepository

@Service
class ProjectSnapRepository(
    private val repository: ProjectRepository
): SnapRepository<ProjectEntity, ProjectId> {
    override suspend fun get(id: ProjectId): ProjectEntity? {
        return repository.findById(id).orElse(null)
    }

    override suspend fun remove(id: ProjectId): Boolean {
        repository.deleteById(id)
        return true
    }

    override suspend fun save(entity: ProjectEntity): ProjectEntity {
        return repository.save(entity)
    }
}

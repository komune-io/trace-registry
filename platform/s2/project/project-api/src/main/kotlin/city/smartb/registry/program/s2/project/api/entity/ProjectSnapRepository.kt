package city.smartb.registry.program.s2.project.api.entity

import city.smartb.registry.program.s2.project.domain.model.Project
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import org.springframework.stereotype.Service
import s2.sourcing.dsl.snap.SnapRepository

@Service
class ProjectSnapRepository(
    private val repository: ProjectRepository
): SnapRepository<Project, ProjectId> {
    override suspend fun get(id: ProjectId): Project? {
        return repository.findById(id).orElse(null)?.toProject()
    }

    override suspend fun remove(id: ProjectId): Boolean {
        repository.deleteById(id)
        return true
    }

    override suspend fun save(entity: Project): Project {
        return repository.save(entity.toEntity()).toProject()
    }
}

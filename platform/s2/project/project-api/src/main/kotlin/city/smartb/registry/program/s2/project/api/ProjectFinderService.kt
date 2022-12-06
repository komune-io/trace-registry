package city.smartb.registry.program.s2.project.api

import city.smartb.registry.program.api.commons.exception.NotFoundException
import city.smartb.registry.program.api.commons.model.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import city.smartb.registry.program.s2.project.api.entity.project.ProjectEntity
import city.smartb.registry.program.s2.project.api.entity.project.ProjectRepository
import city.smartb.registry.program.s2.project.api.entity.project.toProject
import city.smartb.registry.program.s2.project.api.query.ProjectPageQueryDB
import city.smartb.registry.program.s2.project.domain.ProjectFinder
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import city.smartb.registry.program.s2.project.domain.model.Project
import org.springframework.stereotype.Service

@Service
class ProjectFinderService(
	private val projectPageQueryDB: ProjectPageQueryDB,
	private val projectRepository: ProjectRepository
): ProjectFinder {
	override suspend fun getOrNull(id: ProjectId): Project? {
		return projectRepository.findById(id).orElse(null)?.toProject()
	}

	override suspend fun get(id: ProjectId): Project {
		return getOrNull(id) ?: throw NotFoundException("Project", id)
	}

	override suspend fun page(
		id: Match<ProjectId>?,
		offset: OffsetPagination?
	): PageDTO<Project> {
		return projectPageQueryDB.execute(
			id = id,
			offset = offset
		).map(ProjectEntity::toProject)
	}
}

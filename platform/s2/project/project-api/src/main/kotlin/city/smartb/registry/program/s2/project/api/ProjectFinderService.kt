package city.smartb.registry.program.s2.project.api

import city.smartb.registry.program.api.commons.exception.NotFoundException
import city.smartb.registry.program.api.commons.model.Match
import city.smartb.registry.program.s2.project.api.entity.ProjectEntity
import city.smartb.registry.program.s2.project.api.entity.ProjectRepository
import city.smartb.registry.program.s2.project.api.entity.toProject
import city.smartb.registry.program.s2.project.api.query.ProjectPageQueryDB
import city.smartb.registry.program.s2.project.domain.ProjectFinder
import city.smartb.registry.program.s2.project.domain.model.Project
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
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
		name: Match<String>?,
		offset: OffsetPagination?
	): PageDTO<Project> {
		return projectPageQueryDB.execute(
			id = id,
			name = name,
			offset = offset
		).map(ProjectEntity::toProject)
	}
}

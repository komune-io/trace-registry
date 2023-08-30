package city.smartb.registry.program.s2.project.api

import city.smartb.im.commons.auth.OrganizationId
import city.smartb.registry.program.api.commons.exception.NotFoundException
import city.smartb.registry.program.api.commons.model.FieldCriterion
import city.smartb.registry.program.api.commons.model.orCriterionOf
import city.smartb.registry.program.s2.project.api.entity.ProjectEntity
import city.smartb.registry.program.s2.project.api.entity.ProjectRepository
import city.smartb.registry.program.s2.project.api.entity.toProject
import city.smartb.registry.program.s2.project.api.query.ProjectPageQueryDB
import city.smartb.registry.program.s2.project.domain.ProjectFinder
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.model.Project
import city.smartb.registry.program.s2.project.domain.model.ProjectCriterionField
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import city.smartb.registry.program.s2.project.domain.model.ProjectIdentifier
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.Match
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

	override suspend fun getOrNullByIdentifier(id: ProjectIdentifier): Project? {
		return projectRepository.findByIdentifier(id).orElse(null)?.toProject()
	}

	override suspend fun get(id: ProjectId): Project {
		return getOrNull(id) ?: throw NotFoundException("Project", id)
	}

	override suspend fun page(
        id: Match<ProjectId>?,
        identifier: Match<ProjectIdentifier>?,
        name: Match<String>?,
        proponent: Match<String>?,
        type: Match<Int>?,
        estimatedReductions: Match<String>?,
        referenceYear: Match<String>?,
        dueDate: Match<Long>?,
		vintage: Match<String>?,
		origin: Match<String>?,
        status: Match<ProjectState>?,
        offset: OffsetPagination?,
		privateOrganizationId: OrganizationId?
	): PageDTO<Project> {
		return projectPageQueryDB.execute(
			id = id,
			identifier = identifier,
			name = name,
			proponent = proponent,
			type = type,
			estimatedReductions = estimatedReductions,
			referenceYear = referenceYear,
			vintage = vintage,
			dueDate = dueDate,
			origin = origin,
			status = status,
			offset = offset,
			freeCriteria = privateOrganizationId?.let {
				orCriterionOf(
					FieldCriterion(
						ProjectCriterionField.Private,
						ExactMatch(false),
					),
					FieldCriterion(
						ProjectCriterionField.ProponentId,
						ExactMatch(it)
					)
				)
			}
		).map(ProjectEntity::toProject)
	}
}

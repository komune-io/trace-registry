package io.komune.registry.s2.project.api

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import io.komune.im.commons.model.OrganizationId
import io.komune.registry.s2.commons.exception.NotFoundException
import io.komune.registry.s2.commons.model.FieldCriterion
import io.komune.registry.s2.commons.model.orCriterionOf
import io.komune.registry.s2.project.api.entity.ProjectEntity
import io.komune.registry.s2.project.api.entity.ProjectRepository
import io.komune.registry.s2.project.api.entity.toProject
import io.komune.registry.s2.project.api.query.ProjectPageQueryDB
import io.komune.registry.s2.project.domain.ProjectFinder
import io.komune.registry.s2.project.domain.automate.ProjectState
import io.komune.registry.s2.project.domain.model.Project
import io.komune.registry.s2.project.domain.model.ProjectCriterionField
import io.komune.registry.s2.project.domain.model.ProjectId
import io.komune.registry.s2.project.domain.model.ProjectIdentifier
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
		assetPools: CollectionMatch<String>?,
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
			dueDate = dueDate,
			assetPools = assetPools,
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

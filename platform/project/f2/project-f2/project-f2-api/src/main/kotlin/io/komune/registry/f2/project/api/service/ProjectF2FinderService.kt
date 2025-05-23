package io.komune.registry.f2.project.api.service

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.im.commons.model.OrganizationId
import io.komune.registry.f2.project.api.model.toDTO
import io.komune.registry.f2.project.domain.model.ProjectDTOBase
import io.komune.registry.s2.asset.api.AssetPoolFinderService
import io.komune.registry.s2.project.api.ProjectFinderService
import io.komune.registry.s2.project.domain.automate.ProjectState
import io.komune.registry.s2.project.domain.model.Project
import io.komune.registry.s2.project.domain.model.ProjectId
import io.komune.registry.s2.project.domain.model.ProjectIdentifier
import org.springframework.stereotype.Service

@Service
class ProjectF2FinderService(
//    private val cccevClient: CCCEVClient,
    private val projectFinderService: ProjectFinderService,
    private val assetPoolFinderService: AssetPoolFinderService,
) {
    suspend fun getOrNull(id: ProjectId): ProjectDTOBase? {
        return projectFinderService.getOrNull(id)?.toDTOWithVintage()
    }

   suspend fun getOrNullByIdentifier(id: ProjectIdentifier): ProjectDTOBase? {
        return projectFinderService.getOrNullByIdentifier(id)?.toDTOWithVintage()
    }

    suspend fun get(id: ProjectId): ProjectDTOBase {
        return projectFinderService.get(id).toDTOWithVintage()
    }

    suspend fun page(
        identifier: Match<ProjectIdentifier>? = null,
        name: Match<String>? = null,
        proponent: Match<String>? = null,
        type: Match<Int>? = null,
        estimatedReductions: Match<String>? = null,
        referenceYear: Match<String>? = null,
        assetPools: CollectionMatch<String>? = null,
        dueDate: Match<Long>? = null,
        status: Match<ProjectState>? = null,
        origin: Match<String>? = null,
        offset: OffsetPagination? = null,
        privateOrganizationId: OrganizationId? = null,
    ): PageDTO<ProjectDTOBase> {
        return projectFinderService.page(
            identifier = identifier,
            name = name,
            proponent = proponent,
            type = type,
            estimatedReductions = estimatedReductions,
            referenceYear = referenceYear,
            assetPools = assetPools,
            dueDate = dueDate,
            origin = origin,
            status = status,
            offset = offset,
            privateOrganizationId = privateOrganizationId
        ).map {it.toDTOWithVintage()}
    }

    suspend fun listFiles(id: ProjectId): List<FilePath> {
        val project = projectFinderService.get(id)

        val certificationId = project.certificationId
            ?: return emptyList()

//        val certification = CertificationGetQuery(
//            id = certificationId
//        ).invokeWith(cccevClient.certificationClient.certificationGet())
//            .certification

        // TODO wait until evidences are reimplemented in cccev
//        return certification?.evidences
//            .orEmpty()
//            .values
//            .flatten()
//            .mapNotNull(Evidence::file)
        return emptyList()
    }

    private suspend fun Project.toDTOWithVintage() = toDTO().apply {
        vintage = assetPools.mapNotNull {
            assetPoolFinderService.get(it).vintage
        }
    }
}

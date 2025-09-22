package io.komune.registry.control.f2.protocol.api

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import io.komune.fs.s2.file.client.FileClient
import io.komune.fs.spring.utils.serveFile
import io.komune.registry.control.core.cccev.requirement.entity.BadgeRepository
import io.komune.registry.control.f2.protocol.api.service.ProtocolF2FinderService
import io.komune.registry.control.f2.protocol.domain.query.BadgePageFunction
import io.komune.registry.control.f2.protocol.domain.query.BadgePageResult
import io.komune.registry.s2.commons.model.BadgeId
import io.komune.registry.s2.commons.model.BadgeLevelId
import jakarta.annotation.security.PermitAll
import org.springframework.context.annotation.Bean
import org.springframework.core.io.InputStreamResource
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
class BadgeEndpoint(
    private val badgeRepository: BadgeRepository,
    private val fileClient: FileClient,
    private val protocolF2FinderService: ProtocolF2FinderService
) {
    companion object {
        const val BADGE_IMAGE_PATH_ROOT = "/control/badgeGetImage/{badgeId}"
        const val BADGE_IMAGE_PATH_LEVEL = "/control/badgeGetImage/{badgeId}/{badgeLevelId}"

        fun badgeImagePath(badgeId: BadgeId, badgeLevelId: BadgeLevelId? = null): String {
            return BADGE_IMAGE_PATH_LEVEL.replace("{badgeId}", badgeId)
                .replace("{badgeLevelId}", badgeLevelId ?: "")
                .removeSuffix("/")
        }
    }

    private val logger by Logger()

    @PermitAll
    @GetMapping(BADGE_IMAGE_PATH_LEVEL, BADGE_IMAGE_PATH_ROOT)
    suspend fun badgeGetImage(
        @PathVariable badgeId: BadgeId,
        @PathVariable(required = false) badgeLevelId: BadgeLevelId?,
    ): ResponseEntity<InputStreamResource> = serveFile(fileClient) {
        logger.info("badgeGetImage: $badgeId, $badgeLevelId")
        val badge = badgeRepository.findById(badgeId)
            ?: return@serveFile null

        if (badgeLevelId == null) {
            badge.image
        } else {
            badge.levels.firstOrNull { it.id == badgeLevelId }?.image
        }
    }

    @PermitAll
    @Bean
    fun badgePage(): BadgePageFunction = f2Function { query ->
        logger.info("badgePage: $query")
        protocolF2FinderService.pageBadges(
            protocolType = query.protocolType,
            offset = OffsetPagination(
                offset = query.offset ?: 0,
                limit = query.limit ?: 10
            )
        ).let { page ->
            BadgePageResult(
                items = page.items,
                total = page.total
            )
        }
    }
}

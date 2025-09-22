package io.komune.registry.f2.catalogue.api.handler

import f2.dsl.cqrs.filter.ExactMatch
import io.komune.registry.api.commons.EventHandler
import io.komune.registry.control.core.cccev.certification.command.CertificationValidatedEvent
import io.komune.registry.control.f2.certification.api.service.CertificationF2FinderService
import io.komune.registry.s2.catalogue.api.CatalogueAggregateService
import io.komune.registry.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddBadgesCommand
import io.komune.registry.s2.catalogue.domain.model.CatalogueSearchableBadge
import org.springframework.context.event.EventListener
import org.springframework.stereotype.Component

@Component
class CatalogueBadgeIndexHandler(
    private val catalogueAggregateService: CatalogueAggregateService,
    private val catalogueFinderService: CatalogueFinderService,
    private val certificationF2FinderService: CertificationF2FinderService,
): EventHandler() {

    @EventListener
    suspend fun onCertificationValidated(event: CertificationValidatedEvent) = handleEvent(
        "CatalogueBadgeIndexHandler - onCertificationValidated - Certification [${event.id}]",
        { catalogueFinderService.page(certificationIds = ExactMatch(event.id)).items.ifEmpty { null } },
    ) { catalogues ->
        val certification = certificationF2FinderService.getRef(event.id, null)
        if (certification.badges.isEmpty()) {
            logger.info("Certification [${event.id}] has no badges, skipping badge indexing.")
            return@handleEvent
        }

        catalogues.forEach { catalogue ->
            logger.info("Indexing badges for Catalogue [${catalogue.id}] from Certification [${event.id}]...")
            CatalogueAddBadgesCommand(
                id = catalogue.id,
                badges = certification.badges.map { badgeCertification ->
                    CatalogueSearchableBadge(
                        id = badgeCertification.badgeId,
                        levelId = badgeCertification.badgeLevelId,
                        certificationId = event.id,
                        badgeCertificationId = badgeCertification.id,
                        value = badgeCertification.value
                    )
                }
            ).let { catalogueAggregateService.addBadges(it) }
        }
    }
}

package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CertificationId
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueStartCertificationCommand(
    override val id: CatalogueId,
    val certificationId: CertificationId
): CatalogueCommand

@Serializable
data class CatalogueStartedCertificationEvent(
    override val id: CatalogueId,
    override val date: Long,
    val certificationId: CertificationId
): CatalogueEvent

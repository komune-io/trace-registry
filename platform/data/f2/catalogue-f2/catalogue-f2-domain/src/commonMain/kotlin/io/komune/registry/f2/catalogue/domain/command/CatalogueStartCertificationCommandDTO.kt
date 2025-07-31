package io.komune.registry.f2.catalogue.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CertificationId
import io.komune.registry.s2.commons.model.RequirementId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias CatalogueStartCertificationFunction
        = F2Function<CatalogueStartCertificationCommandDTOBase, CatalogueStartedCertificationEventDTOBase>

@JsExport
interface CatalogueStartCertificationCommandDTO {
    val id: CatalogueId
    val protocolId: RequirementId
}

@Serializable
data class CatalogueStartCertificationCommandDTOBase(
    override val id: CatalogueId,
    override val protocolId: RequirementId
) : CatalogueStartCertificationCommandDTO

@JsExport
interface CatalogueStartedCertificationEventDTO {
    val id: CatalogueId
    val certificationId: CertificationId
}

@Serializable
data class CatalogueStartedCertificationEventDTOBase(
    override val id: CatalogueId,
    override val certificationId: CertificationId
) : CatalogueStartedCertificationEventDTO

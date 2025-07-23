package io.komune.registry.f2.catalogue.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.CatalogueId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias CatalogueClaimOwnershipFunction = F2Function<CatalogueClaimOwnershipCommandDTOBase, CatalogueClaimedOwnershipEventDTOBase>

@JsExport
interface CatalogueClaimOwnershipCommandDTO {
    val id: CatalogueId
}

@Serializable
data class CatalogueClaimOwnershipCommandDTOBase(
    override val id: CatalogueId
) : CatalogueClaimOwnershipCommandDTO

@JsExport
interface CatalogueClaimedOwnershipEventDTO {
    val id: CatalogueId
}

@Serializable
data class CatalogueClaimedOwnershipEventDTOBase(
    override val id: CatalogueId
) : CatalogueClaimedOwnershipEventDTO

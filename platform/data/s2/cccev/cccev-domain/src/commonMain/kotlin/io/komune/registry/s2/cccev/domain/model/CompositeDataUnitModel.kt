package io.komune.registry.s2.cccev.domain.model

import io.komune.registry.s2.commons.model.DataUnitId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CompositeDataUnitRefDTO {
    val leftUnitId: DataUnitId
    val rightUnitId: DataUnitId?
    val operator: CompositeDataUnitOperator?
}

@Serializable
data class CompositeDataUnitModel(
    override val leftUnitId: DataUnitId,
    override val rightUnitId: DataUnitId?,
    override val operator: CompositeDataUnitOperator?
) : CompositeDataUnitRefDTO

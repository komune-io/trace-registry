package io.komune.registry.f2.cccev.domain.unit.model

import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitOperator
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CompositeDataUnitDTO {
    val leftUnit: DataUnitDTO
    val rightUnit: DataUnitDTO?
    val operator: CompositeDataUnitOperator?
}

@Serializable
data class CompositeDataUnitDTOBase(
    override val leftUnit: DataUnitDTOBase,
    override val rightUnit: DataUnitDTOBase?,
    override val operator: CompositeDataUnitOperator?
) : CompositeDataUnitDTO

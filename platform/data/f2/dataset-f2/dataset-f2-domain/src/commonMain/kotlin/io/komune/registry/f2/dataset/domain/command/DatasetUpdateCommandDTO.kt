package io.komune.registry.f2.dataset.domain.command

import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.DatasetIdentifier
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Update a dataset.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 10
 */
typealias DatasetUpdateFunction = F2Function<DatasetUpdateCommandDTOBase, DatasetUpdatedEventDTOBase>

/**
 * @d2 command
 * @parent [DatasetUpdateFunction]
 */
@JsExport
@JsName("DatasetUpdateCommandDTO")
interface DatasetUpdateCommandDTO {
    val id: DatasetId

    /**
     * @ref [io.komune.registry.f2.dataset.domain.dto.DatasetDTO.title]
     */
    val title: String

    /**
     * @ref [io.komune.registry.f2.dataset.domain.dto.DatasetDTO.description]
     */
    val description: String?
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetUpdateCommandDTOBase(
    override val id: DatasetId,
    override val title: String,
    override val description: String?
): DatasetUpdateCommandDTO

/**
 * @d2 event
 * @parent [DatasetUpdateFunction]
 */
@JsExport
@JsName("DatasetUpdatedEventDTO")
interface DatasetUpdatedEventDTO: Event {
    /**
     * Identifier of the created dataset.
     */
    val id: DatasetId

    /**
     * Identifier of the created dataset.
     */
    val identifier: DatasetIdentifier
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetUpdatedEventDTOBase(
    override val id: DatasetId,
    override val identifier: DatasetIdentifier,
): DatasetUpdatedEventDTO

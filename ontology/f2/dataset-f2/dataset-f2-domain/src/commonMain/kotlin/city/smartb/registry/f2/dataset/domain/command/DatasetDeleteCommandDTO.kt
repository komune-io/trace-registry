package city.smartb.registry.f2.dataset.domain.command

import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import city.smartb.registry.s2.dataset.domain.command.DatasetDeleteCommand
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Delete a dataset
 * @d2 function
 * @parent
 */
typealias DatasetDeleteFunction = F2Function<DatasetDeleteCommand, DatasetDeletedEventDTOBase>


@JsExport
@JsName("DatasetDeleteCommandDTO")
interface DatasetDeleteCommandDTO: city.smartb.registry.s2.dataset.domain.command.DatasetDeleteCommandDTO


@JsExport
@JsName("DatasetDeletedEventDTO")
interface DatasetDeletedEventDTO {
    val id: DatasetId
}

data class DatasetDeleteCommandDTOBase(
    override val id: DatasetId
): DatasetDeleteCommandDTO

data class DatasetDeletedEventDTOBase(
    override val id: DatasetId
): DatasetDeletedEventDTO

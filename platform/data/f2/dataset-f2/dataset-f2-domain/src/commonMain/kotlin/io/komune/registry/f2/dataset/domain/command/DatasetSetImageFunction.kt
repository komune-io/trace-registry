package io.komune.registry.f2.dataset.domain.command

import f2.dsl.fnc.F2Function
import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.s2.commons.model.DatasetId
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Create a dataset.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 10
 */
typealias DatasetSetImageFunction = F2Function<
        Pair<DatasetSetImageCommandDTOBase, DatasetFile>, DatasetSetImageEventDTOBase
        >

@JsExport
interface DatasetSetImageCommandDTO{
    val id: DatasetId
}
@Serializable
data class DatasetSetImageCommandDTOBase(
    override val id: DatasetId,
): DatasetSetImageCommandDTO

@JsExport
interface DatasetSetImageEventDTO{
    val id: DatasetId
    val img: FilePath?
}

@Serializable
data class DatasetSetImageEventDTOBase(
    override val id: DatasetId,
    override val img: FilePath? = null,
): DatasetSetImageEventDTO


data class DatasetFile(
    val name: String,
    val content: ByteArray,
)

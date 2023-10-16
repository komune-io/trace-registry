package city.smartb.registry.f2.dataset.domain.command

import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Create a dataset.
 * @d2 function
 * @parent [city.smartb.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 10
 */
typealias DatasetSetImageFunction = F2Function<Pair<DatasetSetImageCommandDTOBase, DatasetFile>, DatasetSetImageEventDTOBase>

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
    val date: Long
}

@Serializable
data class DatasetSetImageEventDTOBase(
    override val id: DatasetId,
    override val img: FilePath? = null,
    override val date: Long
): DatasetSetImageEventDTO


data class DatasetFile(
    val name: String,
    val content: ByteArray,
)

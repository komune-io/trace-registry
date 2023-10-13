package city.smartb.registry.f2.catalogue.domain.command

import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Create a catalogue.
 * @d2 function
 * @parent [city.smartb.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 10
 */
typealias CatalogueSetImageFunction = F2Function<Pair<CatalogueSetImageCommandDTOBase, CatalogueFile>, CatalogueSetImageEventDTOBase>

@JsExport
interface CatalogueSetImageCommandDTO{
    val id: CatalogueId
}
@Serializable
data class CatalogueSetImageCommandDTOBase(
    override val id: CatalogueId,
): CatalogueSetImageCommandDTO

@JsExport
interface CatalogueSetImageEventDTO{
    val id: CatalogueId
    val img: FilePath?
    val date: Long
}

@Serializable
data class CatalogueSetImageEventDTOBase(
    override val id: CatalogueId,
    override val img: FilePath? = null,
    override val date: Long
): CatalogueSetImageEventDTO


data class CatalogueFile(
    val name: String,
    val content: ByteArray,
)

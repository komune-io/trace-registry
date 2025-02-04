package io.komune.registry.f2.catalogue.domain.command

import f2.dsl.fnc.F2Function
import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.commons.model.SimpleFile
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Create a catalogue.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 10
 */
typealias CatalogueSetImageFunction = F2Function<
            Pair<CatalogueSetImageCommandDTOBase, SimpleFile>, CatalogueSetImageEventDTOBase
        >

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

package city.smartb.registry.f2.dataset.domain.command

import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import city.smartb.registry.s2.catalogue.domain.model.SkosConcept
import f2.dsl.fnc.F2Function
import f2.dsl.cqrs.Event
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable


typealias DatasetLinkThemesFunction = F2Function<
        DatasetLinkThemesCommandDTOBase,
        DatasetLinkedThemesEventDTOBase
        >

@JsExport
@JsName("DatasetLinkThemesCommandDTO")
interface DatasetLinkThemesCommandDTO {
    val id: DatasetId
    val themes: List<SkosConcept>
}


@Serializable
data class DatasetLinkThemesCommandDTOBase(
    override val id: DatasetId,
    override val themes: List<SkosConcept>
): DatasetLinkThemesCommandDTO


@JsExport
@JsName("DatasetLinkThemesEventDTO")
interface DatasetLinkedThemesEventDTO: Event {
    val id: DatasetId

    val themes: List<SkosConcept>
}

@Serializable
data class DatasetLinkedThemesEventDTOBase(
    override val id: DatasetId,
    override val themes: List<SkosConcept>
): DatasetLinkedThemesEventDTO

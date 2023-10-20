package city.smartb.registry.f2.catalogue.domain.dto

import city.smartb.registry.dsl.skos.domain.model.SkosConcept
import city.smartb.registry.f2.dataset.domain.dto.DatasetDTO
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueState
import city.smartb.registry.s2.structure.domain.model.Structure
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

@JsExport
interface CatalogueDTO{
    val id: String
    val identifier: String
    val description: String?
    val homepage: String?
    val title: String
    val img: String?
    val type: String
    val structure: Structure?
    val themes: List<SkosConcept>?
    val datasets: List<DatasetDTO>?
//    val services: List<DataService>
    val catalogues: List<CatalogueRefDTO>?
    val status: CatalogueState
}

@Serializable
data class CatalogueDTOBase(
    override val id: String,
    override val identifier: String,
    override val description: String?,
    override val homepage: String? = null,
    override val title: String,
    override val img: String? = null,
    override val type: String,
    override val structure: Structure? = null,
    override val themes: List<SkosConcept>? = null,
    override val datasets: List<DatasetDTO>? = null,
    override val catalogues: List<CatalogueRefDTOBase>? = null,
    override val status: CatalogueState,
): CatalogueDTO

@JsExport
interface CatalogueRefDTO {
    val id: String
    val identifier: String
    val title: String
    val type: String
    val description: String?
    val homepage: String?
    val img: String?
    val structure: Structure?
    val themes: List<SkosConcept>?
    val status: CatalogueState?
}


@Serializable
data class CatalogueRefDTOBase(
    override val id: String,
    override val identifier: String,
    override val title: String,
    override val type: String,
    override val description: String? = null,
    override val homepage: String? = null,
    override val img: String? = null,
    override val structure: Structure? = null,
    override val themes: List<SkosConcept>? = null,
    override val status: CatalogueState? = null,
): CatalogueRefDTO

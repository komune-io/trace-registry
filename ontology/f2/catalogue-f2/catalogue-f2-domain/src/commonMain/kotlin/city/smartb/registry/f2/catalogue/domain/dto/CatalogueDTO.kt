package city.smartb.registry.f2.catalogue.domain.dto

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueState
import city.smartb.registry.s2.catalogue.domain.model.SkosConcept
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
    val themes: List<SkosConcept>?
    //    val datasets: List<DcatDataset
//    val services: List<DataService>
    val catalogues: List<CatalogueRefDTO>?
    //    val catalogueRecords: List<DcatCatalogueRecord>
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
    override val themes: List<SkosConcept>? = null,
//    val datasets: List<DcatDataset>? = null,
//    val services: List<DataService>? = null,
    override val catalogues: List<CatalogueRefDTOBase>? = null,
//    val catalogueRecords: List<DcatCatalogueRecord>? = null,
    override val status: CatalogueState,
): CatalogueDTO

@JsExport
interface CatalogueRefDTO {
    val id: String
    val identifier: String
    val description: String?
    val homepage: String?
    val title: String
    val img: String?
    val type: String
    val themes: List<SkosConcept>?
    val status: CatalogueState
}


@Serializable
data class CatalogueRefDTOBase(
    override val id: String,
    override val identifier: String,
    override val description: String?,
    override val homepage: String? = null,
    override val title: String,
    override val img: String? = null,
    override val type: String,
    override val themes: List<SkosConcept>? = null,
    override val status: CatalogueState,
): CatalogueRefDTO

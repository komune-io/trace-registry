package city.smartb.registry.s2.catalogue.domain.model

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueState
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueModel(
    val id: String,
    val identifier: String,
    val description: String?,
    val homepage: String? = null,
    val title: String,
    val img: String? = null,
    val type: String,
    val themes: List<SkosConcept>? = null,
//    val datasets: List<DcatDataset>? = null,
//    val services: List<DataService>? = null,
    val catalogues: List<CatalogueId>? = null,
//    val catalogueRecords: List<DcatCatalogueRecord>? = null,
    val status: CatalogueState,
)

package io.komune.registry.s2.catalogue.domain.model

import io.komune.registry.dsl.skos.domain.model.SkosConcept
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.command.DatasetId
import io.komune.registry.s2.structure.domain.model.Structure
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
    var structure: Structure? = null,
    val themes: List<SkosConcept>? = null,
    val datasets: List<DatasetId>? = null,
//    val services: List<DataService>? = null,
    val catalogues: List<CatalogueId>? = null,
//    val catalogueRecords: List<DcatCatalogueRecord>? = null,
    val status: CatalogueState,
)

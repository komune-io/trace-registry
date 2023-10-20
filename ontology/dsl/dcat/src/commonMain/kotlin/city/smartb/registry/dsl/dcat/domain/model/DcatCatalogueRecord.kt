package city.smartb.registry.dsl.dcat.domain.model

import city.smartb.registry.dsl.skos.domain.model.SkosConceptScheme
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

@JsExport
interface DcatCatalogueRecord {
    val identifier: String
    val title: String
    val description: String?
    val listingDate: String?
    val updateDate: String?
    val primaryTopic: CataloguedResource?
    val conformsTo: List<SkosConceptScheme>?
}

@Serializable
data class DcatCatalogRecordModel(
    override val identifier: String,
    override val title: String,
    override val description: String? = null,
    override val listingDate: String? = null,
    override val updateDate: String? = null,
    override val primaryTopic: CataloguedResource? = null,
    override val conformsTo: List<SkosConceptScheme>? = null
): DcatCatalogueRecord

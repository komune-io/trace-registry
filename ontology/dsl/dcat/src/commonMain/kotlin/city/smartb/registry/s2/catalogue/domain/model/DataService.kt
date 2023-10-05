package city.smartb.registry.s2.catalogue.domain.model

import kotlin.js.JsExport
import kotlinx.serialization.Serializable

@JsExport
interface DataService {
    val identifier: String
    val endpointURL: String
    val endpointDescription: String?
    val servesDataset: List<DcatDataset>?
}

@Serializable
data class DataServiceModel(
    override val identifier: String,
    override val endpointURL: String,
    override val endpointDescription: String? = null,
    override val servesDataset: List<DcatDataset>? = null
): DataService

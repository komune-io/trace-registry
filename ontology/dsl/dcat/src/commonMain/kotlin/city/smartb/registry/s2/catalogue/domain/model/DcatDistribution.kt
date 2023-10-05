package city.smartb.registry.s2.catalogue.domain.model

import kotlin.js.JsExport
import kotlinx.serialization.Serializable

@JsExport
interface DcatDistribution {
    val identifier: String
    val accessURL: String?
    val accessService: DataService?
    val downloadURL: String?
    val byteSize: Long?
    val spatialResolution: String?
    val temporalResolution: String?
    val conformsTo: List<SkosConceptScheme>?
    val mediaType: String?
    val format: String?
    val compressionFormat: String?
    val packagingFormat: String?
    val checksum: Checksum?
}


@Serializable
data class DcatDistributionModel(
    override val identifier: String,
    override val accessURL: String? = null,
    override val accessService: DataService? = null,
    override val downloadURL: String? = null,
    override val byteSize: Long? = null,
    override val spatialResolution: String? = null,
    override val temporalResolution: String? = null,
    override val conformsTo: List<SkosConceptScheme>? = null,
    override val mediaType: String? = null,
    override val format: String? = null,
    override val compressionFormat: String? = null,
    override val packagingFormat: String? = null,
    override val checksum: Checksum? = null
): DcatDistribution


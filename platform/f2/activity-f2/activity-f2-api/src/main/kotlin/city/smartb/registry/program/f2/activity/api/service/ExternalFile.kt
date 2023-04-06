package city.smartb.registry.program.f2.activity.api.service

import kotlinx.serialization.Serializable
interface ExternalFileDTO {
    val name: String
    val url: String
    val metadata: Map<String, String>?
}

data class ExternalFile(
    override val name: String,
    override val url: String,
    override val metadata: Map<String, String> = emptyMap()
): ExternalFileDTO

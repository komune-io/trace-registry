package city.smartb.registry.program.s2.project.domain.model

import cccev.s2.certification.domain.model.CertificationId
import cccev.s2.certification.domain.model.CertificationIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("CertificationRefDTO")
interface CertificationRefDTO {
    val id: CertificationId
    val identifier: CertificationIdentifier
}

@Serializable
data class CertificationRef(
    override val id: CertificationId,
    override val identifier: CertificationIdentifier,
): CertificationRefDTO

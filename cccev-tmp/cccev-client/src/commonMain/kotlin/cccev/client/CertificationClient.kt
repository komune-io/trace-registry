package cccev.client

import io.komune.registry.control.core.cccev.certification.command.CertificationAddRequirementsFunction
import io.komune.registry.control.core.cccev.certification.command.CertificationCreateFunction
import io.komune.registry.control.core.cccev.certification.command.CertificationFillValuesFunction
import io.komune.registry.control.core.cccev.certification.command.CertificationRemoveRequirementsFunction
import cccev.f2.certification.CertificationApi
import cccev.f2.certification.query.CertificationGetFunction
import f2.client.F2Client
import f2.client.function
import f2.dsl.fnc.F2SupplierSingle
import kotlin.js.JsExport

expect fun F2Client.certificationClient(): F2SupplierSingle<CertificationClient>
expect fun certificationClient(urlBase: String): F2SupplierSingle<CertificationClient>

@JsExport
open class CertificationClient constructor(val client: F2Client): CertificationApi {
    override fun certificationGet(): CertificationGetFunction
        = client.function(this::certificationGet.name)
    override fun certificationCreate(): CertificationCreateFunction
        = client.function(this::certificationCreate.name)
    override fun certificationAddRequirements(): CertificationAddRequirementsFunction
        = client.function(this::certificationAddRequirements.name)
    override fun certificationRemoveRequirements(): CertificationRemoveRequirementsFunction
        = client.function(this::certificationRemoveRequirements.name)
    override fun certificationFillValues(): CertificationFillValuesFunction
        = client.function(this::certificationFillValues.name)
//    override fun certificationRemoveEvidence(): CertificationRemoveEvidenceFunction
//        = client.function(this::certificationRemoveEvidence.name)
}

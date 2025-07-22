package cccev.client

import cccev.core.evidencetype.command.EvidenceTypeCreateFunction
import cccev.f2.evidencetype.EvidenceTypeApi
import cccev.f2.evidencetype.query.EvidenceTypeGetFunction
import f2.client.F2Client
import f2.client.function
import f2.dsl.fnc.F2SupplierSingle
import kotlin.js.JsExport

expect fun F2Client.evidenceTypeClient(): F2SupplierSingle<EvidenceTypeClient>
expect fun evidenceTypeClient(urlBase: String): F2SupplierSingle<EvidenceTypeClient>

@JsExport
open class EvidenceTypeClient constructor(private val client: F2Client): EvidenceTypeApi {
    override fun evidenceTypeCreate(): EvidenceTypeCreateFunction
        = client.function(this::evidenceTypeCreate.name)
    override fun evidenceTypeGet(): EvidenceTypeGetFunction
        = client.function(this::evidenceTypeGet.name)
}

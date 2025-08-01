package cccev.client

import io.komune.registry.control.core.cccev.concept.command.InformationConceptCreateFunction
import io.komune.registry.control.core.cccev.concept.command.InformationConceptUpdateFunction
import cccev.f2.concept.InformationConceptApi
import cccev.f2.concept.query.InformationConceptGetByIdentifierFunction
import cccev.f2.concept.query.InformationConceptGetFunction
import f2.client.F2Client
import f2.client.function
import f2.dsl.fnc.F2SupplierSingle
import kotlin.js.JsExport

expect fun F2Client.informationConceptClient(): F2SupplierSingle<InformationConceptClient>
expect fun informationConceptClient(urlBase: String): F2SupplierSingle<InformationConceptClient>

@JsExport
open class InformationConceptClient constructor(private val client: F2Client): InformationConceptApi {
    override fun conceptCreate(): InformationConceptCreateFunction = client.function(this::conceptCreate.name)
    override fun conceptUpdate(): InformationConceptUpdateFunction = client.function(this::conceptUpdate.name)
    override fun conceptGet(): InformationConceptGetFunction = client.function(this::conceptGet.name)
    override fun conceptGetByIdentifier(): InformationConceptGetByIdentifierFunction = client.function(this::conceptGetByIdentifier.name)
}

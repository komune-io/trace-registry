package cccev.client

import io.komune.registry.core.cccev.requirement.command.RequirementAddConceptsFunction
import io.komune.registry.core.cccev.requirement.command.RequirementAddEvidenceTypesFunction
import io.komune.registry.core.cccev.requirement.command.RequirementAddRequirementsFunction
import io.komune.registry.core.cccev.requirement.command.RequirementCreateFunction
import io.komune.registry.core.cccev.requirement.command.RequirementRemoveConceptsFunction
import io.komune.registry.core.cccev.requirement.command.RequirementRemoveEvidenceTypesFunction
import io.komune.registry.core.cccev.requirement.command.RequirementRemoveRequirementsFunction
import io.komune.registry.core.cccev.requirement.command.RequirementUpdateFunction
import cccev.f2.requirement.RequirementApi
import cccev.f2.requirement.query.RequirementGetByIdentifierFunction
import cccev.f2.requirement.query.RequirementGetFunction
import f2.client.F2Client
import f2.client.function
import f2.dsl.fnc.F2SupplierSingle
import kotlin.js.JsExport

expect fun F2Client.requirementClient(): F2SupplierSingle<RequirementClient>
expect fun requirementClient(urlBase: String): F2SupplierSingle<RequirementClient>

@JsExport
open class RequirementClient constructor(private val client: F2Client): RequirementApi {
    override fun requirementGet(): RequirementGetFunction = client.function(this::requirementGet.name)
    override fun requirementGetByIdentifier(): RequirementGetByIdentifierFunction
            = client.function(this::requirementGetByIdentifier.name)

    override fun requirementCreate(): RequirementCreateFunction = client.function(this::requirementCreate.name)
    override fun requirementUpdate(): RequirementUpdateFunction = client.function(this::requirementUpdate.name)
    override fun requirementAddRequirements(): RequirementAddRequirementsFunction
            = client.function(this::requirementAddRequirements.name)
    override fun requirementRemoveRequirements(): RequirementRemoveRequirementsFunction
            = client.function(this::requirementRemoveRequirements.name)
    override fun requirementAddConcepts(): RequirementAddConceptsFunction = client.function(this::requirementAddConcepts.name)
    override fun requirementRemoveConcepts(): RequirementRemoveConceptsFunction = client.function(this::requirementRemoveConcepts.name)
    override fun requirementAddEvidenceTypes(): RequirementAddEvidenceTypesFunction
            = client.function(this::requirementAddEvidenceTypes.name)
    override fun requirementRemoveEvidenceTypes(): RequirementRemoveEvidenceTypesFunction
            = client.function(this::requirementRemoveEvidenceTypes.name)
}

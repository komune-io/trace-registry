package cccev.f2.requirement

import cccev.core.requirement.command.RequirementAddRequirementsFunction
import cccev.core.requirement.command.RequirementCreateFunction
import cccev.core.requirement.command.RequirementUpdateFunction
import cccev.f2.requirement.query.RequirementGetByIdentifierFunction
import cccev.f2.requirement.query.RequirementGetFunction

/**
 * @d2 api
 * @parent [cccev.core.requirement.D2RequirementPage]
 */
interface RequirementApi: RequirementQueryApi, RequirementCommandApi

interface RequirementCommandApi {
    /** Create a requirement */
    fun requirementCreate(): RequirementCreateFunction

    /** Update a requirement */
    fun requirementUpdate(): RequirementUpdateFunction

    /** Add sub-requirements to a requirement */
    fun requirementAddRequirements(): RequirementAddRequirementsFunction
}

interface RequirementQueryApi {
    /** Get requirement **/
    fun requirementGet(): RequirementGetFunction
    fun requirementGetByIdentifier(): RequirementGetByIdentifierFunction
}

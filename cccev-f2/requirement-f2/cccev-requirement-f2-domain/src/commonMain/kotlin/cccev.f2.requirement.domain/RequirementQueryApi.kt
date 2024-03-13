package cccev.f2.requirement.domain

import cccev.f2.requirement.domain.query.RequirementGetByIdentifierFunction
import cccev.f2.requirement.domain.query.RequirementGetFunction

interface RequirementQueryApi {
    /** Get requirement **/
    fun requirementGet(): RequirementGetFunction
    fun requirementGetByIdentifier(): RequirementGetByIdentifierFunction
}

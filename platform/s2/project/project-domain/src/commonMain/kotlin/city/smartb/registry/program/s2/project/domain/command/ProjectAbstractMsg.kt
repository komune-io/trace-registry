package city.smartb.registry.program.s2.project.domain.command

import city.smartb.registry.program.api.commons.model.GeoLocation
import city.smartb.registry.program.s2.project.domain.model.ActivityId
import city.smartb.registry.program.s2.project.domain.model.DateTime
import city.smartb.registry.program.s2.project.domain.model.OrganizationRef
import city.smartb.registry.program.s2.project.domain.model.SdgNumber

interface ProjectAbstractMsg {
    var name: String
    var country: String?
    var subContinent: String?
    var identifier: String?
    var creditingPeriodStartDate: DateTime?
    var creditingPeriodEndDate: DateTime?
    var description: String?
    var dueDate: DateTime?
    var estimatedReduction: String?
    var localization: String?
    var proponent: OrganizationRef?
    var type: String?
    var referenceYear: String?
    var registrationDate: DateTime?
    var slug: String?
    var vintage: String?
    var vvb: OrganizationRef?
    var assessor: OrganizationRef?
    var location: GeoLocation?
    var sdgs: List<SdgNumber>?
    var activities: List<ActivityId>?
}

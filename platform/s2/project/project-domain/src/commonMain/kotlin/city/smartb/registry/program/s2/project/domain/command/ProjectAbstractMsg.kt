package city.smartb.registry.program.s2.project.domain.command

import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.model.DateTime
import city.smartb.registry.program.s2.project.domain.model.OrganizationRef

interface ProjectAbstractMsg {
    var name: String
    var country: String?
    var identifier: String?
    var creditingPeriodStartDate: DateTime?
    var creditingPeriodEndDate: DateTime?
    var description: String?
    var dueDate: DateTime?
    var estimatedReduction: String?
    var localization: String?
    var proponentAccount: OrganizationRef?
    var proponent: String?
    var type: String?
    var referenceYear: String?
    var registrationDate: DateTime?
    var slug: Double?
    val vintage: Double?
}

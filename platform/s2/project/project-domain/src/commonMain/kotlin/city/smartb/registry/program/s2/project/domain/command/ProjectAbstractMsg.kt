package city.smartb.registry.program.s2.project.domain.command

import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.model.DateTime
import city.smartb.registry.program.s2.project.domain.model.OrganizationRef

interface ProjectAbstractMsg {
    var identifier: String
    var name: String
    var country: String?
    var creditingPeriodStartDate: DateTime?
    var creditingPeriodEndDate: DateTime?
    var description: String?
    var dueDate: DateTime?
    var estimatedReduction: String?
    var localization: String?
    var proponentAccount: OrganizationRef?
    var proponent: String?
    var projectType: String?
    var referenceYear: String?
    var registrationDate: DateTime?
    var status: ProjectState
    var slug: Double?
}

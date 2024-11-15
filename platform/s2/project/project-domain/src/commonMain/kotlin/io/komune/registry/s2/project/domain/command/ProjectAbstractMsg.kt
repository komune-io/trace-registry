package io.komune.registry.s2.project.domain.command

import io.komune.registry.s2.asset.domain.command.pool.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.GeoLocation
import io.komune.registry.s2.project.domain.model.ActivityIdentifier
import io.komune.registry.s2.project.domain.model.DateTime
import io.komune.registry.s2.project.domain.model.OrganizationRef
import io.komune.registry.s2.project.domain.model.SdgNumber

interface ProjectAbstractMsg {
    var name: String
    var country: String?
    var subContinent: String?
    var identifier: String?
    var indicator: InformationConceptIdentifier
    var creditingPeriodStartDate: DateTime?
    var creditingPeriodEndDate: DateTime?
    var description: String?
    var dueDate: DateTime?
    var estimatedReduction: String?
    var localization: String?
    var proponent: OrganizationRef?
    var type: Int?
    var referenceYear: String?
    var registrationDate: DateTime?
    var slug: String?
    var vintage: String?
    var vvb: OrganizationRef?
    var assessor: OrganizationRef?
    var location: GeoLocation?
    var sdgs: List<SdgNumber>?
    var activities: List<ActivityIdentifier>?
}

package io.komune.registry.s2.project.domain.command

import cccev.s2.concept.domain.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.GeoLocation
import io.komune.registry.s2.project.domain.model.ActivityIdentifier
import io.komune.registry.s2.project.domain.model.DateTime
import io.komune.registry.s2.project.domain.model.OrganizationRef
import io.komune.registry.s2.project.domain.model.SdgNumber

interface ProjectAbstractMsg {
    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.name]
     */
    var name: String

    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.country]
     */
    var country: String?

    /**
     * TODO does not exists in Project?
     */
    var subContinent: String?

    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.identifier]
     */
    var identifier: String?

    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.indicator]
     */
    var indicator: InformationConceptIdentifier

    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.creditingPeriodStartDate]
     */
    var creditingPeriodStartDate: DateTime?

    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.creditingPeriodEndDate]
     */
    var creditingPeriodEndDate: DateTime?

    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.description]
     */
    var description: String?

    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.dueDate]
     */
    var dueDate: DateTime?

    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.estimatedReductions]
     */
    var estimatedReduction: String?

    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.localization]
     */
    var localization: String?

    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.proponent]
     */
    var proponent: OrganizationRef?

    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.type]
     */
    var type: Int?

    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.referenceYear]
     */
    var referenceYear: String?

    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.registrationDate]
     */
    var registrationDate: DateTime?

    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.slug]
     */
    var slug: String?

    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.vintage]
     */
    var vintage: String?

    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.vvb]
     */
    var vvb: OrganizationRef?

    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.assessor]
     */
    var assessor: OrganizationRef?

    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.location]
     */
    var location: GeoLocation?

    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.sdgs]
     */
    var sdgs: List<SdgNumber>?

    /**
     * @ref [io.komune.registry.s2.project.domain.model.Project.activities]
     */
    var activities: List<ActivityIdentifier>?
}

package io.komune.registry.control.core.cccev.certification.entity

import io.komune.registry.control.core.cccev.requirement.entity.Badge
import io.komune.registry.control.core.cccev.requirement.entity.BadgeLevel
import io.komune.registry.s2.commons.model.BadgeCertificationId
import org.neo4j.ogm.annotation.Id
import org.neo4j.ogm.annotation.NodeEntity
import org.neo4j.ogm.annotation.Relationship

@NodeEntity(Badge.LABEL)
class BadgeCertification {
    companion object {
        const val LABEL = "BadgeCertification"

        const val CERTIFIES = "CERTIFIES"
        const val HAS_LEVEL = "HAS_LEVEL"
        const val USES_VALUE = "USES_VALUE"
    }

    @Id
    lateinit var id: BadgeCertificationId

    @Relationship(CERTIFIES)
    lateinit var badge: Badge

    @Relationship(HAS_LEVEL)
    var level: BadgeLevel? = null

    @Relationship(USES_VALUE)
    var value: SupportedValue? = null
}

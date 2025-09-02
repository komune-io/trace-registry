package io.komune.registry.control.core.cccev.requirement.entity

import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.control.core.cccev.concept.entity.InformationConcept
import io.komune.registry.s2.commons.model.BadgeId
import org.neo4j.ogm.annotation.Id
import org.neo4j.ogm.annotation.NodeEntity
import org.neo4j.ogm.annotation.Relationship

@NodeEntity(Badge.LABEL)
class Badge {
    companion object {
        const val LABEL = "Badge"

        const val IS_BASED_ON = "IS_BASED_ON"
        const val HAS_LEVEL = "HAS_LEVEL"
    }

    @Id
    lateinit var id: BadgeId

    lateinit var name: String

    @Relationship(IS_BASED_ON)
    lateinit var informationConcept: InformationConcept

    private var imagePath: String? = null
    var image: FilePath?
        get() = imagePath?.let { FilePath.from(it) }
        set(value) { imagePath = value?.toString() }

    @Relationship(HAS_LEVEL)
    var levels: MutableList<BadgeLevel> = mutableListOf()
}

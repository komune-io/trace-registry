package io.komune.registry.control.core.cccev.requirement.entity

import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.s2.commons.model.BadgeLevelId
import io.komune.registry.s2.commons.model.BadgeLevelIdentifier
import org.neo4j.ogm.annotation.Id
import org.neo4j.ogm.annotation.NodeEntity

@NodeEntity(BadgeLevel.LABEL)
class BadgeLevel {
    companion object {
        const val LABEL = "BadgeLevel"
    }

    @Id
    lateinit var id: BadgeLevelId

    lateinit var identifier: BadgeLevelIdentifier

    lateinit var name: String

    var color: String? = null

    private var imagePath: String? = null
    var image: FilePath?
        get() = imagePath?.let { FilePath.from(it) }
        set(value) { imagePath = value?.toString() }

    var level: Int = 0

    var expression: String? = null
}

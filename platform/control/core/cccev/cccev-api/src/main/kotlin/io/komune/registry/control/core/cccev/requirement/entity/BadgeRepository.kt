package io.komune.registry.control.core.cccev.requirement.entity

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.Page
import io.komune.registry.infra.neo4j.returnWholeEntity
import io.komune.registry.infra.neo4j.session
import io.komune.registry.s2.commons.model.BadgeId
import org.neo4j.ogm.session.SessionFactory
import org.springframework.stereotype.Service

@Service
class BadgeRepository(
    private val sessionFactory: SessionFactory
) {
    suspend fun findById(id: BadgeId): Badge? = sessionFactory.session { session ->
        session.query(
            "MATCH (badge:${Badge.LABEL} {id: \$id})"
                .returnWholeEntity("badge"),
            mapOf("id" to id)
        ).map { it["badge"] as Badge }
            .firstOrNull()
    }

    suspend fun findShallowById(id: BadgeId): Badge? = sessionFactory.session { session ->
        session.queryForObject(
            Badge::class.java,
            "MATCH (badge:${Badge.LABEL} {id: \$id})" +
                    "\nRETURN badge",
            mapOf("id" to id)
        )
    }

    suspend fun findAllById(ids: Collection<BadgeId>): List<Badge> = sessionFactory.session { session ->
        if (ids.isEmpty()) {
            return@session emptyList()
        }
        session.query(
            "MATCH (badge:${Badge.LABEL}) WHERE badge.id IN \$ids"
                .returnWholeEntity("badge"),
            mapOf("ids" to ids.toList())
        ).map { it["badge"] as Badge }
    }

    suspend fun page(
        requirementType: String,
        offset: OffsetPagination? = null
    ) = sessionFactory.session { session ->
        val result = session.query(
            "MATCH (requirement:${Requirement.LABEL} {type: \$requirementType})" +
                    "-[:${Requirement.HAS_BADGE}]->(badge:${Badge.LABEL})"
                        .returnWholeEntity("badge") + ", COUNT(badge) AS totalCount " +
                    "ORDER BY badge.name ASC" +
                    offset?.let { "\nSKIP ${it.offset} LIMIT ${it.limit}" }.orEmpty(),
            mapOf("requirementType" to requirementType)
        )


        val badges = result.map { it["badge"] as Badge }
        val totalCount = result.firstOrNull()?.get("totalCount") as? Long ?: 0
        Page(items = badges, total = totalCount.toInt())
    }
}

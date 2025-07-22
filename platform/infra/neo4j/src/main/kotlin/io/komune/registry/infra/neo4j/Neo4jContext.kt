package io.komune.registry.infra.neo4j

import org.neo4j.ogm.session.Session
import kotlin.coroutines.CoroutineContext

data class Neo4jContext(
    val session: Session
): CoroutineContext.Element {
    override val key: CoroutineContext.Key<*> = Key
    companion object Key: CoroutineContext.Key<Neo4jContext>
}

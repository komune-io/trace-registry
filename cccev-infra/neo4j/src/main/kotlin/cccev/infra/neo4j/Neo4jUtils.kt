package cccev.infra.neo4j

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.withContext
import org.neo4j.ogm.session.Session
import org.neo4j.ogm.session.SessionFactory
import org.neo4j.ogm.transaction.Transaction
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.EmptyCoroutineContext
import kotlin.coroutines.coroutineContext

@OptIn(ExperimentalCoroutinesApi::class)
suspend fun <T> SessionFactory.session(additionalContext: CoroutineContext = EmptyCoroutineContext, execute: suspend (Session) -> T): T {
    val session = coroutineContext[Neo4jContext]?.session
        ?: return withContext(
            Dispatchers.IO.limitedParallelism(1) // must stay on the same thread for transactions to work
                    + Neo4jContext(openSession())
                    + additionalContext
        ) { session(additionalContext, execute) }

    return execute(session)
}

suspend fun <T> SessionFactory.transaction(
    additionalContext: CoroutineContext = EmptyCoroutineContext,
    execute: suspend (Session, Transaction) -> T
): T {
    return session(additionalContext) { session ->
        session.beginTransaction().use { tx ->
            try {
                val result = execute(session, tx)
                tx.commit()
                result
            } catch (e: Exception) {
                tx.rollback()
                throw e
            }
        }
    }
}

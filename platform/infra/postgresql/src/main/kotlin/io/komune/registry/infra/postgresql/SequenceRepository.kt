package io.komune.registry.infra.postgresql

import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import org.springframework.r2dbc.BadSqlGrammarException
import org.springframework.r2dbc.core.DatabaseClient
import org.springframework.r2dbc.core.await
import org.springframework.r2dbc.core.awaitOne
import org.springframework.stereotype.Service
import java.util.concurrent.ConcurrentHashMap

@Service
class SequenceRepository(
    val client: DatabaseClient
) {
    private val mutexMap = ConcurrentHashMap<String, Mutex>()

    suspend fun nextValOf(sequence: String, startValue: Long = 1, increment: Long = 1): Long {
        val mutex = mutexMap.getOrPut(sequence) { Mutex() }
        return mutex.withLock { // synchronize access to the sequence to prevent duplicated creations
            try {
                nextVal(sequence)
            } catch (e: BadSqlGrammarException) {
                client.sql("CREATE SEQUENCE $sequence START WITH $startValue INCREMENT BY $increment;").await()
                nextVal(sequence)
            }
        }
    }

    private suspend fun nextVal(sequence: String): Long {
        return client.sql("SELECT nextval('$sequence');")
            .fetch()
            .awaitOne()
            .values
            .first() as Long
    }
}

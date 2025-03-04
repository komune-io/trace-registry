package io.komune.registry.infra.postgresql

import org.springframework.r2dbc.BadSqlGrammarException
import org.springframework.r2dbc.core.DatabaseClient
import org.springframework.r2dbc.core.await
import org.springframework.r2dbc.core.awaitOne
import org.springframework.stereotype.Service

@Service
class SequenceRepository(
    val client: DatabaseClient
) {
    suspend fun nextValOf(sequence: String, startValue: Long = 1, increment: Long = 1): Long {
        try {
            return client.sql("SELECT nextval('$sequence');")
                .fetch()
                .awaitOne()
                .values
                .first() as Long
        } catch (e: BadSqlGrammarException) {
            client.sql("CREATE SEQUENCE $sequence START WITH $startValue INCREMENT BY $increment;").await()
            return nextValOf(sequence)
        }
    }
}

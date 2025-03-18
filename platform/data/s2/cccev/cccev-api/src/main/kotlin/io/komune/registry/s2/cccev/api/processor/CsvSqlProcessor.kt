package io.komune.registry.s2.cccev.api.processor

import com.fasterxml.jackson.dataformat.csv.CsvMapper
import com.fasterxml.jackson.dataformat.csv.CsvSchema
import io.komune.registry.api.commons.utils.joinAppend
import io.komune.registry.s2.cccev.domain.model.CsvSqlProcessorInput
import java.sql.Connection
import java.sql.DriverManager

data object CsvSqlProcessor : Processor<CsvSqlProcessorInput> {
    const val TYPE_DECIMAL = "DECIMAL(20,6)"
    const val TYPE_VARCHAR = "VARCHAR(255)"
    const val TABLE_NAME = "data"

    init {
        Class.forName("org.hsqldb.jdbc.JDBCDriver")
    }

    override fun compute(input: CsvSqlProcessorInput): String {
        return executeCsvQuery(input.content, input.query) ?: input.valueIfEmpty
    }

    private fun executeCsvQuery(csvContent: ByteArray, query: String): String? {
        val csvString = String(csvContent)
        val separator = detectSeparator(csvString)

        val csvMapper = CsvMapper()
        val schema = CsvSchema.emptySchema().withHeader().withColumnSeparator(separator)
        val reader = csvMapper.readerFor(Map::class.java).with(schema)
        val rows = reader.readValues<Map<String, String>>(csvContent)
            .readAll()
            .ifEmpty { return null }

        return DriverManager.getConnection("jdbc:hsqldb:mem:mymemdb", "SA", "").use { connection ->
            connection.initTable(rows)

            val result = connection.createStatement().use {
                val rs = it.executeQuery(query)
                if (rs.next()) {
                    rs.getString(1)
                } else {
                    null
                }
            }

            connection.createStatement().use { it.executeQuery("DROP TABLE $TABLE_NAME") }

            result
        }
    }


    private fun Connection.initTable(rows: List<Map<String, String>>) {
        val headers = rows.first().keys
        val columnTypes = headers.associateWith { header ->
            inferType(rows.mapNotNull { it[header] })
        }

        val createTableSql = buildString {
            append("CREATE TABLE $TABLE_NAME (")
            joinAppend(headers, ", ") { header ->
                append("$header ${columnTypes[header]}")
            }
            append(")")
        }
        createStatement().use { it.execute(createTableSql) }

        val insertSQL = buildString {
            append("INSERT INTO $TABLE_NAME (")
            joinAppend(headers, ", ")
            append(") VALUES (")
            joinAppend(headers, ", ") { append("?") }
            append(")")
        }
        prepareStatement(insertSQL).use { preparedStatement ->
            rows.forEach {
                headers.forEachIndexed { index, header ->
                    when (columnTypes[header]) {
                        TYPE_DECIMAL -> preparedStatement.setBigDecimal(index + 1, it[header]?.toBigDecimal())
                        else -> preparedStatement.setString(index + 1, it[header])
                    }
                }
                preparedStatement.addBatch()
            }
            preparedStatement.executeBatch()
        }
    }

    private fun detectSeparator(csvString: String): Char {
        val potentialSeparators = listOf(',', ';', '\t')
        val lines = csvString.lines().take(5) // Analyze the first 5 lines
        val separatorCounts = potentialSeparators.associateWith { separator ->
            lines.sumOf { line -> line.count { it == separator } }
        }
        return separatorCounts.maxByOrNull { it.value }?.key ?: ','
    }

    fun inferType(values: Collection<String>): String {
        val nonEmptyValues = values.mapNotNull { it.trim().ifEmpty { null } }
            .take(1000)
            .ifEmpty { return TYPE_VARCHAR }

        return when {
            nonEmptyValues.all { it.toDoubleOrNull() != null } -> TYPE_DECIMAL
            else -> TYPE_VARCHAR
        }
    }
}

package io.komune.registry.s2.cccev.domain.model

import kotlin.js.JsExport

sealed interface ProcessorInput

@JsExport
enum class FileProcessorType {
    CSV_SQL
}

sealed interface FileProcessorInput : ProcessorInput {
    val query: String
    val content: ByteArray
    val valueIfEmpty: String
}

data class CsvSqlFileProcessorInput(
    override val query: String,
    override val content: ByteArray,
    override val valueIfEmpty: String
) : FileProcessorInput

@JsExport
enum class AggregatorType {
    SUM
}

sealed interface AggregatorInput : ProcessorInput {
    val values: Collection<String>
}

data class SumAggregatorInput(
    override val values: Collection<String>
) : AggregatorInput

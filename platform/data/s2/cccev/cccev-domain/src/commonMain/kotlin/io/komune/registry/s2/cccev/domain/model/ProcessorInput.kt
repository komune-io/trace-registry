package io.komune.registry.s2.cccev.domain.model

sealed interface ProcessorInput {
    val query: String
}

data class SumProcessorInput(
    val values: Collection<String>,
) : ProcessorInput {
    override val query: String = "SUM"
}

data class CsvSqlProcessorInput(
    override val query: String,
    val content: ByteArray,
    val valueIfEmpty: String
) : ProcessorInput

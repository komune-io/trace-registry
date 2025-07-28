package io.komune.registry.s2.cccev.api.processor

import io.komune.registry.s2.cccev.domain.model.CsvSqlFileProcessorInput
import io.komune.registry.s2.cccev.domain.model.ProcessorInput
import io.komune.registry.s2.cccev.domain.model.SumAggregatorInput

sealed interface Processor<in I : ProcessorInput> {
    companion object {
        fun compute(input: ProcessorInput): String = when (input) {
            is CsvSqlFileProcessorInput -> CsvSqlProcessor.compute(input)
            is SumAggregatorInput -> SumAggregator.compute(input)
        }
    }

    fun compute(input: I): String
}

fun ProcessorInput.compute(): String = Processor.compute(this)

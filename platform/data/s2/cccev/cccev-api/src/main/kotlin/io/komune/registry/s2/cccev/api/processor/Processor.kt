package io.komune.registry.s2.cccev.api.processor

import io.komune.registry.s2.cccev.domain.model.CsvSqlProcessorInput
import io.komune.registry.s2.cccev.domain.model.ProcessorInput
import io.komune.registry.s2.cccev.domain.model.SumProcessorInput

sealed interface Processor<in I : ProcessorInput> {
    companion object {
        fun compute(input: ProcessorInput): String = when (input) {
            is CsvSqlProcessorInput -> CsvSqlProcessor.compute(input)
            is SumProcessorInput -> SumProcessor.compute(input)
        }
    }

    fun compute(input: I): String
}

fun ProcessorInput.compute(): String = Processor.compute(this)

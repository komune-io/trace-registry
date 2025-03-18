package io.komune.registry.s2.cccev.api.processor

import io.komune.registry.s2.cccev.domain.model.SumProcessorInput

data object SumProcessor: Processor<SumProcessorInput> {
    override fun compute(input: SumProcessorInput): String {
        if (input.values.isEmpty()) {
            return input.valueIfEmpty
        }

        return input.values.sumOf { it.toBigDecimal() }.toString()
    }
}

package io.komune.registry.s2.cccev.api.processor

import io.komune.registry.s2.cccev.domain.model.SumAggregatorInput
import java.math.BigDecimal

data object SumAggregator: Processor<SumAggregatorInput> {
    override fun compute(input: SumAggregatorInput): String {
        return input.values.sumOf { it.toBigDecimalOrNull() ?: BigDecimal.ZERO }.toString()
    }
}

package io.komune.registry.ver.test.s2.asset.data

import com.ionspin.kotlin.bignum.decimal.BigDecimal
import io.komune.registry.s2.asset.domain.model.AssetTransactionType
import org.springframework.context.annotation.Configuration
import s2.bdd.data.parser.EntryParser

@Configuration
class BigDecimalTypeParser: EntryParser<BigDecimal>(
    output = BigDecimal::class,
    parseErrorMessage = "Expected ${AssetTransactionType::class.simpleName} value",
    parser = BigDecimal::parseString
)

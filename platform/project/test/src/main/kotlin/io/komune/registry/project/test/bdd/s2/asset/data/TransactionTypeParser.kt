package io.komune.registry.project.test.bdd.s2.asset.data

import io.komune.registry.s2.asset.domain.model.AssetTransactionType
import org.springframework.context.annotation.Configuration
import s2.bdd.data.parser.EntryParser

@Configuration
class TransactionTypeParser: EntryParser<AssetTransactionType>(
    output = AssetTransactionType::class,
    parseErrorMessage = "Expected ${AssetTransactionType::class.simpleName} value",
    parser = AssetTransactionType::valueOf
)

package io.komune.registry.test.control.core.cccev.unit.data

import io.komune.registry.control.core.cccev.unit.model.DataUnitType
import org.springframework.context.annotation.Configuration
import s2.bdd.data.parser.EntryParser
import kotlin.reflect.jvm.jvmName

@Configuration
class DataUnitTypeParser: EntryParser<DataUnitType>(
    output = DataUnitType::class,
    parseErrorMessage = "Expected ${DataUnitType::class.jvmName} values",
    parser = DataUnitType::valueOf
)

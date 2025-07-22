package io.komune.registry.test.control.core.cccev.requirement.data

import io.komune.registry.core.cccev.requirement.model.RequirementKind
import org.springframework.context.annotation.Configuration
import s2.bdd.data.parser.EntryParser
import kotlin.reflect.jvm.jvmName

@Configuration
class RequirementKindParser: EntryParser<RequirementKind>(
    output = RequirementKind::class,
    parseErrorMessage = "Expected ${RequirementKind::class.jvmName} value",
    parser = RequirementKind::valueOf
)

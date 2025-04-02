package io.komune.registry.script.imports.indicators

fun Collection<String>.toRegex() = joinToString("|", "^(", ")$").toRegex(RegexOption.IGNORE_CASE)

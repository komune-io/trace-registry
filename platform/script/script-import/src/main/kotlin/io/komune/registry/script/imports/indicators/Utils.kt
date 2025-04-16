package io.komune.registry.script.imports.indicators

fun Collection<String>.toRegex() = joinToString("|", "^(", ")$") {
    it.replace(Regex("""([()\[\]])""")) { matchResult -> "\\${matchResult.value}" }
}.toRegex(RegexOption.IGNORE_CASE)

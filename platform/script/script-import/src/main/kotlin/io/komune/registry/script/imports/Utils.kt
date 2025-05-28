package io.komune.registry.script.imports

import java.io.File

fun Collection<String>.toRegex() = joinToString("|", "^(", ")$") {
    it.replace(Regex("""([()\[\]])""")) { matchResult -> "\\${matchResult.value}" }
}.toRegex(RegexOption.IGNORE_CASE)

fun File.checkIsFile(): File {
    require(exists()) {
        "File [$path] does not exist"
    }
    require(isFile()) {
        "[$path] is not a file"
    }
    return this
}

fun File.checkIsDirectory(): File {
    require(exists()) {
        "Directory [$path] does not exist"
    }
    require(isDirectory) {
        "[$path] is not a directory"
    }
    return this
}

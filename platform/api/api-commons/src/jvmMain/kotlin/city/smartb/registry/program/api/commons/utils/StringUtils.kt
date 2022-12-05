package city.smartb.registry.program.api.commons.utils

fun String.toLocalDouble(): Double {
    if (this.isBlank()) return 0.0
    return this.replace(",", ".").toDouble()
}

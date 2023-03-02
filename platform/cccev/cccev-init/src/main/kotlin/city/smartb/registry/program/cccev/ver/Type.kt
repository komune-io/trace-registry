package city.smartb.registry.program.cccev.ver

import cccev.dsl.model.Code

sealed class Type(val identifier: String): Code {
    object Methodology: Type("Methodology")
    object Activities: Type("Activities")
    object Steps: Type("Steps")
}

package cccev.dsl.model.axess

import cccev.dsl.model.Code
import cccev.dsl.model.informationRequirement

object Methodology {
    object LocalConsultation: Code()
    object REDDPlus: Code()
    object VERRAVCS: Code()
}

val LocalConsultation = informationRequirement {
    identifier = "LocalConsultation"
    name = "Loc"
    type = cccev.dsl.model.axess.Methodology.LocalConsultation
}

val REDDPlus = informationRequirement {
    identifier = "REDD+"
    name = "REDD+"
    description = "La description Ici"
    type = cccev.dsl.model.axess.Methodology.REDDPlus

}

val VERRAVCS = informationRequirement {
    identifier = "VERRAVCS"
    name = "VERRA VCS"
    description = ""
    type = cccev.dsl.model.axess.Methodology.VERRAVCS
}

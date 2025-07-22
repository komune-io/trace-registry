package cccev.dsl.model.axess

import cccev.dsl.model.Code
import cccev.dsl.model.informationRequirement

object ProtocolStep {
    object Preparation: Code()
    object Validation: Code()
    object Certification: Code()
}


val ProtocolPreparation = informationRequirement {
    identifier = "ProtocolPreparation"
    name = "Protocol Preparation"
    type = cccev.dsl.model.axess.ProtocolStep.Preparation
}


val ProtocolValidation = informationRequirement {
    identifier = "ProtocolValidation"
    name = "Protocol Validation"
    type = cccev.dsl.model.axess.ProtocolStep.Validation
}

val ProtocolCertification = informationRequirement {
    identifier = "ProtocolCertification"
    name = "Protocol Certification"
    type = cccev.dsl.model.axess.ProtocolStep.Certification
}

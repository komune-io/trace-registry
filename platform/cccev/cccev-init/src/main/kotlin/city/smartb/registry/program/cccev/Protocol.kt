package city.smartb.registry.program.cccev

import  cccev.dsl.model.informationRequirement
import cccev.dsl.model.Code

object Protocol {
    object Preparation: Code
    object Validation: Code
    object Certification: Code
}


val ProtocolPreparation = informationRequirement {
    identifier = "ProtocolPreparation"
    name = "Protocol Preparation"
    type = Protocol.Preparation
}


val ProtocolValidation = informationRequirement {
    identifier = "ProtocolValidation"
    name = "Protocol Validation"
    type = Protocol.Validation
}

val ProtocolCertification = informationRequirement {
    identifier = "ProtocolCertification"
    name = "Protocol Certification"
    type = Protocol.Certification
}

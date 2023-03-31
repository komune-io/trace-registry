package city.smartb.registry.program.s2.project.domain.error

import city.smartb.registry.program.s2.project.domain.model.SdgNumber
import f2.dsl.cqrs.error.F2Error

class IllegalSdgError(sdg: SdgNumber): F2Error("Illegal SDG number: $sdg")


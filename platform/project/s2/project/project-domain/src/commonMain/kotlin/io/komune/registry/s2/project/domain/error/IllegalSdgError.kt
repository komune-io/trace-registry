package io.komune.registry.s2.project.domain.error

import f2.dsl.cqrs.error.F2Error
import io.komune.registry.s2.project.domain.model.SdgNumber

class IllegalSdgError(sdg: SdgNumber): F2Error("Illegal SDG number: $sdg")


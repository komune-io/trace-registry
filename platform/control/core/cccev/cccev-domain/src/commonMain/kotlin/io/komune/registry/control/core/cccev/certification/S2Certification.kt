package io.komune.registry.control.core.cccev.certification

import io.komune.registry.control.core.cccev.certification.command.CertificationAddEvidenceCommand
import io.komune.registry.control.core.cccev.certification.command.CertificationCreateCommand
import io.komune.registry.control.core.cccev.certification.command.CertificationFillValuesCommand
import io.komune.registry.control.core.cccev.certification.command.CertificationRejectCommand
import io.komune.registry.control.core.cccev.certification.command.CertificationSubmitCommand
import io.komune.registry.control.core.cccev.certification.command.CertificationValidateCommand
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2
import kotlin.js.JsExport

val s2Certification = s2 {
    name = "Certification"
    init<CertificationCreateCommand> {
        to = CertificationState.PENDING
        role = CertificationRole.User
    }
    selfTransaction<CertificationFillValuesCommand> {
        states += CertificationState.PENDING
        states += CertificationState.REJECTED
        role = CertificationRole.User
    }
    selfTransaction<CertificationAddEvidenceCommand> {
        states += CertificationState.PENDING
        states += CertificationState.REJECTED
        role = CertificationRole.User
    }
    transaction<CertificationSubmitCommand> {
        from = CertificationState.PENDING
        to = CertificationState.SUBMITTED
        role = CertificationRole.User
    }
    transaction<CertificationValidateCommand> {
        from = CertificationState.SUBMITTED
        to = CertificationState.VALIDATED
        role = CertificationRole.User
    }
    transaction<CertificationRejectCommand> {
        from = CertificationState.SUBMITTED
        to = CertificationState.REJECTED
        role = CertificationRole.User
    }
}

@JsExport
enum class CertificationState(override val position: Int): S2State {
    PENDING(0),
    SUBMITTED(1),
    REJECTED(2),
    VALIDATED(3)
}

enum class CertificationRole(val value: String): S2Role {
    User("User");
    override fun toString() = value
}

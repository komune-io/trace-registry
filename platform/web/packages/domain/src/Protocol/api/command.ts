import {io} from "registry-platform-api-api-js-export";
import {CommandParams, CommandWithFile, useAuthenticatedRequest, useCommandRequest, useCommandWithFileRequest} from "@komune-io/g2"

export interface CertificationFillCommand extends io.komune.registry.control.f2.certification.domain.command.CertificationFillCommandDTO { }
export interface CertificationFilledEvent extends io.komune.registry.control.f2.certification.domain.command.CertificationFilledEventDTO { }

export const useCertificationFillCommand = (
    params: CommandParams<CommandWithFile<CertificationFillCommand>, CertificationFilledEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandWithFileRequest<
        CertificationFillCommand,
        CertificationFilledEvent
    >('control/certificationFill', requestProps, params)
}

export interface CertificationSubmitCommand extends io.komune.registry.control.f2.certification.domain.command.CertificationSubmitCommandDTO { }
export interface CertificationSubmittedEvent extends io.komune.registry.control.f2.certification.domain.command.CertificationSubmittedEventDTO { }

export const useCertificationSubmitCommand = (
    params: CommandParams<CertificationSubmitCommand, CertificationSubmittedEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        CertificationSubmitCommand,
        CertificationSubmittedEvent
    >('control/certificationSubmit', requestProps, params)
}

export interface CertificationValidateCommand extends io.komune.registry.control.f2.certification.domain.command.CertificationValidateCommandDTO { }
export interface CertificationValidatedEvent extends io.komune.registry.control.f2.certification.domain.command.CertificationValidatedEventDTO { }

export const useCertificationValidateCommand = (
    params: CommandParams<CertificationValidateCommand, CertificationValidatedEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        CertificationValidateCommand,
        CertificationValidatedEvent
    >('control/certificationValidate', requestProps, params)
}

export interface CertificationRejectCommand extends io.komune.registry.control.f2.certification.domain.command.CertificationRejectCommandDTO { }
export interface CertificationRejectedEvent extends io.komune.registry.control.f2.certification.domain.command.CertificationRejectedEventDTO { }

export const useCertificationRejectCommand = (
    params: CommandParams<CertificationRejectCommand, CertificationRejectedEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        CertificationRejectCommand,
        CertificationRejectedEvent
    >('control/certificationReject', requestProps, params)
}

import {io} from "registry-platform-api-api-js-export";
import {
    CommandParams,
    CommandWithFile,
    useAuthenticatedRequest,
    useCommandWithFileRequest
} from "@komune-io/g2"

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

export interface CertificationSubmitCommand /* extends io.komune.registry.control.f2.certification.domain.command.CertificationSubmitCommandDTO */ { }
export interface CertificationSubmittedEvent /* extends io.komune.registry.control.f2.certification.domain.command.CertificationSubmittedEventDTO */ { }

export const useCertificationSubmitCommand = (
    params: CommandParams<CommandWithFile<CertificationSubmitCommand>, CertificationSubmittedEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandWithFileRequest<
        CertificationSubmitCommand,
        CertificationSubmittedEvent
    >('control/certificationSubmit', requestProps, params)
}


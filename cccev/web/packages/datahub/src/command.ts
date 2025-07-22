import { cccev } from "cccev-request-domain"
import { certificatRequest } from "./certificatRequest"
import { SupportedValueDTO } from "./types"

interface RequestEvidenceAddCommandDTO extends cccev.s2.request.domain.features.command.RequestEvidenceAddCommandDTO { }
interface RequestEvidenceAddedEventDTO extends cccev.s2.request.domain.features.command.RequestEvidenceAddedEventDTO { }

export const requestEvidenceAddCommand = async (evidenceTypeId: string, file: string, name: string) => {
    //@ts-ignore
    const request = window._env_.request
    return (await certificatRequest<RequestEvidenceAddedEventDTO[]>({
        url: "/addEvidence",
        body: JSON.stringify({
            id: request,
            evidence: {
                identifier: `${evidenceTypeId}-${name}`,
                isConformantTo: [evidenceTypeId],
                file: file,
                name: name,
                supportsConcept: [],
                supportsRequirement: [],
                validityPeriod: undefined,
                supportsValue: []
            }
        } as RequestEvidenceAddCommandDTO)
    }))[0]
}

interface RequestEvidenceRemoveCommandDTO extends cccev.s2.request.domain.features.command.RequestEvidenceRemoveCommandDTO { }
interface RequestEvidenceRemovedEventDTO extends cccev.s2.request.domain.features.command.RequestEvidenceRemovedEventDTO { }

export const requestEvidenceRemoveCommand = async (evidenceTypeId: string) => {
    //@ts-ignore
    const request = window._env_.request
    return (await certificatRequest<RequestEvidenceRemovedEventDTO[]>({
        url: "/removeEvidence",
        body: JSON.stringify({
            id: request,
            evidenceTypeId: evidenceTypeId
        } as RequestEvidenceRemoveCommandDTO)
    }))[0]
}

interface RequestSupportedValueAddCommandDTO extends cccev.s2.request.domain.features.command.RequestSupportedValueAddCommandDTO { }
interface RequestSupportedValueAddedEventDTO extends cccev.s2.request.domain.features.command.RequestSupportedValueAddedEventDto { }

export const requestSupportedValueAddCommand = async (supportedValues: SupportedValueDTO[]) => {
    //@ts-ignore
    const request = window._env_.request
    return certificatRequest<RequestSupportedValueAddedEventDTO[]>({
        url: "/addSupportedValue",
        body: JSON.stringify(supportedValues.map((supportedValue): RequestSupportedValueAddCommandDTO => ({
            id: request,
            supportedValue: supportedValue
        })))
    })
}

interface RequestSendCommandDTO extends cccev.s2.request.domain.features.command.RequestSendCommandDTO { }
interface RequestSentEventDTO extends cccev.s2.request.domain.features.command.RequestSentEventDto { }

export const requestSendToBubbleCommand = async () => {
    //@ts-ignore
    const request = window._env_.request
    return (await certificatRequest<RequestSentEventDTO[]>({
        url: "/sendRequest",
        body: JSON.stringify({
            id: request,
        } as RequestSendCommandDTO)
    }))[0]
}

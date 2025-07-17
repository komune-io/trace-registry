import { cccev } from "cccev-evidence-f2-domain"
import { cccev as cccevConcept } from "cccev-concept-f2-domain"
import { certificatRequest } from "./certificatRequest"


interface GetEvidenceTypeListsQueryDTO extends cccev.f2.evidence.domain.features.query.GetEvidenceTypeListsQueryDTO { }
interface GetEvidenceTypeListsQueryResultDTO extends cccev.f2.evidence.domain.features.query.GetEvidenceTypeListsQueryResultDTO { }

export const getEvidenceTypeLists = async () => {
    //@ts-ignore
    const request = window._env_.request
    //@ts-ignore
    const framework = window._env_.framework
    return (await certificatRequest<GetEvidenceTypeListsQueryResultDTO[]>({
        url: "/getEvidenceTypeLists",
        body: JSON.stringify({
            requirement: framework,
            id: request
        } as GetEvidenceTypeListsQueryDTO)
    }))[0]
}

interface GetInformationConceptsQueryDTO extends cccevConcept.f2.concept.domain.query.GetInformationConceptsQueryDTO { }
interface GetInformationConceptsQueryResultDTO extends cccevConcept.f2.concept.domain.query.GetInformationConceptsQueryResultDTO { }


export const getInformationConcepts = async () => {
    //@ts-ignore
    const request = window._env_.request
    //@ts-ignore
    const framework = window._env_.framework
    return (await certificatRequest<GetInformationConceptsQueryResultDTO[]>({
        url: "/getInformationConcepts",
        body: JSON.stringify({
            requirement: framework,
            id: request
        } as GetInformationConceptsQueryDTO)
    }))[0]
}

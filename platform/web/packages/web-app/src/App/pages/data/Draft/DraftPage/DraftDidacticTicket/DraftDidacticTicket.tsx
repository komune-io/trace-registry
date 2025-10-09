import {DidacticTicket} from 'components'
import {CatalogueDraft} from "domain-components";
import {useMemo} from "react";

export interface DraftDidacticTicketProps {
  draft?: CatalogueDraft
}

export const DraftDidacticTicket = ({ draft }: DraftDidacticTicketProps) => {
  const tutorial = useMemo(() => draft?.catalogue.structure?.tutorials?.find(tutorial => {
    const conditionData = tutorial.condition?.data
    switch (tutorial.condition?.type) {
      case undefined:
      case null: return true
      case "CATALOGUE_EMPTY_DATASET": return draft?.catalogue.datasets
          .filter(d => conditionData == null || d.type == conditionData)
          .every(d => d.distributions == null || d.distributions.length === 0)
      case "CATALOGUE_NO_CERTIFICATION": return draft?.catalogue.certifications.length === 0
      case "CATALOGUE_PENDING_CERTIFICATION": return draft?.catalogue.certifications.some(certification => certification.status === "PENDING")
      case "CATALOGUE_PENDING_DRAFT": return draft?.status == "DRAFT"
      default: return false
    }
  }), [draft])

  return tutorial && (
    <DidacticTicket 
      content={tutorial.content ?? ""}
      img={tutorial.image}
    />
  )
}

import { useRoutesDefinition, ValidationHeader } from 'components'
import { t } from 'i18next'
import { useParams } from 'react-router-dom'
import { CatalogueDraft } from '../../../Draft'

interface CatalogueValidationHeaderProps {
    draft?: CatalogueDraft
    onAccept: () => Promise<any>
    onReject: (reason: string) => Promise<any>
    isUpdating?: boolean
}

export const CatalogueValidationHeader = (props: CatalogueValidationHeaderProps) => {
    const { onAccept, onReject, draft, isUpdating } = props
    const { catalogueId } = useParams()
    const { cataloguesAll } = useRoutesDefinition()


    if (!draft) return <></>
    return (
        <ValidationHeader
            onAccept={onAccept}
            onReject={onReject}
            isUpdating={isUpdating}
            versionNotes={draft.versionNotes}
            creator={draft.creator}
            linkTo={draft.baseVersion !== 0 ? {
                label: t("catalogues.consultOriginal"),
                href: cataloguesAll(catalogueId!) + "?language=" + draft.language
            } : undefined}
        />
    )
}

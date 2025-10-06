import {useRoutesDefinition} from 'components'
import {CertificationBadge, useBadgeCertificationGetQuery} from 'domain-components'
import {useParams} from 'react-router-dom'

export const EmbedBadge = () => {
    const { badgeCertificationId } = useParams()
    const { cataloguesAll } = useRoutesDefinition()

    const badgeCertificationResult = useBadgeCertificationGetQuery({
        query: { id: badgeCertificationId! },
        options: { enabled: !!badgeCertificationId }
    }).data

    const badgeCertification = badgeCertificationResult?.item
    const catalogueId = badgeCertificationResult?.catalogueId

    return badgeCertification && (
        <CertificationBadge
            image={badgeCertification.image}
            name={badgeCertification.name}
            value={badgeCertification.value}
            color={badgeCertification.color}
            component="a"
            //@ts-ignore
            href={cataloguesAll(catalogueId)}
            target="_blank"
            sx={{
                width: 182,
                boxShadow: 0,
                cursor: 'pointer',
                textDecoration: 'none',
            }}
        />
    )
}

import { useRoutesDefinition } from 'components'
import { CertificationBadge } from 'domain-components'
// import { useParams } from 'react-router-dom'

export const EmbedBadge = () => {
    // const { badgeId } = useParams()
    const {cataloguesAll} = useRoutesDefinition()

    return (
        <CertificationBadge
            image={"https://geco.kosmio.dev/api/control/badgeGetImage/d51441cf-9ac4-4451-b5d1-dc4b321d44e5"}
            name="Finance v1"
            value={85}
            component="a"
            //@ts-ignore
            href={cataloguesAll("mySheetId")}
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

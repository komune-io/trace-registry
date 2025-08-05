import { Stack } from '@mui/material'
import { Badge, TitleDivider } from 'components'
import { useTranslation } from 'react-i18next'

export const CatalogueBadges = () => {
    const { t } = useTranslation()
    return (
        <>
            <TitleDivider size='h3' title={t("badges")} />
            <Stack
                gap={1.25}
                alignItems="flex-start"
            >
                <Badge label={"Finance V1"} value={85} />
                <Badge label={"Numérique V1"} value={60} />
                <Badge label={"Blbl V1"} value={50} />
            </Stack>
        </>
    )
}

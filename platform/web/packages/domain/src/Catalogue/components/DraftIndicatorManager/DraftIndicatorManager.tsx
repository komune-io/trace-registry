import { CatalogueDraft } from '../../model'
import { useTranslation } from 'react-i18next'
import { CustomButton, InfoTicket, TitleDivider, useToggleState } from 'components'
import { AddCircleOutlineRounded } from '@mui/icons-material'
import { CreateIndicatorBlockModal, IndicatorBlock } from '../IndicatorBlock'
import { useMemo } from 'react'

export interface DraftIndicatorManagerProps {
    draft?: CatalogueDraft
}

export const DraftIndicatorManager = (props: DraftIndicatorManagerProps) => {
    const { draft } = props
    const { t } = useTranslation()

    const [open, _, toggle] = useToggleState()

    const blocks = useMemo(() => draft?.catalogue.datasets?.filter((dataset) => dataset.type === "indicator").map((dataset) => (
        <IndicatorBlock dataset={dataset} />
    )), [draft])

    return (
        <>
            <TitleDivider
                size='h6'
                title={t("catalogues.indicatorBlock")}
                actions={
                    <CustomButton
                        onClick={toggle}
                        startIcon={<AddCircleOutlineRounded />}
                    >
                        {t("catalogues.createIndicatorBlock")}
                    </CustomButton>
                }
            />
            {!blocks || blocks.length === 0 && (
                <InfoTicket title={t("catalogues.noIndicatorBlock")} />
            )}
            {blocks}
            <CreateIndicatorBlockModal open={open} onClose={toggle} draft={draft} />
        </>
    )
}

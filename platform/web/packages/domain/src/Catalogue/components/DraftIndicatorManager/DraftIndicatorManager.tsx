import { CatalogueDraft } from '../../model'
import { useTranslation } from 'react-i18next'
import { CustomButton, InfoTicket, TitleDivider, useToggleState } from 'components'
import { AddCircleOutlineRounded } from '@mui/icons-material'
import { IndicatorBlock } from '../IndicatorBlock'
import { useMemo } from 'react'
import { Dataset } from '../../../Dataset'
import { CreateIndicatorBlockModal } from '100m-components'

export interface DraftIndicatorManagerProps {
    draft?: CatalogueDraft
    dataset: Dataset
    readOnly?: boolean
}

export const DraftIndicatorManager = (props: DraftIndicatorManagerProps) => {
    const { draft, dataset, readOnly } = props
    const { t } = useTranslation()

    const [open, _, toggle] = useToggleState()

    const blocks = useMemo(() => dataset?.datasets?.filter((dataset) => dataset.type === "indicator").map((dataset) => (
        <IndicatorBlock key={dataset.id} dataset={dataset} draft={draft} readOnly={readOnly}  />
    )), [dataset, draft, readOnly])

    return (
        <>
            <TitleDivider
                size='h6'
                title={t("catalogues.indicatorBlock")}
                actions={
                    !readOnly ?
                    <CustomButton
                        onClick={toggle}
                        startIcon={<AddCircleOutlineRounded />}
                    >
                        {t("catalogues.createIndicatorBlock")}
                    </CustomButton>
                    : undefined
                }
            />
            {(!blocks || blocks.length === 0) && (
                <InfoTicket title={t("catalogues.noIndicatorBlock")} />
            )}
            {blocks}
            {open && <CreateIndicatorBlockModal open onClose={toggle} draft={draft} />}
        </>
    )
}

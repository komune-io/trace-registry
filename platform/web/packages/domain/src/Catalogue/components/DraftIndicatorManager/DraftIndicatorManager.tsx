import { CatalogueDraft } from '../../model'
import { useTranslation } from 'react-i18next'
import { CustomButton, TitleDivider, useToggleState } from 'components'
import { AddCircleOutlineRounded } from '@mui/icons-material'
import { CreateIndicatorBlockModal, IndicatorBlock } from '../IndicatorBlock'

export interface DraftIndicatorManagerProps {
    draft?: CatalogueDraft
}

export const DraftIndicatorManager = (props: DraftIndicatorManagerProps) => {
    const { draft } = props
    const { t } = useTranslation()

     const [open, _, toggle] = useToggleState()

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
            <IndicatorBlock draft={draft} />
            <CreateIndicatorBlockModal open={open} onClose={toggle} draft={draft} />
        </>
    )
}

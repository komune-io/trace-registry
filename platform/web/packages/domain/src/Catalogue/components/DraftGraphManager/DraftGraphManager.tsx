import { Paper, Typography } from '@mui/material'
import { CatalogueDraft } from '../../model'
import { useTranslation } from 'react-i18next'
import { Accordion, CustomButton, CustomLinkButton, TitleDivider, useRoutesDefinition, useToggleState } from 'components'
import { AddCircleOutlineRounded } from '@mui/icons-material'
import { CSVUploadPopup } from '../CSVUploadPopup'

export interface DraftGraphManagerProps {
    draft?: CatalogueDraft
}

export const DraftGraphManager = (props: DraftGraphManagerProps) => {
    const { draft } = props
    const { t } = useTranslation()
    const { cataloguesCatalogueIdDraftIdDatasetIdGraph } = useRoutesDefinition()
    const [open, _, toggle] = useToggleState()

    return (
        <>
            <Paper
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    p: 4
                }}
            >
                <TitleDivider
                    size='h6'
                    title={t("graphs")}
                    actions={
                        <CustomLinkButton
                            to={cataloguesCatalogueIdDraftIdDatasetIdGraph(draft?.originalCatalogueId!, draft?.id!, "1")}
                            startIcon={<AddCircleOutlineRounded />}
                        >
                            {t("createAGraph")}
                        </CustomLinkButton>
                    }
                />
            </Paper>
            <Paper
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    p: 4
                }}
            >
                <TitleDivider
                    size='h6'
                    title={t('co2Projects')}
                    actions={
                        <CustomButton
                            onClick={toggle}
                            startIcon={<AddCircleOutlineRounded />}
                        >
                            {t("catalogues.uploadCsv")}
                        </CustomButton>
                    }
                />
                <Accordion
                    size='small'
                    summary={
                        <Typography
                            variant='subtitle1'
                        >
                            Relevé Fevrier 2025
                        </Typography>
                    }
                >
                </Accordion>
                <CSVUploadPopup
                    open={open}
                    onClose={toggle}
                    datasetId=""
                />
            </Paper>
        </>
    )
}

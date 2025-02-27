import { Paper, Typography } from '@mui/material'
import { CatalogueDraft } from '../../model'
import { useTranslation } from 'react-i18next'
import { Accordion, CustomLinkButton, TitleDivider } from 'components'
import { AddCircleOutlineRounded } from '@mui/icons-material'

export interface DraftGraphManagerProps {
    draft?: CatalogueDraft
}

export const DraftGraphManager = (props: DraftGraphManagerProps) => {
    const { } = props
    const { t } = useTranslation()

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
                            to="/"
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
                    title={t('co2Project')}
                    actions={
                        <CustomLinkButton
                            to="/"
                            startIcon={<AddCircleOutlineRounded />}
                        >
                            {t("catalogues.uploadCsv")}
                        </CustomLinkButton>
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
            </Paper>
        </>
    )
}

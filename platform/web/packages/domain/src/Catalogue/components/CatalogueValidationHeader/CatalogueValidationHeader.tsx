import {Link, Tooltip} from '@komune-io/g2'
import {EmailRounded, InfoRounded} from '@mui/icons-material'
import {Box, Paper, Stack, Typography} from '@mui/material'
import {CustomButton, useRoutesDefinition, useToggleState} from 'components'
import {t} from 'i18next'
import {RejectModal} from './RejectModal'
import {useParams} from 'react-router-dom'
import { CatalogueDraft } from '../../../Draft'

interface CatalogueValidationHeaderProps {
    draft?: CatalogueDraft
    onAccept: () => Promise<any>
    onReject: (reason: string) => Promise<any>
    isUpdating?: boolean
}

export const CatalogueValidationHeader = (props: CatalogueValidationHeaderProps) => {
    const { onAccept, onReject, draft, isUpdating } = props
    const {catalogueId} = useParams()
    const {cataloguesAll} = useRoutesDefinition()

    const [open, _, toggle] = useToggleState()
    
    if (!draft) return <></>
    return (
        <Paper
            elevation={2}
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                p: 3,
                position: "sticky",
                borderRadius: 0,
                width: "100%",
                top: 0,
                zIndex: 1,
            }}
        >
            <Stack
                gap={1}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                >
                    {draft.creator && <Typography
                        variant='subtitle1'
                    >
                        {t("catalogues.reviewModifications", { name: `${draft.creator.givenName} ${draft.creator.familyName}` })}
                    </Typography>}
                    <Tooltip
                        helperText={
                            <Stack
                                gap={0.5}
                                sx={{
                                    p: 1
                                }}
                            >
                                <Typography
                                    variant='subtitle1'
                                    sx={{
                                        color: "text.secondary"
                                    }}
                                >
                                    {t("versionNote")}
                                </Typography>
                                <Typography
                                    variant='body2'
                                    sx={{
                                        color: "text.secondary"
                                    }}
                                >
                                    {draft.versionNotes}
                                </Typography>
                            </Stack>
                        }
                    >
                        <InfoRounded color="primary" />
                    </Tooltip>
                </Stack>
                <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                >
                   {draft.baseVersion !== 0 && <Link
                        variant="body2"
                        href={cataloguesAll(catalogueId!) + "?language=" + draft.language}
                        target='_blank'
                    >
                        {t("catalogues.consultOriginal")}
                    </Link>}
                    {draft.creator && <Link
                        variant="body2"
                        href={`mailto:${draft.creator.email}`}
                        sx={{
                            display: "flex",
                            gap: 1,
                            alignItems: "center"
                        }}
                    >
                        <EmailRounded/>
                        {t("catalogues.contactEditor")}
                    </Link>}
                </Stack>
            </Stack>
            <Box flex={1} />
            <CustomButton
                onClick={onAccept}
                isLoading={isUpdating}
            >
                {t("accept")}
            </CustomButton>
            <CustomButton
                onClick={toggle}
                isLoading={isUpdating}
                color="error"
            >
                {t("reject")}
            </CustomButton>
            <RejectModal
                open={open}
                onClose={toggle}
                onReject={onReject}
            />
        </Paper>
    )
}

import { Button, Link } from '@komune-io/g2'
import { EmailRounded, InfoRounded } from '@mui/icons-material'
import { Box, Paper, Stack, Typography } from '@mui/material'
import { Tooltip, useToggleState } from 'components'
import { t } from 'i18next'
import { RejectModal } from './RejectModal'

interface CatalogueValidationHeaderProps {
    onAccept: () => Promise<any>
    onReject: (reason: string) => Promise<any>
}

export const CatalogueValidationHeader = (props: CatalogueValidationHeaderProps) => {
    const { onAccept, onReject } = props

    const [open, _, toggle] = useToggleState()
    
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
                    <Typography
                        variant='subtitle1'
                    >
                        {t("catalogues.reviewModifications", { name: "Pedro Sanchez" })}
                    </Typography>
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
                                    Correction de fautes d’ortographe dans la section synthèse économique.
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
                    <Link
                        variant="body2"
                        href=""
                        target='_blank'
                    >
                        {t("catalogues.consultOriginal")}
                    </Link>
                    <Link
                        variant="body2"
                        href='mailto:admin@objectif100m.fr'
                        sx={{
                            display: "flex",
                            gap: 1,
                            alignItems: "center"
                        }}
                    >
                        <EmailRounded />
                        {t("catalogues.contactEditor")}
                    </Link>
                </Stack>
            </Stack>
            <Box flex={1} />
            <Button
                onClick={onAccept}
            >
                {t("accept")}
            </Button>
            <Button
                onClick={toggle}
                color="error"
            >
                {t("reject")}
            </Button>
            <RejectModal
                open={open}
                onClose={toggle}
                onReject={onReject}
            />
        </Paper>
    )
}

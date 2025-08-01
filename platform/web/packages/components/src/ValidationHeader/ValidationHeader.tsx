import { Link, Tooltip } from '@komune-io/g2';
import { EmailRounded, InfoRounded } from '@mui/icons-material';
import { Box, Paper, Stack, Typography } from '@mui/material'
import { CustomButton, RejectModal, useToggleState } from 'components';
import { useTranslation } from 'react-i18next';

export interface ValidationHeaderProps {
    onAccept: () => Promise<any>
    onReject: (reason: string) => Promise<any>
    isUpdating?: boolean;
    versionNotes?: string
    creator?: {
        email: string
        givenName: string
        familyName: string
    }
    linkTo?: {
        label: string
        href: string
    }
}

export const ValidationHeader = (props: ValidationHeaderProps) => {
    const { onAccept, onReject, isUpdating = false, versionNotes, creator, linkTo } = props;
    const { t } = useTranslation();
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
                    {creator && <Typography
                        variant='subtitle1'
                    >
                        {t("catalogues.reviewModifications", { name: `${creator.givenName} ${creator.familyName}` })}
                    </Typography>}
                    {versionNotes && <Tooltip
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
                                    {versionNotes}
                                </Typography>
                            </Stack>
                        }
                    >
                        <InfoRounded color="primary" />
                    </Tooltip>}
                </Stack>
                <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                >
                    {linkTo && <Link
                        variant="body2"
                        href={linkTo.href}
                        target='_blank'
                    >
                        {linkTo.label}
                    </Link>}
                    {creator && <Link
                        variant="body2"
                        href={`mailto:${creator.email}`}
                        sx={{
                            display: "flex",
                            gap: 1,
                            alignItems: "center"
                        }}
                    >
                        <EmailRounded />
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

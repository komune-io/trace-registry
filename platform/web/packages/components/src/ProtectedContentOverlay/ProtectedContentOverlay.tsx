import { Paper, Stack, Typography } from '@mui/material'
import { CustomLinkButton } from '../CustomButton'
import { useExtendedAuth } from '../auth'
import { useRef, useLayoutEffect } from 'react'
import { config } from '../config'
import { useTranslation } from 'react-i18next'



interface ProtectedContentOverlayProps {
    onNeedUpdate?: () => void;
}

export const ProtectedContentOverlay = (props: ProtectedContentOverlayProps) => {
    const { onNeedUpdate } = props;
    const { keycloak } = useExtendedAuth()
    const ref = useRef<HTMLDivElement>(null)
    const { t } = useTranslation()

    useLayoutEffect(() => {
        if (!ref.current) return;
        const parentElement = ref.current.parentElement;
        const observer = new MutationObserver(() => {
            const overlay = parentElement?.querySelector('[data-protected-overlay]');
            if (!overlay && onNeedUpdate) {
                onNeedUpdate()
            }
        });

        observer.observe(ref.current.parentElement!, { childList: true, subtree: true });
        return () => observer.disconnect();
    }, []);

    const keycloakConfig = config().keycloak
    const newAccountUrl = `${keycloakConfig.url}/realms/${keycloakConfig.realm}/protocol/openid-connect/registrations?client_id=${keycloakConfig.clientId}&response_type=code&scope=openid&redirect_uri=${window.location.href}`

    return (
        <Stack
            ref={ref}
            data-protected-overlay
            alignItems="center"
            justifyContent="center"
            sx={{
                background: (theme) => theme.palette.background.default + "99",
                backdropFilter: 'blur(15px)',
                zIndex: 5,
                width: "calc(100% + 20px)",
                height: "calc(100% + 20px)",
                position: "absolute",
                top: "-10px",
                left: "-10px",
                borderRadius: 2
            }}
        >
            <Paper
                sx={{
                    width: "100%",
                    maxWidth: "680px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 5,
                    p: 5
                }}
                elevation={0}
            >
                <Typography variant='h6'>{t('protected.joinUs')}</Typography>
                <Typography dangerouslySetInnerHTML={{ __html: t('protected.contentReserved') }} />
                <CustomLinkButton
                to={newAccountUrl}
                >
                    {t('protected.createAccount')}
                </CustomLinkButton>
                <Typography onClick={() => keycloak?.login()} tabIndex={1} sx={{ cursor: "pointer" }} variant='caption' color="text.secondary">{t('protected.alreadyHaveAccount')} <span style={{ textDecoration: "underline" }}>{t('protected.login')}</span></Typography>
            </Paper>
        </Stack>
    )
}

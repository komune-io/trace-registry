// Copy pasted from: https://github.com/InseeFrLab/keycloakify/blob/main/src/login/Template.tsx

import { type TemplateProps } from "keycloakify/login/TemplateProps";
import type { KcContext } from "./KcContext";
import type { I18n } from "./i18n";
import { CssBaseline, Paper, Stack, Typography, styled } from '@mui/material'
import { Alert, Link } from "@komune-io/g2"
import { KeycloakLanguageSelector } from "./KeycloakLanguageSelector";
import { config } from "../config.ts";

const Main = styled('main')({
    flexGrow: 1,
    overflow: 'auto',
    display: "flex",
    minHeight: "100vh"
})

export default function Template(props: TemplateProps<KcContext, I18n>) {
    const {
        displayMessage = true,
        kcContext,
        children,
        headerNode,
        i18n,
    } = props;
    const { msgStr } = i18n;
    const { currentLanguage, enabledLanguages } = i18n;
    const { message, isAppInitiatedAction, } = kcContext;
    const { legalNotice, sponsor } = config()

    return (
        <Main
            sx={{
                background: (theme) => ({
                    sm: theme.palette.background.default,
                    xs: "white"
                })
            }}
        >
            <CssBaseline />
            <Stack
                flexGrow={1}
                flexBasis={0}
                alignItems="center"
                justifyContent="center"
                sx={{
                    px: {
                        sm: 5,
                        xs: 0
                    },
                    py: {
                        sm: 5,
                        xs: 0
                    },
                    width: "100%",
                }}
                gap={3}
            >
                <img
                    alt="Logo"
                    src={config().theme?.logo?.url}
                    style={{
                        width: "150px"
                    }}
                />
                <Stack
                    sx={{
                        maxWidth: "450px",
                        width: "100%",
                    }}
                    gap={3}
                >
                    {enabledLanguages.length > 1 && (
                        <KeycloakLanguageSelector currentLanguage={currentLanguage} enabledLanguages={enabledLanguages} />
                    )}
                    {displayMessage && message !== undefined && (message.type !== "warning" || !isAppInitiatedAction) && (
                        <Alert
                            sx={{
                                maxWidth: "600px !important",
                                width: "100% !important",
                                bottom: "unset !important",
                                top: "unset !important",
                                left: "unset !important",
                                right: "unset !important",
                                zIndex: 1,
                                "& .MuiSnackbarContent-root": {
                                    boxShadow: (theme) => theme.shadows[1],
                                }
                            }}
                            severity={message.type}
                            isRelative
                            colorBase='light'
                        >
                            {message.summary}
                        </Alert>
                    )}
                    <Paper
                        sx={{
                            // position: "relative",
                            maxWidth: "450px",
                            width: "100%",
                            borderRadius: 1.5,
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            px: {
                                sm: 6,
                                xs: 2
                            },
                            py: {
                                sm: 4,
                                xs: 2
                            },
                            boxShadow: {
                                sm: 1,
                                xs: 0
                            }
                        }}

                    >
                        {headerNode && <Typography sx={{ color: "primary.main", alignSelf: "center" }} align="center" variant="h4">{headerNode}</Typography>}
                        {children}
                    </Paper>
                   
                </Stack>
                {sponsor && (
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            gap={0.5}
                            px={1}
                        >
                            <img
                                alt="Sponsor Logo"
                                src={sponsor.logo}
                                style={{
                                    height: "50px",
                                    marginRight: "24px",
                                }}
                            />
                            <Typography
                                variant="body2"
                                sx={{
                                    textAlign: 'center',
                                }}
                            >

                                {msgStr("sponsorProject")}
                                <Link
                                    variant="body2"
                                    href={sponsor.url}
                                    sx={{ fontSize: "unset" }}
                                >
                                    {` ${sponsor.name} `}
                                </Link>
                                {msgStr("sponsorSupportedBy", sponsor.by)}
                            </Typography>

                        </Stack>

                    )}
                    {legalNotice && (
                        <Link
                            variant="body2"
                            href={legalNotice.url}
                            sx={{
                                color: "#828282",
                                textDecoration: "unset !important",
                                mt: -1,
                                alignSelf: "center"
                            }}
                        >
                            {`${msgStr("legalNotice")} `}
                        </Link>
                    )}
            </Stack>
        </Main >
    );
}

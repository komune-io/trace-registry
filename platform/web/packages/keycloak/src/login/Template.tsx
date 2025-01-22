// Copy pasted from: https://github.com/InseeFrLab/keycloakify/blob/main/src/login/Template.tsx

import { type TemplateProps } from "keycloakify/login/TemplateProps";
import type { KcContext } from "./KcContext";
import type { I18n } from "./i18n";
import { CssBaseline, Paper, Stack, Typography, styled } from '@mui/material'
import { Alert } from "@komune-io/g2"

const Main = styled('main')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    display: "flex",
    background: theme.palette.background.default
}))

export default function Template(props: TemplateProps<KcContext, I18n>) {
    const {
        displayMessage = true,
        kcContext,
        children,
        headerNode
    } = props;

    const { message, isAppInitiatedAction } = kcContext;

    return (
        <Main>
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
                 {/* <img
                    alt="Logo Raia"
                    src="/raia-logo.svg"
                    style={{
                        width: "110px"
                    }}
                /> */}
                {displayMessage && message !== undefined && (message.type !== "warning" || !isAppInitiatedAction) && (
                    <Alert
                        sx={{
                            maxWidth: "600px !important",
                            width: "100% !important",
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
                    {headerNode && <Typography sx={{ color: "primary.main", alignSelf: "center" }} variant="subtitle1">{headerNode}</Typography>}
                    {children}
                </Paper>
            </Stack>
        </Main >
    );
}

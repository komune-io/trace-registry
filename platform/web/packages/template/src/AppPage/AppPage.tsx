import { Box, Stack, StackProps, useMediaQuery, useTheme } from '@mui/material';
import { ReactNode, useEffect } from "react";
import { Co2Counter, LanguageSelector } from 'components';
import { CatalogueSearchBar } from "domain-components"
import { useThemeContext } from '@komune-io/g2';

export interface AppPageProps extends StackProps {
    title?: string
    children?: ReactNode
    header?: ReactNode
    bgcolor?: string
    headerProps?: StackProps
    customHeader?: ReactNode
    maxWidth?: number
}

export const AppPage = (props: AppPageProps) => {
    const { title, children, header, bgcolor, headerProps, sx, maxWidth = 1280, customHeader, ...other } = props

    const { openDrawer, theme: g2Theme } = useThemeContext()
    const theme = useTheme()

    const isMobile =
        g2Theme.drawerAbsolutePositionBreakpoint === 'always'
            ? true
            : useMediaQuery(
                theme.breakpoints.down(g2Theme.drawerAbsolutePositionBreakpoint!)
            )


    useEffect(() => {
        if (title) {
            document.title = "WikiCO2 | " + title
        } else {
            document.title = "WikiCO2"
        }
    }, [title])

    return (
        <Stack
            sx={{
                alignItems: 'center',
                bgcolor: bgcolor ?? 'white',
                minHeight: '100%',
                gap: {
                    md: 4,
                    sm: 2,
                },
            }}
        >
            <Box
                sx={{
                    width: !openDrawer || isMobile ? "calc(100% - 216px)" : "100%",
                    alignSelf: !openDrawer || isMobile ? 'flex-end' : undefined,
                    transition: (theme) => !openDrawer
                        ? theme.transitions.create("width", {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.leavingScreen
                        })
                        : "width 220ms ease-out",
                }}
            >
                {customHeader ? customHeader : <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                    sx={{
                        px: 2,
                        pt: 3,
                        width: "100%"
                    }}
                    {...headerProps}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        gap={2}
                        flexGrow={1}
                    >
                        {!bgcolor && <CatalogueSearchBar />}
                        {header}
                    </Stack>
                    {!bgcolor &&
                        <Co2Counter
                            count={128003}
                            sx={{
                                flexGrow: 1,
                                justifyContent: "center"
                            }}
                        />
                    }
                    <LanguageSelector />
                </Stack>}
            </Box>
            <Stack
                sx={{
                    px: {
                        md: 5,
                        sm: 1,
                    },
                    pb: 5,
                    gap: {
                        md: 4,
                        sm: 2,
                    },
                    maxWidth,
                    width: '100%',
                    flexGrow: 1,
                    ...sx
                }}
                {...other}
            >

                {children}
            </Stack>
        </Stack>
    )
}

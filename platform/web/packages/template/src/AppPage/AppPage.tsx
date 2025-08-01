import { Box, Stack, StackProps, useMediaQuery, useTheme } from '@mui/material';
import { ReactNode, useEffect } from "react";
import { Co2Counter, config, LanguageSelector } from 'components';
import { CatalogueDraftValidatedEvent, CatalogueSearchBar, useInformationConceptGetGlobalValueQuery } from "domain-components"
import { useThemeContext } from '@komune-io/g2';
import { useTranslation } from 'react-i18next';
import { MutationStatus, useMutationState } from '@tanstack/react-query';

export interface AppPageProps extends StackProps {
    title?: string
    children?: ReactNode
    header?: ReactNode
    headerProps?: StackProps
    headerContainerProps?: StackProps
    customHeader?: ReactNode
    maxWidth?: number
    basicHeader?: boolean
}

export const AppPage = (props: AppPageProps) => {
    const { title, children, header, headerProps, headerContainerProps, sx, maxWidth = 1280, customHeader, basicHeader = true, ...other } = props

    const { i18n } = useTranslation()
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
            document.title = config().title + " | " + title
        } else {
            document.title = config().title ?? ""
        }
    }, [title])

    const getCounter = useInformationConceptGetGlobalValueQuery({
        query: {
            identifier: "counter-co2e",
            language: i18n.language
        }
    })

    const counter = getCounter.data?.item

    const validateSates = useMutationState<{ status: MutationStatus, result?: CatalogueDraftValidatedEvent }>({
        filters: { mutationKey: ['data/catalogueDraftValidate'], status: 'success' },
        //@ts-ignore
        select: (mutation) => {
            return {
                status: mutation.state.status,
                result: mutation.state.data
            }
        }
    })

    useEffect(() => {
        const lastValidation = validateSates[validateSates.length - 1]
        if (lastValidation && lastValidation.result?.id) {
            getCounter.refetch()
        }
    }, [validateSates])

    return (
        <Stack
            sx={{
                alignItems: 'center',
                bgcolor: 'background.default',
                minHeight: '100%',
                gap: {
                    md: 4,
                    sm: 2,
                },
            }}
        >
            <Box
                {...headerContainerProps}
                sx={{
                    width: !openDrawer || isMobile ? "calc(100% - 216px)" : "100%",
                    alignSelf: !openDrawer || isMobile ? 'flex-end' : undefined,
                    transition: (theme) => !openDrawer
                        ? theme.transitions.create("width", {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.leavingScreen
                        })
                        : "width 220ms ease-out",
                    ...headerContainerProps?.sx
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
                        sx={{
                            display: {
                                xs: "none",
                                sm: "flex"
                            }
                        }}
                    >
                        {basicHeader && <CatalogueSearchBar />}
                        {header}
                    </Stack>
                    {basicHeader && counter?.value &&
                        <Co2Counter
                            count={Number(counter.value)}
                            sx={{
                                flexGrow: 1,
                                justifyContent: "center",
                                height: "10px",
                            }}
                        />
                    }
                    <LanguageSelector />
                </Stack>}
            </Box>
            <Stack
                sx={{
                    px: {
                        xs: 1,
                        sm: 1,
                        md: 5,
                    },
                    pt: 2,
                    pb: 5,
                    gap: {
                        xs: 2,
                        sm: 2,
                        md: 4,
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

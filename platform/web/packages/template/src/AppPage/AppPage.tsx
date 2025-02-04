import { Stack, StackProps } from '@mui/material';
import { ReactNode, useEffect } from "react";
import { LanguageSelector } from 'components';

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
            {customHeader ? customHeader :<Stack
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
                    {header}
                </Stack>
                <LanguageSelector />
            </Stack>}
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

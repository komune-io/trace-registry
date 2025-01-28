import { Box, Stack, StackProps } from '@mui/material';
import { ReactNode, useEffect } from "react";
import { LanguageSelector } from 'components';

export interface AppPageProps extends StackProps {
    title?: string
    children?: ReactNode
    header?: ReactNode
    bgcolor?: string
    headerProps?: StackProps
}

export const AppPage = (props: AppPageProps) => {
    const { title, children, header, bgcolor, headerProps, sx, ...other } = props

    useEffect(() => {
      if (title) {
        document.title = "WikiCO2 | " + title
      } else {
        document.title = "WikiCO2"
      }
    }, [title])
    
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                bgcolor: bgcolor ?? 'white',
                minHeight: '100%',
            }}
        >
            <Stack
                sx={{
                    px: {
                        md: 5,
                        sm: 1,
                    },
                    pb: 5,
                    pt: 3,
                    gap: {
                        md: 4,
                        sm: 2,
                    },
                    maxWidth: '1700px',
                    width: '100%',
                    flexGrow: 1,
                    ...sx
                }}
                {...other}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                    sx={{
                        px: 2
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        gap={2}
                        flexGrow={1}
                        {...headerProps}
                    >
                        {header}
                    </Stack>
                    <LanguageSelector/>
                </Stack>
                {children}
            </Stack>
        </Box>
    )
}

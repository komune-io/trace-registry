import { Typography } from '@mui/material';
import { Page, PageProps } from '@smartb/g2'
import { ReactNode } from "react";

export interface AppPageProps extends PageProps {
  title?: string
  children?: ReactNode
}

export const AppPage = (props: AppPageProps) => {
    const { title, children, sx, ...other } = props
    return (
        <Page
            headerProps={{
                content: [
                    {
                        leftPart: [title ? <Typography key="projectTitle" variant="h6">{title}</Typography> : undefined]
                    }
                ],
                sx: {
                    minHeight: "65px"
                }
            }}
            {...other}
        >
            {children}
        </Page>
    )
}

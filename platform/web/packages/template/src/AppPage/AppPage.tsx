import { Typography } from '@mui/material';
import { Page, PageProps } from '@smartb/g2'
import { ReactNode } from "react";

export interface AppPageProps extends PageProps {
  title?: string
  children?: ReactNode
  rightPart?: JSX.Element[]
}

export const AppPage = (props: AppPageProps) => {
    const { title, children, sx, headerProps, rightPart, ...other } = props
    return (
        <Page
            headerProps={{
                
                content: [
                    {
                        leftPart: [
                            title ? <Typography key="projectTitle" variant="h6">{title}</Typography> : undefined,
                        ],
                        rightPart
                    }
                ],
                ...headerProps,
                sx: {
                    minHeight: "70px",
                    ...headerProps?.sx
                }
            }}
            {...other}
        >
            {children}
        </Page>
    )
}

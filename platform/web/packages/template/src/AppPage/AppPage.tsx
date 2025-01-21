import { Typography } from '@mui/material';
import { Page, PageProps } from '@komune-io/g2'
import { ReactNode } from "react";
import { LanguageSelector } from 'components';

export interface AppPageProps extends PageProps {
  title?: string
  children?: ReactNode
  rightPart?: JSX.Element[]
}

export const AppPage = (props: AppPageProps) => {
    const { title, children, headerProps, rightPart, ...other } = props
    return (
        <Page
            headerProps={{
                content: [
                    {
                        leftPart: [
                            title ? <Typography color="primary" key="projectTitle" variant="h6">{title}</Typography> : undefined,
                        ],
                        rightPart: [
                            ...(rightPart ?? []),
                            <LanguageSelector key="languageSelector" />,
                        ]
                    }
                ],
                ...headerProps,
                sx: {
                    minHeight: "70px",
                    background: "#F6F4F7",
                    borderBottom: "#EDE9EF solid 1px",
                    ...headerProps?.sx
                }
            }}
            {...other}
        >
            {children}
        </Page>
    )
}

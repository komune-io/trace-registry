import { Page, PageProps } from '@smartb/g2'
import { ReactNode } from "react";
import {AppBar} from "../AppBar";

export interface AppPageProps extends PageProps {
  title?: string
  children?: ReactNode
}

export const AppPage = (props: AppPageProps) => {
    const { title, children, ...other } = props
    return (
        <Page
            headerProps={{
                freeContent: (<AppBar title={title}/>)
            }}
            {...other}
        >
            {children}
        </Page>
    )
}

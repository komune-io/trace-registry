import { Page } from '@smartb/g2'
import { AppBar } from "components";
import { ReactNode } from "react";

export interface AppPageProps {
  title?: string
  children?: ReactNode
  flexContent?: boolean;
}

export const AppPage = (props: AppPageProps) => {
    const { title, children, flexContent } = props
    return (
        <Page
            headerProps={{
                freeContent: (<AppBar title={title}/>)
            }}
            flexContent={flexContent}
        >
            {children}
        </Page>
    )
}

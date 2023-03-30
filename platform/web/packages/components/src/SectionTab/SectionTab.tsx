import { Section } from '@smartb/g2'
import {ReactNode, useMemo} from 'react'
import {HeaderTab} from "@smartb/g2-layout/dist/Header/Header";

export interface Tab {
    key: string,
    label: string,
    component: ReactNode
}

export interface SectionTabProps {
    tabs: Tab[]
    currentTab: string
    goBackLink: JSX.Element
    onTabChange: (event: React.SyntheticEvent<Element, Event>, value: string) => void
}

export const SectionTab = (props: SectionTabProps) => {
    const { tabs, currentTab, onTabChange, goBackLink } = props

    const headerTabs: HeaderTab[] = useMemo(() => tabs.map(tag => ({
        key: tag.key,
        label: tag.label
    })), [tabs])

  const tabContent = useMemo(() => tabs.find(tab => tab.key === currentTab)?.component, [tabs, currentTab])
    return (
      <Section headerProps={{
          content: [{
              leftPart: [
                  goBackLink
              ],
          }],
          tabs: headerTabs,
          currentTab,
          onTabChange,
          sx: {
              "& .MuiTabs-flexContainer": {
                  justifyContent: "center"
              },
              "& .AruiHeader-contentContainer": {
                  gap: "0"
              },
              "& .AruiHeader-leftPartContainer": {
                  marginBottom: "-30px"
              }
          }
      }}
       flexContent
      >
        {tabContent}
      </Section>
    )
}

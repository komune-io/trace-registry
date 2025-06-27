import { HeaderTab } from '@komune-io/g2'
import { ReactNode, useMemo } from 'react'
import { Tabs } from "components";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { Stack } from '@mui/material';

export interface Tab {
    key: string,
    label: string,
    component: ReactNode
}

export interface SectionTabProps {
    tabs: Tab[]
    currentTab: string
    goBackLink?: JSX.Element
    onTabChange: (event: React.SyntheticEvent<Element, Event>, value: string) => void
    sx?: SxProps<Theme>;
    keepMounted?: boolean
    removeTabsWhenLessThan2?: boolean
}

export const SectionTab = (props: SectionTabProps) => {
    const { tabs, currentTab, onTabChange, goBackLink, sx, keepMounted = false, removeTabsWhenLessThan2 = false } = props

    const headerTabs: HeaderTab[] = useMemo(() => tabs.map(tag => ({
        key: tag.key,
        label: tag.label
    })), [tabs])

    const tabContent = useMemo(() => tabs.find(tab => tab.key === currentTab)?.component, [tabs, currentTab])

    const removeTabs = removeTabsWhenLessThan2 && headerTabs.length < 2

    return (
        <>
        {goBackLink}
        {!removeTabs && <Tabs
            tabs={headerTabs}
            currentTab={currentTab}
            onTabChange={onTabChange}
            sx={sx}
        />}
        {!keepMounted && tabContent}
        {keepMounted && tabs.map(tab => <Stack gap={4} key={tab.key} sx={{ display: tab.key === currentTab ? "flex" : "none" }} >{tab.component}</Stack>)}
        </>
    )
}

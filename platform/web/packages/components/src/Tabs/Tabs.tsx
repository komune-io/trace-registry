import { HeaderTab } from '@komune-io/g2'
import { Tabs as MuiTabs, TabsProps as MuiTabsProps, Tab } from '@mui/material'
import { useMemo } from 'react'

export interface TabsProps extends MuiTabsProps {
    /**
   * Provide this props if you want to have tabs in the header. It will disable the bottom padding and put the tabs instead.
   * @default []
   */
  tabs?: HeaderTab[]
  /**
   * Pass to this prop the key of the current tab
   */
  currentTab?: string
   /**
   * The event called when the tab changes
   */
   onTabChange?: (
    event: React.SyntheticEvent<Element, Event>,
    value: any
  ) => void
}

export const Tabs = (props: TabsProps) => {
    const  {tabs, currentTab, sx, onTabChange, ...other} = props

    const tabsDisplay = useMemo(
        () =>
          tabs &&
          tabs.map((tab) => (
            <Tab
              disableRipple
              key={tab.key}
              value={tab.key}
              label={tab.label}
              sx={{
                color: '#000000'
              }}
            />
          )),
        [tabs]
      )

  return (
        <MuiTabs
          {...other}
          value={currentTab}
          onChange={onTabChange}
          variant='scrollable'
          scrollButtons='auto'
          sx={{
            pb: '-1px',
            borderBottom: 1, 
            borderColor: 'divider',
            ...sx
          }}
        >
          {tabsDisplay}
        </MuiTabs>
  )
}

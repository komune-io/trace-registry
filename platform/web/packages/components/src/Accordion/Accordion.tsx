import { ExpandMoreRounded } from '@mui/icons-material'
import { Accordion as MuiAccordion, AccordionDetails, AccordionProps as MuiAccordionProps, AccordionSummary } from '@mui/material'
import React, { ForwardedRef, forwardRef } from 'react'

export interface AccordionProps extends Omit<MuiAccordionProps, "children"> {
    summary?: React.ReactNode
    children?: React.ReactNode
    size?: "small" | "medium"
    noExpandIcon?: boolean
}

export const Accordion = forwardRef((props: AccordionProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { sx, children, summary, size = "medium", noExpandIcon = false, ...other } = props
    return (
        <MuiAccordion
            {...other}
            ref={ref}
            square
            sx={{
                bgcolor: "transparent",
                "&::before": {
                    display: "none"
                },
                "&.Mui-expanded": {
                    my: size === "small" ? 0 : undefined
                },
                ...sx
            }}
            elevation={0}
        >
            <AccordionSummary
                expandIcon={noExpandIcon ? undefined : <ExpandMoreRounded />}
                sx={{
                    px: 0,
                    minHeight: size === "small" ? "0px !important" : undefined,
                    borderBottom:(theme) => `1px ${theme.palette.divider} solid`,
                    cursor: noExpandIcon ? "default" : undefined,
                }}
            >
                {summary}
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    p: size === "medium" ? 3 : 0,
                    pt: size === "small" ? 2 : undefined,
                }}
            >
                {children}
            </AccordionDetails>
        </MuiAccordion>
    )
})

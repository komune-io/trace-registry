import { NavigateNextRounded } from '@mui/icons-material'
import { Breadcrumbs as MuiBreadcrumbs, BreadcrumbsProps as MuiBreadcrumbsProps, Typography } from '@mui/material'
import { Link } from '@smartb/g2'
import { useMemo } from 'react'
import { Link as RouterLink } from "react-router-dom"

export type Crumb = {
    label: string
    url: string
}

export interface Breadcrumbs extends MuiBreadcrumbsProps {
    crumbs: Crumb[]
}

export const Breadcrumbs = (props: Breadcrumbs) => {
    const { crumbs } = props

    const crumbsDisplay = useMemo(() => crumbs.map((crumb, index) => index !== crumbs.length - 1 ? (
        <Link
            component={RouterLink}
            componentProps={{
                to: crumb.url
            }}
            key={crumb.url}
            sx={{
                color: "#757575",
                textDecoration: "none !important",
                "&:hover": {
                    textDecoration: "underline !important",
                }
            }}
        >
            {crumb.label}
        </Link>
    ) : (
        <Typography
            sx={{
                color: "#424242"
            }}
            key={crumb.url}
        >
            {crumb.label}
        </Typography>
    )), [crumbs])

    return (
        <MuiBreadcrumbs
            separator={
                <NavigateNextRounded
                    sx={{
                        color: "#757575"
                    }}
                />
            }
            sx={{
                "& .MuiBreadcrumbs-separator": {
                    margin: "0 4px"
                }
            }}
            aria-label="breadcrumb"
        >
            {crumbsDisplay}
        </MuiBreadcrumbs>
    )
}

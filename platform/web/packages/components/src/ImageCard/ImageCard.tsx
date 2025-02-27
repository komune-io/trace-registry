import { IconButton, Paper, Typography } from '@mui/material'
import { TMSMenuItem, useButtonMenu } from '../hooks'
import { useMemo } from 'react'
import { maybeAddItem } from '../utils'
import { useTranslation } from 'react-i18next'
import { DeleteRounded, EditRounded, MoreVert } from '@mui/icons-material'

export interface ImageCardProps {
    imageUrl: string
    onDelete?: () => Promise<any>
    editUrl?: string
    label?: string
}

export const ImageCard = (props: ImageCardProps) => {
    const { imageUrl, onDelete, editUrl, label } = props

    const { t } = useTranslation()

    const menuItems = useMemo((): TMSMenuItem<{}>[] => [
        ...maybeAddItem<TMSMenuItem<{}>>(!!editUrl, {
            key: "edit",
            label: t("edit"),
            icon: <EditRounded />,
            to: editUrl
        }),
        ...maybeAddItem<TMSMenuItem<{}>>(!!onDelete, {
            key: "delete",
            label: t("delete"),
            color: "#B01717",
            icon: <DeleteRounded />,
            onClick: onDelete
        }),
    ], [onDelete, editUrl])

    const { buttonProps, menu } = useButtonMenu({
        items: menuItems,

    })

    return (
        <Paper
            sx={{
                px: 2,
                py: 1.5,
                gap: 1.5,
                display: "flex",
                flexDirection: "column",
                positon: "relative",
                "& .cardImage": {
                    width: "280px",
                    height: "auto"
                }
            }}
        >
            <img
                src={imageUrl}
                className="cardImage"
            />
            {label && <Typography
                variant='h4'
                sx={{
                    fontWeight: 700
                }}
            >
                {label}
            </Typography>}
            <IconButton
                size='small'
                {...buttonProps}
                sx={{
                    position: "absolute",
                    top: "8px",
                    right: "8px"
                }}
            >
                <MoreVert />
            </IconButton>
            {menu}
        </Paper>
    )
}

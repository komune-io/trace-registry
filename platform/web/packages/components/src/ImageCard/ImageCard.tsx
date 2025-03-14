import { IconButton, Paper, Typography } from '@mui/material'
import { TMSMenuItem, useButtonMenu } from '../hooks'
import { useMemo } from 'react'
import { maybeAddItem } from '../utils'
import { useTranslation } from 'react-i18next'
import { EditRounded, MoreVert } from '@mui/icons-material'
import { UnCachedImage } from '../UnCachedImage'
import { iconPack } from '../Icons'

export interface ImageCardProps {
    imageUrl: string
    onDelete?: () => Promise<any>
    onClick?: () => void
    editUrl?: string
    label?: string
}

export const ImageCard = (props: ImageCardProps) => {
    const { imageUrl, onDelete, editUrl, label, onClick } = props

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
            icon: iconPack.trash,
            onClick: onDelete
        }),
    ], [onDelete, editUrl])

    const { buttonProps, menu } = useButtonMenu({
        items: menuItems,
    })

    return (
        <Paper
            onClick={onClick}
            sx={{
                px: 2,
                py: 1.5,
                gap: 1.5,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                cursor: onClick ? "pointer" : undefined,
                border: "1px solid #E4DEE7",
                "& .cardImage": {
                    width: "242px",
                    height: "auto"
                }
            }}
        >
            <UnCachedImage
                src={imageUrl}
                className="cardImage"
            />
            {label && <Typography
                variant='h5'
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

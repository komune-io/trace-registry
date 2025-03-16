import {
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListProps,
    alpha,
    Box,
    Typography
} from '@mui/material'
import { useCallback, useMemo } from 'react'
import {
    useTheme,
} from '@komune-io/g2'
import { TMSMenuItems } from '../hooks'
import { LocalTheme } from '../utils'
import { DropdownMenu, someItemsSelected } from '../DropdownMenu'

interface MenuProps extends ListProps {
    menu: TMSMenuItems[]
}

export const Menu = (props: MenuProps) => {
    const { menu, classes, sx, ...other } = props
    const uiMenu = useMemo(
        () =>
            menu.map((item) => (
                <Item
                    {...item}
                    key={item.key}
                />
            )),
        [menu]
    )
    return <List
        sx={{
           gap: 1,
           py: 0,
            ...sx
        }}
        {...other}>{uiMenu}</List>
}


const Item = (props: TMSMenuItems) => {
    const {
        icon,
        label,
        href,
        onClick,
        componentProps,
        items,
        component,
        isSelected = false,
        number,
        ...other
    } = props
    const theme = useTheme<LocalTheme>()
    const onItemClick = useCallback(
        () => onClick && !href && onClick(),
        [onClick, href]
    )
    const childIsSelected = items ? someItemsSelected(items) : false
    return (
        <>
            <ListItemButton
                component={component ? component : href ? 'a' : 'div'}
                onClick={onItemClick}
                href={href}
                selected={isSelected}
                sx={{
                    color: "#000000 !important",
                    bgcolor: isSelected ? `${alpha("#000000", 0.05)} !important` : undefined,
                    transform: isSelected ? theme.local?.rotation : undefined,
                    transition: "0.2s",
                    "&:hover": {
                        bgcolor: alpha("#000000", 0.1),
                        transform: theme.local?.rotation
                    },
                    p: 0.75,
                    mt: 0.5
                }}
                {...componentProps}
                {...other}
            >
                {!!icon && (
                    <ListItemIcon
                        sx={{
                            minWidth: 'unset',
                            marginRight: '12px'
                        }}
                    >
                        {icon}
                    </ListItemIcon>
                )}
                {!!label && (
                    <ListItemText
                        primaryTypographyProps={{ color: 'inherit', variant: "body2", fontWeight: "bold" }}
                        primary={label}
                    />
                )}
                {!!number && (
                    <Box
                        sx={{
                            bgcolor: alpha("#000000", 0.1),
                            color: "#000000",
                            width: "26px",
                            height: "26px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            ml: 0.5
                        }}
                    >
                        <Typography
                            variant="caption"
                        >
                            {number}
                        </Typography>
                    </Box>
                )}
            </ListItemButton>
            {items && items.length > 0 && <Collapse in={isSelected || childIsSelected}>
                <DropdownMenu
                    items={items}
                    sx={{
                        pl: 0.5,
                    }}
                />
            </Collapse>}
        </>
    )
}

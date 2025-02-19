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
    DropdownMenu,
} from '@komune-io/g2'
import { TMSMenuItems } from '../hooks'



interface MenuProps extends ListProps {
    menu: TMSMenuItems[]
}

export const Menu = (props: MenuProps) => {
    const { menu, classes, ...other } = props
    const uiMenu = useMemo(
        () =>
            menu.map((item) => (
                <Item
                    {...item}
                    key={item.key}
                />
            )),
        [classes, menu]
    )
    return <List {...other}>{uiMenu}</List>
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
    const onItemClick = useCallback(
        () => onClick && !href && onClick(),
        [onClick, href]
    )
    return (
        <>
            <ListItemButton
                component={component ? component : href ? 'a' : 'div'}
                onClick={onItemClick}
                href={href}
                selected={isSelected}
                sx={{
                    color: "secondary.main"
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
                        primaryTypographyProps={{ color: 'inherit', variant: isSelected ? "subtitle2" : "body2" }}
                        primary={label}
                    />
                )}
                {!!number && (
                    <Box
                        sx={{
                            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                            color: "primary.main",
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
            {items && items.length > 0 && <Collapse in={isSelected}>
                <DropdownMenu
                    items={items}
                    sx={{
                        pl: 2,
                        '& .MuiAccordionSummary-root:hover .MuiAccordionSummary-content': {
                            bgcolor: (theme) => alpha(theme.palette.secondary.main, 0.1)
                        },
                        '& .MuiListItemButton-root:hover > .MenuItem-divider': {
                            bgcolor: (theme) => alpha(theme.palette.secondary.main, 0.1)
                        },
                        '& .MuiListItemButton-root': {
                            color: "text.secondary"
                        }
                    }}
                />
            </Collapse>}
        </>
    )
}

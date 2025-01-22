import {
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListProps,
    alpha
} from '@mui/material'
import { useCallback, useMemo } from 'react'
import {
    DropdownMenu,
    MenuItems,
} from '@komune-io/g2'



interface Wco2MenuProps extends ListProps {
    menu: MenuItems[]
}

export const Wco2Menu = (props: Wco2MenuProps) => {
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


const Item = (props: MenuItems) => {
    const {
        icon,
        label,
        href,
        onClick,
        componentProps,
        items,
        component,
        isSelected = false,
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
            </ListItemButton>
            {items && items.length > 0 && <Collapse in={isSelected}>
                <DropdownMenu
                    items={items}
                    sx={{
                        pl: 2,
                        pr: 1,
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

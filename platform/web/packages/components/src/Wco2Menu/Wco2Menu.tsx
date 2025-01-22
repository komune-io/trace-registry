import {
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListProps
} from '@mui/material'
import { useCallback, useMemo } from 'react'
import {
    DropdownMenu,
    MenuItems,
} from '@komune-io/g2'


//   const useStyles = makeG2STyles<{ paddingLeft: number }>()(
//     (theme, { paddingLeft }) => ({
//       item: {
//         paddingLeft: `${paddingLeft}px`,
//         color: 'black',
//         '& .MuiListItemIcon-root': {
//           color: 'black',
//           minWidth: 'unset',
//           marginRight: '12px'
//         }
//       },
//       selectedItem: {
//         background: `${theme.colors.primary}33`,
//         color: theme.colors.primary,
//         '& .MuiListItemIcon-root': {
//           color: theme.colors.primary
//         }
//       },
//       selectedTitle: {
//         '& .MuiTypography-root': {
//           color: theme.colors.primary
//         }
//       },
//       itemText: {
//         '& .MuiTypography-root': {
//           fontSize: `${17 - paddingLeft / 10}px`,
//           overflow: 'hidden',
//           WebkitLineClamp: 3,
//           display: '-webkit-box',
//           WebkitBoxOrient: 'vertical',
//           textOverflow: 'ellipsis'
//         }
//       },
//       subList: {
//         padding: '0px'
//       }
//     })
//   )


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
            {items && items.length > 0 && <Collapse in={isSelected}>
                <DropdownMenu
                    items={items}
                />
            </Collapse>}
        </ListItemButton>
    )
}

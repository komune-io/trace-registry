import { ButtonProps, MenuItem } from '@komune-io/g2'
import { CircularProgress, ClickAwayListener, Grow, ListItemIcon, ListItemText, MenuList, MenuItem as MuiMenuItem, Paper, Popper } from '@mui/material'
import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

export type TMSMenuItem = MenuItem & {
    to?: string
    color?: string
    isLoading?: boolean,
    disabled?: boolean
}

export interface useButtonMenuParams {
    items?: TMSMenuItem[]
    closeOnMenuClick?: boolean
}

export const useButtonMenu = (params: useButtonMenuParams) => {
    const { items, closeOnMenuClick = true } = params
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = useCallback((event: ChangeEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }, [])

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, [],)

    const menu = useMemo(() => {
        return (<MenuElement
            open={open}
            items={items}
            closeOnMenuClick={closeOnMenuClick}
            anchor={anchorEl}
            onClose={handleClose} />)
    }, [items, anchorEl, open, closeOnMenuClick, handleClose])

    // @ts-ignore
    const buttonProps: Partial<Omit<ButtonProps, 'variant'>> = useMemo(() => ({
        "aria-controls": open ? 'basic-menu' : undefined,
        "aria-haspopup": "true" as "true",
        "aria-expanded": open ? 'true' as "true" : undefined,
        onClick: handleClick
    }), [open, handleClick, menu])

    return {
        menu,
        handleClose,
        buttonProps
    }
}

interface MenuElementProps {
    items?: TMSMenuItem[]
    anchor: HTMLElement | null
    open: boolean,
    onClose: () => void
    closeOnMenuClick: boolean
}

const MenuElement = (props: MenuElementProps) => {
    const { items, anchor, open, onClose, closeOnMenuClick } = props
    const handleCloseOnClick = closeOnMenuClick ? onClose : undefined
    const handleListKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            onClose()
        } else if (event.key === 'Escape') {
            onClose()
        }
    }

    return (
        <Popper
            open={open}
            anchorEl={anchor}
            role={undefined}
            placement="bottom-start"
            sx={{
                zIndex: 150
            }}
            transition
            disablePortal
        >
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin:
                            placement === 'bottom-start' ? 'left top' : 'left bottom',
                    }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            borderRadius: 1.5,

                        }}
                        onClick={handleCloseOnClick}
                    >
                        <ClickAwayListener onClickAway={onClose}>
                            <MenuList
                                autoFocusItem={open}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                                onKeyDown={handleListKeyDown}
                            >
                                {
                                    items?.map((item, key) => (<MenuItemElement key={key} item={item} afterClick={handleCloseOnClick} />))
                                }
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    )
}

interface MenuItemElementProps {
    item: TMSMenuItem
    afterClick?: () => void
}

const MenuItemElement = (props: MenuItemElementProps) => {
    const { item, afterClick } = props
    const { to, icon, label, color, isLoading, key, onClick, ...rest } = item
    const [loading, setloading] = useState(false)

    const onClickMemoisied = useCallback(async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.stopPropagation()
        if (onClick) {
            setloading(true)
            await onClick()
            setloading(false)
        }
        // the event.stopPropagation() prevents the onclick of Menu from being called
        afterClick && afterClick()
    }, [onClick, afterClick])

    const loadingDef = isLoading ?? loading
    return (
        //@ts-ignore
        <MuiMenuItem
            key={key}
            {...rest}
            onClick={onClickMemoisied}
            sx={{
                color,
                "&:hover": {
                    bgcolor: color ? color + "1A" : undefined
                },
                "&:hover .MuiListItemIcon-root, &:hover .MuiTypography-root": {
                    color
                }
            }}
            //@ts-ignore
            component={to ? Link : undefined}
            to={to}
        >
            {(loadingDef || icon) && <ListItemIcon>
                {loadingDef ?
                    <CircularProgress size={24} color='inherit' />
                    :
                    icon
                }
            </ListItemIcon>}
            <ListItemText>
                {label}
            </ListItemText>
        </MuiMenuItem>
    )
}

import { MenuItems, useTheme } from '@komune-io/g2'
import {
  ListItemText,
  ListItemButton,
  List,
  MenuListProps,
  Divider,
  Stack,
  alpha
} from '@mui/material'
import { SpecialBehaviorAccordion } from './SpecialBehaviorAccordion'
import { LocalTheme } from '../utils'

export interface DropdownMenuProps extends MenuListProps {
  items: MenuItems[]
  topLevel?: boolean
}

export const DropdownMenu = (props: DropdownMenuProps) => {
  const { items, sx, topLevel = true, ...other } = props

  const display = items.map((item) => <Item topLevel={topLevel} {...item} key={item.key} />)
  return (
    <List
      sx={{
        p: 'unset',
        pt: 1.5,
        ...sx
      }}
      {...other}
    >
      {display}
    </List>
  )
}

const Item = (props: MenuItems<{}> & { topLevel: boolean }) => {
  const {
    items,
    isSelected,
    label,
    icon,
    component,
    componentProps,
    href,
    topLevel,
    ...other
  } = props
  const g2Theme = useTheme<LocalTheme>()

  const childIsSelected = items ? someItemsSelected(items) : false
  const isOpen = childIsSelected || isSelected

  if (items)
    return (
      <ListItemButton
        sx={{
          p: 0,
          '&:hover': {
            bgcolor: 'unset'
          }
        }}
        disableRipple
        disableTouchRipple
      >
        <Divider
          sx={{ display: 'none', ml: 1.5 }}
          className='subMenuItem-divider'
          orientation='vertical'
          flexItem
        />
        <SpecialBehaviorAccordion
          elevation={0}
          disableGutters
          expanded={isOpen}
          sx={{
            cursor: 'normal',
            bgcolor: 'transparent',
            width: topLevel ? "100%" : 'calc(100% - 12px)',
            px: 0,
            '&:not(:last-child)': {
              borderBottom: 0
            },
            '&::before': {
              display: 'none'
            }
          }}
          childIsSelected={childIsSelected}
          item={props}
        >
          <DropdownMenu topLevel={false} items={items} />
        </SpecialBehaviorAccordion>
      </ListItemButton>
    )
  return (
    <ListItemButton
      component={component ? component : href ? 'a' : 'div'}
      href={href}
      disableRipple
      disableTouchRipple
      sx={{
        "& .MenuItem-divider": {
          transition: "0.2s",
          bgcolor: isSelected ? alpha('#000000', 0.05) : undefined,
          transform: isSelected ? g2Theme.local?.rotation : undefined,
        },
        '&:hover .MenuItem-divider': {
          bgcolor: alpha('#000000', 0.05),
          transform: g2Theme.local?.rotation
        },
        '&:hover': {
          bgcolor: "unset"
        },
        gap: 2,
        p: 0,
        py: 0.5,
        color: 'text.secondary'
      }}
      {...componentProps}
      {...other}
    >
      <Divider
        sx={{ display: 'none', ml: 1.5, my: -0.5 }}
        className='subMenuItem-divider'
        orientation='vertical'
        flexItem
      />
      <Stack
        className='MenuItem-divider'
        direction='row'
        alignItems='center'
        gap={1}
        minWidth={0}
        width='100%'
      >
        {icon}
        <ListItemText
          sx={{ m: 0 }}
          primaryTypographyProps={{
            noWrap: true,
            sx: {
              color: '#000000',
              fontWeight: isSelected ? 600 : undefined
            },
            variant: 'body2'
          }}
        >
          {label}
        </ListItemText>
      </Stack>
    </ListItemButton>
  )
}

export const someItemsSelected = (items: MenuItems[]) => {
  const isSelected = items.some((item) => item.isSelected)
  if (isSelected) return true
  const childIsSelected = items.some((item) => {
    if (item.items) return someItemsSelected(item.items)
    return false
  })
  return childIsSelected
}

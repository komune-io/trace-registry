import { styled, ToggleButton, toggleButtonGroupClasses, ToggleButtonProps } from '@mui/material'
import { $getSelection, ElementNode } from 'lexical'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $setBlocksType } from '@lexical/selection'
import { useCallback } from 'react'

export const TglButton = styled(ToggleButton)({
    border: 0,
    color: '#BDBDBD',
    fontWeight: 600,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
        border: 0
    },
    '&.Mui-selected': {
        background: 'unset',
        color: '#616161'
    }
})

export interface TglButtonProps extends ToggleButtonProps {
    value: string
    createElementFnc: () => ElementNode
}

export const ToolBarFormatButton = (props: TglButtonProps) => {
    const { sx, value, createElementFnc, ...other } = props
    const [editor] = useLexicalComposerContext();

    const onChange = useCallback(
      () => {
        editor.update(() => {
            const selection = $getSelection();
            $setBlocksType(selection, () => createElementFnc());
        })
      },
      [createElementFnc, editor.update],
    )
    
    return (
        <TglButton
            value={value}
            aria-label={value}
            onChange={onChange}
            {...other}
        />
    )
}


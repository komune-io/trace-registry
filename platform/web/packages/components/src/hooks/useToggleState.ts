import {Dispatch, SetStateAction, useCallback, useState} from 'react'

export interface useToggleStateParams {
  defaultOpen?: boolean
}

export type UseToggleStateReturn = [
    boolean, // The current state (open or closed)
    Dispatch<SetStateAction<boolean>>, // Function to update the state
    () => void // Function to toggle the state
];

export const useToggleState = (params?: useToggleStateParams): UseToggleStateReturn => {
  const {defaultOpen = false} = params ?? {}
    const [open, setOpen] = useState(defaultOpen)
  
    const toggle = useCallback(
      () => {
        setOpen(old => !old)
      },
      [],
    )

    return [
        open,
        setOpen,
        toggle
    ]
}

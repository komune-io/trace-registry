import { FormControlLabel, FormControlLabelProps } from '@mui/material'
import { Switch } from '../Switch'

export interface LabeledSwitchProps extends Omit<FormControlLabelProps, "control"> {}

export const LabeledSwitch = (props: LabeledSwitchProps) => {
    const {checked, onChange, ...others} = props
    return (
        <FormControlLabel
            {...others}
            control={<Switch checked={checked} onChange={onChange}/>}
            sx={{
                gap: 1.5,
                margin: "unset",
                width: "fit-content"
            }}
            slotProps={{
                typography: {
                    variant: "subtitle2"
                }
            }}
            labelPlacement='start'
        />
    )
}

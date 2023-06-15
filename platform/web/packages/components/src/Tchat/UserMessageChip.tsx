import {Chip, ChipProps} from '@smartb/g2'

export const UserMessageChip = (props: ChipProps) => {
  return (
    <Chip
        {...props}
        color="#FBF0D3"
        sx={{
            borderRadius: "12px",
            whiteSpace: "pre-line",
            padding: (theme) => theme.spacing(1, 2)
        }}
    />
  )
}

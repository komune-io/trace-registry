import {Chip, ChipProps} from '@smartb/g2'

export const UserMessageChip = (props: ChipProps) => {
  return (
    <Chip
        {...props}
        color="#000000"
        sx={{
            borderRadius: "12px",
            padding: (theme) => theme.spacing(1, 2),
            bgcolor: "#FBF0D3",
            width: "fit-content",
            "& .MuiChip-label": {
              padding: "unset",
              whiteSpace: "pre-line",
              overflow: "visible",
              fontSize: "1rem",
              lineHeight: 1.5
            },
            ...props.sx
        }}
    />
  )
}

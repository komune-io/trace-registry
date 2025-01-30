import { Paper, PaperProps } from '@mui/material'

export const SectionPaper = (props: PaperProps) => {
    const { sx, children, ...other } = props
    return (
        <Paper
            sx={{
                boxShadow: "10px 7px 20px 0px #EDE9EF, -4px 0px 2px 0px #F6F4F7 inset",
                borderRadius: "2px 24px 24px 0px",
                py: 3,
                px: "95px",
                gap: 3,
                display: "fleX",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
                ...sx
            }}
            {...other}
        >
            {children}
        </Paper>

    )
}

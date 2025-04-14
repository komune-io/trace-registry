import { Paper, PaperProps } from '@mui/material'

export const SectionPaper = (props: PaperProps) => {
    const { sx, children, ...other } = props
    return (
        <Paper
            sx={{
                borderRadius: "2px 24px 24px 0px",
                py: 3,
                px: {
                    xs: 4,
                    sm: 4,
                    md: "95px",
                },
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

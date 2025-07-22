import { Paper, PaperProps } from '@mui/material'

export const SectionPaper = (props: PaperProps) => {
    const { sx, children, ...other } = props
    return (
        <Paper
            sx={{
                py: 3,
                px: {
                    xs: 4,
                    sm: 5,
                    md: 6,
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

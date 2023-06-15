import { Typography, TypographyProps } from "@mui/material"

export const ResponseText = (props: TypographyProps) => {
    return (
        <Typography
            {...props}
            sx={{
                align: 'justify',
                fontFamily: "'Roboto'",
                whiteSpace: "pre-line",
                padding: (theme) => theme.spacing(0, 2)
            }}
        />
    )
}

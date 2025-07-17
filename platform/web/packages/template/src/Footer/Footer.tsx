import { Box, Link, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import {useThemeContext} from "@komune-io/g2"

export const Footer = () => {
    const { t } = useTranslation()
    const { openDrawer} = useThemeContext()
    return (
        <Box
            component="footer" display="flex" position="fixed"
            bottom={0} right={0} left={0} zIndex={-5} gap={1}
            justifyContent="center" p={1}
            sx={{
                marginLeft: {
                    sm: "",
                    md: openDrawer ? "234px": ""
                },
                width: {
                    sm: "100vw",
                    md: openDrawer ? "calc(100vw - 234px)" : "100vw"
                },
                flexWrap: "wrap"
            }}
        >
            <Typography variant="caption">
                {t("poweredBy")}
            </Typography>
            <Link
                color="primary" variant="caption"
                href="https://kosm.io/"
                target="_blank"
            >
                Kosmio
            </Link>
        </Box>
    )
}
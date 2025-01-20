import { Box, IconButton } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { Menu } from "@mui/icons-material";
import {ElementType} from "react";
import {Link} from "@komune-io/g2"

export interface PermanentHeaderProps {
    toggleOpenDrawer: () => void
}

export const PermanentHeader: ElementType<PermanentHeaderProps> = (props: PermanentHeaderProps) => {
    const {toggleOpenDrawer} = props
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                padding: "16px",
                gap: "16px",
                alignItems: "center",
            }}
        >
            <Box />
            <Link
                component={RouterLink}
                componentProps={{to: "/"}}
                color="primary"
                variant="h6"
                style={{
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    fontWeight: 600,
                    gap: "10px"
                }}
            >
                <img src="/logo.png" style={{ width: "auto", height: "35px" }} />
                WikiCO2
            </Link>
            <IconButton onClick={toggleOpenDrawer}>
                <Menu />
            </IconButton>
        </Box>
    );
};
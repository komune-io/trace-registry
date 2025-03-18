import { Box, IconButton } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { Menu } from "@mui/icons-material";
import {ElementType} from "react";
import {Link} from "@komune-io/g2"
import {config} from "domain-components";
import {Logo} from "../Icons";

export interface PermanentHeaderProps {
    toggleOpenDrawer: () => void
}

export const PermanentHeader: ElementType<PermanentHeaderProps> = (props: PermanentHeaderProps) => {
    const {toggleOpenDrawer} = props
    const {theme} = config()
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
                <Logo src={theme?.logo?.url ?? "trace.png"} style={{width: "154px", height: "54px"}} />
            </Link>
            <IconButton sx={{color: "black"}} onClick={toggleOpenDrawer}>
                <Menu />
            </IconButton>
        </Box>
    );
};
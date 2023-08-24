import { Box, IconButton } from "@mui/material"
import { Link } from "react-router-dom"
import { TraceIcon } from "../Icons";
import { Menu } from "@mui/icons-material";

export interface PermanentHeaderProps {
    toggleOpenDrawer: () => void
}

export const PermanentHeader = (props: PermanentHeaderProps) => {
    const {toggleOpenDrawer} = props
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                padding: "12px",
                gap: "16px",
                alignItems: "center",
            }}
        >
            <Box />
            <Link
                to="/"
                style={{
                    flexGrow: 1,
                    display: "flex",
                }}
            >
                <TraceIcon style={{ width: "100%", height: "35px" }} />
            </Link>
            <IconButton onClick={toggleOpenDrawer}>
                <Menu />
            </IconButton>
        </Box>
    );
};
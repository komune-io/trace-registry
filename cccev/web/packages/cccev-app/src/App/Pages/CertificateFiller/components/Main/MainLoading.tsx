import { Skeleton, Stack } from '@mui/material'

export const MainLoading = () => {
    return (
        <Stack
            sx={{ padding: "10px 20px", paddingTop: "70px", maxWidth: "1500px", margin: "auto" }}
            spacing={5}
        >
            <Skeleton sx={{alignSelf: "flex-end", transform: "none"}} width="500px" height="40px" />
            <Skeleton sx={{transform: "none"}}  width="100%" height="300px" />
            <Skeleton sx={{transform: "none"}} width="100%" height="200px" />
        </Stack>
    )
}

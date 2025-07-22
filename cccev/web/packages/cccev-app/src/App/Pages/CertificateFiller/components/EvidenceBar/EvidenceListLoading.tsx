import { Title } from './Title'
import { Divider, Skeleton, Stack } from '@mui/material'

export const EvidenceListLoading = () => {
    return (
        <Stack
            sx={{ padding: "0px 10px" }}
            alignItems="center"
            spacing={3}
        >
            <Title />
            <Divider sx={{ borderColor: "#8294A3", borderBottomWidth: "2px" }} style={{ marginTop: "5px" }} flexItem />
            <Skeleton sx={{transform: "none"}} width="100%" height="40px" />
            <Skeleton sx={{transform: "none"}} width="100%" height="40px" />
            <Skeleton sx={{transform: "none"}} width="100%" height="40px" />
            <Skeleton sx={{transform: "none", alignSelf: "center"}} width="180px" height="35px" />
        </Stack>
    )
}

import { Stack } from '@mui/material'
import {TraceIcon} from "components";
export const LandingPage = () => {
  return (
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
            width: "100%",
            height: "100%",
            "& .AruiPage-pageCenterer": {
                flexGrow: 1,
                overflow: "auto"
            }
        }}
      >
        <TraceIcon />
      </Stack>
  )
}

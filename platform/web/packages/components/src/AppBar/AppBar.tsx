import {TraceIcon} from "../Icons";
import {Stack, Typography} from "@mui/material";
import {SeparationIcon} from "../Icons/SeparationIcon";

export interface AppBarProps {
  title?: string
}

export const AppBar = (props: AppBarProps) => {
  const { title } = props
  const titleTypo = title ? <Typography key="projectTitle" variant="h6">{title}</Typography> : undefined
  return (
    <Stack direction="row" height={40} alignItems="center" spacing={6}>
      <TraceIcon /> <SeparationIcon /> {titleTypo}
    </Stack>
  )
}

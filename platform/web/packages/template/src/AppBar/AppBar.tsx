import {Stack, Typography} from "@mui/material";
import {TraceIcon, SeparationIcon} from "components";
import { Link } from "react-router-dom";
export interface AppBarProps {
  title?: string
}

export const AppBar = (props: AppBarProps) => {
  const { title } = props
  const titleTypo = title ? <Typography key="projectTitle" variant="h6">{title}</Typography> : undefined
  return (
    <Stack direction="row" height={40} alignItems="center" spacing={6}>
     <Link to="/"><TraceIcon/></Link> <SeparationIcon /> {titleTypo}
    </Stack>
  )
}

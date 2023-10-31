import {Skeleton} from '@mui/material'

interface ThumbnailLoadingProps {
    parentWidth: number
}

export const ThumbnailLoading = (props: ThumbnailLoadingProps) => {
    const {parentWidth} = props
  return (
    <Skeleton animation="wave" variant="rectangular" width={parentWidth} height={(parentWidth * 297) / 210} />
  )
}

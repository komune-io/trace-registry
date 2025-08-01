import { Stack, Typography } from '@mui/material'

export interface CommentContainerProps {
  title?: string
  comment?: string
}

export const CommentContainer = (props: CommentContainerProps) => {
  const { title, comment } = props
  return (
    <Stack
      gap={3}
      p={3}
      borderRadius={1}
      width="100%"
      border="1px solid #E0E0E0"
    >
      <Typography
        variant='subtitle1'
      >
        {title}
      </Typography>
      <Typography
        variant='body2'
        sx={{
          borderLeft: '2px solid #9E9E9E',
          pl: 1
        }}
      >
        {comment}
      </Typography>
    </Stack >
  )
}

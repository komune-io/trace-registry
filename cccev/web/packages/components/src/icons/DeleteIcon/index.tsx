import React from 'react'
import { ReactComponent } from './DeleteIcon.svg'
import { MergeReactElementProps } from 'utils'

interface DeleteIconBasicProps {
  color?: string
}

type DeleteIconProps = MergeReactElementProps<'svg', DeleteIconBasicProps>

export const DeleteIcon = React.forwardRef(
  (props: DeleteIconProps, ref: React.Ref<SVGSVGElement>) => {
    const {color = "#353945"} = props
    return <ReactComponent stroke={color} ref={ref} {...props} />
  }
)

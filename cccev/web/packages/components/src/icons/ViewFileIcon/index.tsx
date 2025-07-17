import React from 'react'
import { ReactComponent } from './ViewFileIcon.svg'
import { MergeReactElementProps } from 'utils'

interface ViewFileIconBasicProps {
  color?: string
}

type ViewFileIconProps = MergeReactElementProps<'svg', ViewFileIconBasicProps>

export const ViewFileIcon = React.forwardRef(
  (props: ViewFileIconProps, ref: React.Ref<SVGSVGElement>) => {
    const {color = "#353945"} = props
    return <ReactComponent fill={color} ref={ref} {...props} />
  }
)

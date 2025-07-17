import React from 'react'
import { ReactComponent } from './DropFileIcon.svg'
import { MergeReactElementProps } from 'utils'

interface DropFileIconBasicProps {
}

type DropFileIconProps = MergeReactElementProps<'svg', DropFileIconBasicProps>

export const DropFileIcon = React.forwardRef(
  (props: DropFileIconProps, ref: React.Ref<SVGSVGElement>) => {
    return <ReactComponent ref={ref} {...props} />
  }
)

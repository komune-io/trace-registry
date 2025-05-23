import React from 'react'
import ReactComponent from './icon.svg?react'
import { MergeReactElementProps } from '@komune-io/g2-utils'

interface SeparationIconProps {
  color?: string
}

type Props = MergeReactElementProps<'svg', SeparationIconProps>

export const SeparationIcon = React.forwardRef(
  (props: Props, ref: React.Ref<SVGSVGElement>) => {
    const { color = '#EDBA27' } = props
    return <ReactComponent fill={color} ref={ref} {...props} />
  }
)

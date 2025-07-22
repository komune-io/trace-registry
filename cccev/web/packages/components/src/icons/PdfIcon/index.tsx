import React from 'react'
import { ReactComponent } from './PdfIcon.svg'
import { MergeReactElementProps } from 'utils'

interface PdfIconBasicProps {
  color?: string
}

type PdfIconProps = MergeReactElementProps<'svg', PdfIconBasicProps>

export const PdfIcon = React.forwardRef(
  (props: PdfIconProps, ref: React.Ref<SVGSVGElement>) => {
    const {color =  "#E15022"} = props
    return <ReactComponent fill={color} ref={ref} {...props} />
  }
)

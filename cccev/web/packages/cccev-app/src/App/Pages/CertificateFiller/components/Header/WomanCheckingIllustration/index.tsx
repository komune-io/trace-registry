import React from 'react'
import { ReactComponent } from './WomanCheckingIllustration.svg'
import { MergeReactElementProps } from 'utils'

interface ClipboardBasicProps {
}

type ClipboardProps = MergeReactElementProps<'svg', ClipboardBasicProps>

export const WomanCheckingIllustration = React.forwardRef(
  (props: ClipboardProps, ref: React.Ref<SVGSVGElement>) => {
    return <ReactComponent ref={ref} {...props} />
  }
)

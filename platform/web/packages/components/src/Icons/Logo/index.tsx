import { MergeReactElementProps } from '@komune-io/g2'

interface LogoProps {
}

type Props = MergeReactElementProps<'img', LogoProps>

export const Logo =  (props: Props) => {
  return <img {...props} />;
}

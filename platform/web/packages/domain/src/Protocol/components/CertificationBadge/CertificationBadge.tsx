import { Badge, BadgeProps } from 'components'

export interface CertificationBadgeProps  extends Omit<BadgeProps, 'label' | 'icon'> {
       name: string;
    image?: string | JSX.Element
}

export const CertificationBadge = (props: CertificationBadgeProps) => {
    const { name, image, ...rest } = props
  return (
    <Badge label={name} icon={image} {...rest} />
  )
}

import {Badge, BadgeProps, config} from 'components'

export interface CertificationBadgeProps extends Omit<BadgeProps, 'label' | 'icon'> {
  name?: string;
  image?: string | JSX.Element
}

export const CertificationBadge = (props: CertificationBadgeProps) => {
  const { name, image: imageProps, ...rest } = props

  const { platform } = config()

  let image = imageProps
  if (imageProps && typeof imageProps === 'string' && !imageProps.startsWith('http')) {
    const separator = imageProps.startsWith('/') ? '' : '/'
    image = `${platform.url}${separator}${image}`
  }
  return (
    <Badge label={name} icon={image} {...rest} />
  )
}

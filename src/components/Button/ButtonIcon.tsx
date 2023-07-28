import { Icon } from '~/assets/icon'

interface ButtonIconProps {
  icon: keyof typeof Icon
  size?: number
}

export function ButtonIcon ({ icon, size = 18 }: ButtonIconProps) {
  const IconSelected = Icon[icon]

  return (
    <IconSelected size={size} />
  )
}

import { Icon } from '~/assets/icon'

interface ButtonIconProps {
  icon: keyof typeof Icon
}

export function ButtonIcon ({ icon }: ButtonIconProps) {
  const IconSelected = Icon[icon]

  return (
    <IconSelected size={18} />
  )
}

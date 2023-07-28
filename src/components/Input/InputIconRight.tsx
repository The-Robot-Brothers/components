import { Icon } from '~/assets/icon'

type InputIconRightProps = {
  icon: keyof typeof Icon
  value: string
}

export function InputIconRight ({ icon, value }: InputIconRightProps) {
  const IconSelected = Icon[icon]

  return (
    <IconSelected
      className={`
      absolute right-2 peer-focus:fill-primary
      ${value !== '' ? 'fill-primary' : 'fill-primary-950'}
    `}
      size={22}
    />

  )
}

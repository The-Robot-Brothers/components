import { Icon } from '~/assets/icon'

type InputIconLeftProps = {
  icon: keyof typeof Icon
  value: string
}

export function InputIconLeft ({ icon, value }: InputIconLeftProps) {
  const IconSelected = Icon[icon]

  return (
    <IconSelected
      className={`
      absolute left-2 peer-focus:fill-primary
      ${value !== '' ? 'fill-primary' : 'fill-primary-950'}
    `}
      size={22}
    />

  )
}

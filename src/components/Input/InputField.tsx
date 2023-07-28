import { ComponentProps } from 'react'

type InputFieldProps = ComponentProps<'input'> & {
  id: string
  onInputChange: (value: string) => void
}

export function InputField ({ id, onInputChange }: InputFieldProps) {
  return (
    <input
      id={id}
      type='text'
      className='peer h-10 w-full px-9 rounded outline-none border border-primary focus:border-primary-500 text-primary-950'
      onChange={e => onInputChange(e.target.value)}
    />
  )
}

import { ReactNode } from 'react'

interface InputRootProps {
  id: string
  children: ReactNode
}

export function InputRoot ({ id, children }: InputRootProps) {
  return (
    <label htmlFor={id} className='grid gap-1 w-full'>
      {children}
    </label>
  )
}

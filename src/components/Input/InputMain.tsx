import { ReactNode } from 'react'

type InputMainProps = {
  children: ReactNode
}

export function InputMain ({ children }: InputMainProps) {
  return (
    <div className='flex items-center relative'>
      {children}
    </div>
  )
}

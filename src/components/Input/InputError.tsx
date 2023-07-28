interface InputErrorProps {
  error: string
}

export function InputError ({ error }: InputErrorProps) {
  return (
    <span className='text-sm text-red-500'>{error}</span>
  )
}

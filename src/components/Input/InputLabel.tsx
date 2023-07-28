interface InputLabelProps {
  label: string
}

export function InputLabel ({ label }: InputLabelProps) {
  return (
    <span>{label}</span>
  )
}

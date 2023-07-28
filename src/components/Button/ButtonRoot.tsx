import { ComponentProps, ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { IconSpinner } from './IconSpinner'

const button = tv({
  base: 'flex items-center justify-center gap-2 px-2 h-10 rounded outline-none transition font-semibold min-w-[150px] w-full hover:brightness-125 focus:brightness-125',
  variants: {
    variant: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      outline: 'bg-transparent border border-primary'
    },
    disabled: {
      true: 'bg-gray-600 text-gray-400 hover:bg-gray-600 focus:bg-gray-600 border-0 cursor-not-allowed'
    },
    loading: {
      true: 'cursor-wait'
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

type ButtonRootProps = ComponentProps<'button'> & VariantProps<typeof button> & {
  children: ReactNode
}

export function ButtonRoot ({ children, variant, disabled, loading, ...rest }: ButtonRootProps) {
  return (
    <button className={button({ variant, disabled, loading })} {...rest} disabled={loading || disabled}>
      {loading ? <IconSpinner /> : children}
    </button>
  )
}

import { ComponentProps, ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center gap-2 px-2 h-10 rounded outline-none transition font-semibold min-w-[150px] w-full',
  variants: {
    variant: {
      primary: 'bg-cyan-600 hover:bg-cyan-500 focus:bg-cyan-500',
      secondary: 'bg-emerald-600 hover:bg-emerald-500 focus:bg-emerald-500',
      outline: 'bg-transparent border border-cyan-600 hover:bg-cyan-950 focus:bg-cyan-950'
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
    <button className={button({ variant, disabled, loading })} {...rest}>
      {loading ? <IconSpinner /> : children}
    </button>
  )
}

type Size = 24 | 30

const IconSpinner = () => {
  const size: Size = 24
  const cx = size / 3
  const translate = cx / 2

  return (
    <svg width={size} height={size} className='relative animate-spin'>
      <circle
        cx={`${cx}px`} cy={`${cx}px`} r={`${cx}px`} strokeWidth={2}
        className={`stroke-white translate-x-[${translate}px] translate-y-[${translate}px]`}
        style={{
          width: '100%',
          height: '100%',
          fill: 'none',
          strokeLinecap: 'round',
          strokeDasharray: '110',
          strokeDashoffset: '110',
          animation: 'animate 2s linear infinite'
        }}
      />
    </svg>
  )
}

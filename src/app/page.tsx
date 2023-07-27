import { Button } from '~/components/Button'

export default function Home () {
  return (
    <main className='h-screen flex items-center justify-center gap-2'>
      <div className='grid gap-2'>
        <Button.Root loading>
          <Button.Icon icon='Plus' />
          Loading
        </Button.Root>

        <Button.Root>
          <Button.Icon icon='Plus' />
          Primary
        </Button.Root>

        <Button.Root disabled>
          <Button.Icon icon='Plus' />
          Disabled
        </Button.Root>

        <Button.Root variant='secondary'>
          <Button.Icon icon='Plus' />
          Secondary
        </Button.Root>

        <Button.Root variant='outline'>
          <Button.Icon icon='Plus' />
          Outline
        </Button.Root>
      </div>
    </main>
  )
}

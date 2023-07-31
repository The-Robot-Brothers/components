import { FormMessage } from '~/components/FormMessage'

export default function Home () {
  return (
    <main className='bg-primary-900 h-[calc(100vh-8rem)] p-4 flex flex-col items-center gap-2'>
      <h1 className='font-black text-transparent text-7xl bg-clip-text bg-gradient-to-t from-primary-400 to-white text-center'>
        Custom Theme
      </h1>

      <p className='text-center mb-4 text-primary-100'>This is a test of colors with tailwind</p>

      <FormMessage />
    </main>
  )
}

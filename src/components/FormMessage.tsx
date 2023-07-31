'use client'

import { useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'

export function FormMessage () {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  console.log({ name, password })

  return (
    <form className='grid gap-2 w-full max-w-2xl'>
      <Input.Root id='name'>
        <Input.Main>
          <Input.Field id='name' onInputChange={setName} />
          <Input.IconLeft icon='User' value={name} />
        </Input.Main>
      </Input.Root>

      <Input.Root id='password'>
        <Input.Main>
          <Input.Field id='password' onInputChange={setPassword} />
          <Input.IconLeft icon='Password' value={password} />
          <Input.IconRight icon='EyeClose' value={password} />
        </Input.Main>
      </Input.Root>

      <Button.Root>
        Send Message
      </Button.Root>
    </form>
  )
}

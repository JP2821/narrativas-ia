'use client'

import * as React from 'react'
import { signIn } from 'next-auth/react'

import { Button, ButtonProps } from '@/components/ui/button'
import { IconGitHub, IconSpinner } from '@/components/ui/icons'

export function LoginButton({ variant = "link" }: Readonly<ButtonProps>) {
  const [isLoading, setIsLoading] = React.useState(false)
  return (
    <Button
      variant={variant}
      onClick={() => {
        setIsLoading(true)
        signIn('github', { callbackUrl: `/` })
      }}
      disabled={isLoading}
    >
      {isLoading ? (
        <IconSpinner className="mr-2 animate-spin" />
      ) : 
        <IconGitHub className="mr-2" />
      }
      Login
    </Button>
  )
}

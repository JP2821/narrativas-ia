'use client'

import * as React from 'react'
import { signIn } from 'next-auth/react'

import { Button, ButtonProps } from '@/components/ui/button'
import { IconGitHub, IconGoogle, IconSpinner } from '@/components/ui/icons'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function LoginButton({ variant = "link" }: Readonly<ButtonProps>) {
  const [isLoading, setIsLoading] = React.useState(false)

  function onGoogleLogin() {
    setIsLoading(true)
    signIn('google', { callbackUrl: `/` })
  }

  function onGithubLogin() {
    setIsLoading(true)
    signIn('github', { callbackUrl: `/` })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" disabled={isLoading}>
          {isLoading ?? <IconSpinner className="mr-2 animate-spin" />}
          Login
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={8} align="start" className="w-[180px]">
        <DropdownMenuItem onClick={onGoogleLogin}>
          <IconGoogle className="mr-2" />
          Login com Google
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onGithubLogin}>
          <IconGitHub className="mr-2" />
          Login com Github
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

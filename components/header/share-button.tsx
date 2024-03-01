'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import { IconShare } from '@/components/ui/icons'
import { useCopyToClipboard } from '../../lib/hooks/use-copy-to-clipboard'
import toast from 'react-hot-toast'

export function ShareSiteButton() {
  const { copyToClipboard } = useCopyToClipboard({ timeout: 1000 });

  const copyShareLink = React.useCallback(
    async () => {
      const url = new URL(window.location.href).toString();
      copyToClipboard(url);
      toast.success('Link compartilhado para a área de transferência', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '14px'
        },
        iconTheme: {
          primary: 'white',
          secondary: 'black'
        }
      })
    },
    [copyToClipboard]
  )

  return (
    <Button
      className={cn(buttonVariants())}
      onClick={copyShareLink}
    >
      <IconShare className="mr-2" />
      <span className="hidden sm:block">Compartilhar site</span>
      <span className="sm:hidden">Compartilhar</span>
    </Button>
  )
}

'use client'

import * as React from 'react'
import { type DialogProps } from '@radix-ui/react-dialog'
import { toast } from 'react-hot-toast'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { IconSpinner } from '@/components/ui/icons'
import { useCopyToClipboard } from '@/lib/hooks/use-copy-to-clipboard'

interface SiteShareDialogProps extends DialogProps {
  onShare?: (url: string) => Promise<any>
  onCopy: () => void
}

export function SiteShareDialog({
  onCopy,
  onShare,
  ...props
}: Readonly<SiteShareDialogProps>) {
  const { copyToClipboard } = useCopyToClipboard({ timeout: 1000 })
  const [isSharePending, startShareTransition] = React.useTransition()

  const copyShareLink = React.useCallback(
    async (url: string) => {
      copyToClipboard(url);
      onCopy();
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
    [copyToClipboard, onCopy]
  )

  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> Compartilhe o link do site! </DialogTitle>
          <DialogDescription>
            Obrigado por compartilhar o link do site com seus amigos!
          </DialogDescription>
        </DialogHeader>
        <div className="p-4 space-y-1 text-sm border rounded-md">
          <div className="font-medium"> Isso é um título </div>
          <div className="text-muted-foreground">
            1000 messages
          </div>
        </div>
        <DialogFooter className="items-center">
          <Button
            disabled={isSharePending}
            onClick={() => {
              // @ts-ignore
              startShareTransition(async () => {
                const url = new URL(window.location.href).toString();
                if (onShare) {
                  await onShare(url);
                }
                copyShareLink(url);
              })
            }}
          >
            {isSharePending ? (
              <>
                <IconSpinner className="mr-2 animate-spin" />
                Copiando...
              </>
            ) : (
              <>Copiar link</>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

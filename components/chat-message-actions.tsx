'use client'

import { Button } from '@/components/ui/button'
import { IconCheck, IconCopy } from '@/components/ui/icons'
import { useCopyToClipboard } from '@/lib/hooks/use-copy-to-clipboard'
import { cn } from '@/lib/utils'
import { MessageStream } from '../lib/types'

interface ChatMessageActionsProps extends React.ComponentProps<'div'> {
  message: MessageStream
}

export function ChatMessageActions({
  message,
  className,
  ...props
}: Readonly<ChatMessageActionsProps>) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 })

  const onCopy = () => {
    if (isCopied) return
    copyToClipboard(message.content)
  }

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-10 md:-top-2 md:opacity-0',
        className
      )}
      {...props}
    >
      <Button variant="ghost" size="icon" onClick={onCopy}>
        {isCopied ? <IconCheck /> : <IconCopy />}
        <span className="sr-only"> Copiar Mensagem </span>
      </Button>
    </div>
  )
}

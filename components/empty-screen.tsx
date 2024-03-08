import { Button } from '@/components/ui/button'
import { IconArrowRight, IconOpenAI } from '@/components/ui/icons'
import { Chat } from '@/lib/types'

interface EmptyScreenProps {
  chats: Chat[],
  onSelect: (subject: string) => void
}

export function EmptyScreen({ chats, onSelect }: Readonly<EmptyScreenProps>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="flex items-center gap-1 mb-2 text-lg font-semibold">
          <IconOpenAI/> Olá como posso te substituir hoje?
        </h1>
        <p className="leading-normal text-muted-foreground">
          Será que a Inteligência Artificial irá roubar seu emprego?
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {chats.map((chat) => (
            <Button
              key={chat.id}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => onSelect(chat.id)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {chat.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

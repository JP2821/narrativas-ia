import { Separator } from '@/components/ui/separator'
import { ChatMessage } from '@/components/chat-message'
import { MessageStream } from '../lib/types'

export interface ChatList {
  messages: MessageStream[]
}

export function ChatList({ messages }: Readonly<ChatList>) {
  if (!messages.length) {
    return null
  }

  return (
    <div className="relative mx-auto max-w-2xl px-4">
      {messages.map((message, index) => (
        <div key={message.id + index}>
          <ChatMessage
            message={message}
            renderAnimation={index === messages.length - 1}
          />
          {index < messages.length - 1 && (
            <Separator className="my-4 md:my-8" />
          )}
        </div>
      ))}
    </div>
  )
}

import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { IconArrowRight, IconOpenAI } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'O que é IA?',
    message: `Explique o que é inteligência artificial`
  },
  {
    heading: 'Inteligência Artificial e Privacidade',
    message: 'A IA prejudica a minha privacidade de dados?'
  },
  {
    heading: 'Um olhar para o futuro',
    message: `Quais são os esforços mundiais para regular a IA?`
  }
]

export function EmptyScreen({ setInput }: Readonly<Pick<UseChatHelpers, 'setInput'>>) {
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
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

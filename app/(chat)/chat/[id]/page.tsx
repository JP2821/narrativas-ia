import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { auth } from '@/auth'
import { getChat } from '@/app/actions'
import { Chat } from '@/components/chat'

export interface ChatPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params
}: ChatPageProps): Promise<Metadata> {
  const session = await auth()

  if (!session?.user) {
    return {}
  }

  const chat = await getChat(params.id, session.user.id)
  return {
    title: chat?.title.toString().slice(0, 50) ?? 'Chat'
  }
}

export default async function ChatPage({ params }: Readonly<ChatPageProps>) {
  const session = await auth()

  const userID = session?.user?.id ?? "0";

  const chat = await getChat(params.id, userID);

  if (!chat) {
    notFound()
  }

  return <Chat id={chat.id} initialMessages={chat.messages} />
}

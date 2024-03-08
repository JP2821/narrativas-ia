import { Chat } from '@/components/chat'
import { getChats } from '../actions';

export default async function IndexPage() {
  const chats = await getChats("global");

  return <Chat chats={chats} />
}

'use client'

import { ChatList } from '@/components/chat-list'
import { EmptyScreen } from '@/components/empty-screen'
import { ChatScrollAnchor } from '@/components/chat-scroll-anchor'
import { Chat, MessageStream } from '@/lib/types'
import { useCallback, useEffect, useState } from 'react'

export interface ChatProps extends React.ComponentProps<'div'> {
  chats: Chat[],
}

export default function ChatComponent({ chats }: Readonly<ChatProps>) {
  const [allMessages, setAllMessages] = useState<MessageStream[]>([]);
  const [availableChats, setAvailableChats] = useState<Chat[]>(chats);
  const [messages, setMessages] = useState<MessageStream[]>([]);
  const [index, setIndex] = useState(0);

  const loadNewSubject = useCallback((chatID: string) => {
    const chat = availableChats.find(chat => chat.id === chatID);
    console.log(availableChats, chatID, chat)
    if (!chat) return;

    setIndex(prev => prev + 1);
    setMessages(prev => [...prev, chat.messages[0]]);
    setAllMessages(prev => [...prev, ...chat.messages]);
    setAvailableChats(prev => prev.filter(c => c.id !== chatID));
  }, [availableChats]);

  useEffect(() => {
    if (chats.length === 0) return;
    setIndex(0);
    setMessages([]);
    setAllMessages([]);
    setAvailableChats(chats);
    loadNewSubject("0");
  }, [chats]);

  function renderNextMessage() {
    if (index >= allMessages.length) return;
    setMessages(prev => [...prev, allMessages[index]]);
    setIndex(prev => prev + 1);
  }

  return (
    <div className='pb-[200px] pt-4 md:pt-10'>
      <ChatList
        renderAnimation messages={messages}
        onFinishRender={renderNextMessage}
      />
      <ChatScrollAnchor trackVisibility={index < allMessages.length}/>
      {availableChats.length > 0 && index === allMessages.length &&
        <EmptyScreen onSelect={loadNewSubject} chats={availableChats}/>}
    </div>
  )
}

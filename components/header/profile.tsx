import Link from 'next/link'

import {
  IconNextChat,
  IconSeparator,
} from '@/components/ui/icons'
import { UserMenu } from '@/components/header/user-menu'
import { SidebarMobile } from './sidebar-mobile'
import { SidebarToggle } from './sidebar-toggle'
import { ChatHistory } from '../chat-history'
import { LoginButton } from '../login-button'
import { auth } from '../../auth';

export default async function Profile() {
  const session = await auth();

  return (
    <>
      {session?.user ? (
        <>
          <SidebarMobile>
            <ChatHistory userId={session.user.id} />
          </SidebarMobile>
          <SidebarToggle />
        </>
      ) : (
        <Link href="/" target="_blank" rel="nofollow">
          <IconNextChat className="size-6 mr-2 dark:hidden" inverted />
          <IconNextChat className="hidden size-6 mr-2 dark:block" />
        </Link>
      )}
      <div className="flex items-center">
        <IconSeparator className="size-6 text-muted-foreground/50" />
        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <LoginButton />
        )}
      </div>
    </>
  )
}

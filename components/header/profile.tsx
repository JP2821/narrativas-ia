
import { IconSeparator } from '@/components/ui/icons'
import { UserMenu } from '@/components/header/user-menu'
import { LoggedSidebar } from '@/components/sidebar';
import { LoginButton } from '../login-button'
import { auth } from '@/auth';

export default async function Profile() {
  const session = await auth();

  return (
    <>
      <LoggedSidebar/>
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

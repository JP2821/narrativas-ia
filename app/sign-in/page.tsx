import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { LoginButton } from '@/components/login-button'

export default async function SignInPage() {
  const session = await auth()

  if (session?.user) {
    redirect('/')
  }

  return (
    <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10">
      <LoginButton variant={"outline"}/>
    </div>
  )
}

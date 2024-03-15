import { Page } from '../../lib/types'
import { SidebarItems } from './sidebar-items'
import { ThemeToggle } from './theme-toggle'

export async function SidebarList() {
  const pages: Page[] = [
    { id: '1', name: 'Conversa', href: '/' },
    { id: '2', name: 'O que é IA?', href: '/ia' },
    { id: '3', name: 'Privacidade no mundo de IA', href: '/privacidade' },
    { id: '4', name: 'Mas e os meus dados?', href: '/dados' },
    { id: '5', name: 'Problemática da IA', href: '/problema' },
    { id: '6', name: 'Opiniões de especialistas', href: '/opinioes' },
  ]

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex-1 overflow-auto">
        <div className="space-y-2 px-2" id="page-list">
          <p className='p-2 text-sm text-slate-300'>2024</p>
          <SidebarItems pages={pages} />
        </div>
      </div>
      <div className="flex items-center justify-between p-4">
        <ThemeToggle />
      </div>
    </div>
  )
}

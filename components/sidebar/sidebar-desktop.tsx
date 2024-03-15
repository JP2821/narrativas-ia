import React from 'react'
import { Sidebar } from './sidebar'
import { SidebarList } from './sidebar-list'

export async function SidebarDesktop() {
  return (
    <Sidebar className="peer absolute inset-y-0 z-30 hidden -translate-x-full border-r bg-muted duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[250px] xl:w-[300px]">
      <div className="flex flex-col h-full">
        <React.Suspense
          fallback={
            <div className="flex flex-col flex-1 px-4 space-y-4 overflow-auto">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full h-6 rounded-md shrink-0 animate-pulse bg-zinc-200 dark:bg-zinc-800"
                />
              ))}
            </div>
          }
        >
          <SidebarList />
        </React.Suspense>
      </div>
    </Sidebar>
  )
}

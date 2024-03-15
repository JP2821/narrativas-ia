'use client'

import { Page } from '@/lib/types'
import { AnimatePresence, motion } from 'framer-motion'

import { SidebarItem } from './sidebar-item'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'

interface SidebarItemsProps {
  pages: Page[]
}

export function SidebarItems({ pages }: Readonly<SidebarItemsProps>) {
  return (
    <AnimatePresence>
      {pages.map((chat) => chat && (
        <motion.div
          key={chat.id}
          exit={{
            opacity: 0,
            height: 0
          }}
        >
          <Tooltip delayDuration={1000}>
            <TooltipTrigger
              tabIndex={-1}
              className="focus:bg-muted focus:ring-1 focus:ring-ring"
            >
              <SidebarItem page={chat}/>
            </TooltipTrigger>
            <TooltipContent>Clique para entrar na página</TooltipContent>
          </Tooltip>
        </motion.div>
      ))}
    </AnimatePresence>
  )
}

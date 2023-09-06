import { ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import user from '../../../assets/icons/funny-user.jpg'

import s from './dropdown-menu.module.scss'

type DropdownMenuProps = {
  variant?: string
  children?: ReactNode
}
export const DropdownMenuDemo = ({ variant, children }: DropdownMenuProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={s.IconButton} aria-label="Customise options">
          <img className={s.user} src={user} alt="user" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>
          {/*<DropdownMenu.Item className={s.DropdownMenuItem}>{children}</DropdownMenu.Item>*/}
          {/*<div className={s.DropdownMenuItem}>{children}</div>*/}
          {children}
          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
          <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

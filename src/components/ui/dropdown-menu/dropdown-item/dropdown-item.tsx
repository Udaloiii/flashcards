import { ReactNode } from 'react'

import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'

import { Typography } from '../../typography'

import s from './dropdown-item.module.scss'

type DropdownItemProps = {
  icon: ReactNode
  title: string
}
export const DropdownItem = ({ icon, title }: DropdownItemProps) => {
  return (
    <DropdownMenuItem className={s.container}>
      {icon}
      <Typography className={s.title} variant={'caption'}>
        {title}
      </Typography>
    </DropdownMenuItem>
  )
}

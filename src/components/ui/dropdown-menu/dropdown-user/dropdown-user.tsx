import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'

import icon from '../../../../assets/icons/funny-user.jpg'
import { Typography } from '../../typography'

import s from './dropdown-user.module.scss'

type DropdownUserProps = {
  className?: string
  onSelect?: () => void
}
export const DropdownUser = ({ className }: DropdownUserProps) => {
  return (
    <DropdownMenuItem className={s.container}>
      <img className={s.icon} src={icon} alt="user" />
      <div className={s.wrapper}>
        <Typography variant={'subtitle2'} className={`${s.name} ${className}`}>
          Eugene
        </Typography>
        <Typography variant={'caption'} className={`${s.email} ${className}`}>
          eugene.udalykh@gmail.com
        </Typography>
      </div>
    </DropdownMenuItem>
  )
}

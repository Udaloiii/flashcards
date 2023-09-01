// import { ReactNode } from 'react'
//
// import { Typography } from '../../typography'
//
// import s from './dropdown-item.module.scss'
//
// type DropdownItemProps = {
//   icon: ReactNode
//   title: string
// }
// export const DropdownItem = ({ icon, title }: DropdownItemProps) => {
//   return (
//     <div className={s.container}>
//       {icon}
//       <Typography className={s.title} variant={'caption'}>
//         {title}
//       </Typography>
//     </div>
//   )
// }

import { ReactNode } from 'react'

import { Typography } from '../../typography'

import s from './dropdown-item.module.scss'

type DropdownItemProps = {
  icon: ReactNode
  title: string
}
export const DropdownItem = ({ icon, title }: DropdownItemProps) => {
  return (
    <div className={s.container}>
      {icon}
      <Typography className={s.title} variant={'caption'}>
        {title}
      </Typography>
    </div>
  )
}

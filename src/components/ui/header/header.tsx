import { ReactNode } from 'react'

import Logo from '../../../assets/icons/logo.tsx'

import s from './header.module.scss'

type HeaderProps = {
  classname?: string
  children?: ReactNode
}
export const Header = ({ classname, children, ...rest }: HeaderProps) => {
  return (
    <header className={`${s.container} ${classname}`} {...rest}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.children}>{children}</div>
    </header>
  )
}

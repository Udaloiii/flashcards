import { ReactNode } from 'react'

import s from './card.module.scss'

export type CardProps = {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <div className={`${s.main}  ${className}`} {...rest}>
      {children}
    </div>
  )
}

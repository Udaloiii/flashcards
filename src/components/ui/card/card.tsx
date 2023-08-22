import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './card.module.scss'
export type CardProps<T extends ElementType = 'div'> = {
  as?: T
  className?: string
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>(
  props: CardProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>>
) => {
  const { className, as: Component = 'div', ...rest } = props

  return <Component className={`${s.main}  ${className}`} {...rest} />
}

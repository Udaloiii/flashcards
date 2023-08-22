import { ComponentPropsWithoutRef, ElementType, useState } from 'react'

import { Typography } from '../typography'

import s from './input.module.scss'

export type TextFieldProps<T extends ElementType = 'input'> = {
  type: 'text' | 'password' | 'search'
  placeholder?: string
  className?: string
  onValueChange?: (value: string) => void
  errorMessage?: string
  disabled?: boolean
  label?: string
} & ComponentPropsWithoutRef<T>

export const TextField = <T extends ElementType = 'input'>(
  props: TextFieldProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextFieldProps<T>>
) => {
  const {
    type,
    className,
    placeholder,
    onValueChange,
    onChange,
    errorMessage,
    disabled,
    label,
    ...rest
  } = props

  const [value, setValue] = useState('') //добавил, может удалить
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onValueChange?.(e.target.value)
    setValue(e.target.value) //добавил, может удалить
  }

  // const handleClick = (e: React.MouseEvent) => {
  //   if (disabled) {
  //     e.preventDefault()
  //     e.stopPropagation()
  //   }
  // }

  return (
    <div className={`${s.wrapper} ${!!errorMessage && s.error} ${disabled ? s.disabled : ''}`}>
      {label && (
        <Typography variant={'body2'} style={{ color: 'var(--color-dark-100)' }}>
          {label}
        </Typography>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`${s[type]} ${!!errorMessage && s.error}  ${className}`}
        onChange={handleChange}
        value={value}
        disabled={disabled}
        {...rest}
      />
    </div>
  )
}

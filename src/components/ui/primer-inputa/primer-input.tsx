import { ComponentPropsWithoutRef, ElementType, useState } from 'react'

import Eye from '../../../assets/icons/eye-outline.tsx'
import EyeOutline from '../../../assets/icons/eye-outline.tsx'
import { Typography } from '../typography'

import s from './primer-input.module.scss'

export type TextFieldProps1<T extends ElementType = 'input'> = {
  type: 'text' | 'password' | 'search'
  placeholder?: string
  className?: string
  onValueChange?: (value: string) => void
  errorMessage?: string
} & ComponentPropsWithoutRef<T>

export const TextField1 = <T extends ElementType = 'input'>(
  props: TextFieldProps1<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextFieldProps1<T>>
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
    <div className={s.root}>
      {label && (
        <Typography
          variant={'body2'}
          className={`${s.label} ${disabled ? s.labelDisabled : ''} ${errorMessage ? s.error : ''}`}
        >
          {label}
        </Typography>
      )}
      <div className={s.wrapperInput}>
        <input
          className={`${s.input} ${errorMessage ? s.error : ''} ${className}`}
          type={type}
          disabled={disabled}
          placeholder={type}
          onChange={handleChange}
          {...rest}
        />
        <button>
          <EyeOutline />
        </button>
        <Typography variant={'caption'} className={s.error}>
          {errorMessage}
        </Typography>
      </div>
    </div>
  )
}

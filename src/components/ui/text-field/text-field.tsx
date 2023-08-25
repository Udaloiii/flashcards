import { ComponentPropsWithoutRef, useState } from 'react'

import { clsx } from 'clsx'

import EyeOffOutline from '../../../assets/icons/eye-off-outline.tsx'
import EyeOutline from '../../../assets/icons/eye-outline.tsx'
import SearchOutline from '../../../assets/icons/search-outline.tsx'
import { Typography } from '../typography'

import styles from './text-field.module.scss'

export type TextfieldProps = {
  type: 'text' | 'password' | 'search'
  label?: string
  errorMessage?: string
  onValueChange: (value: string) => void
} & ComponentPropsWithoutRef<'input'>
export const Textfield = ({
  type,
  className,
  disabled,
  errorMessage,
  placeholder,
  onChange,
  onValueChange,
  label,
  ...restProps
}: TextfieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onValueChange?.(e.target.value)
  }

  const [visible, setVisible] = useState(false)
  const changeVisible = () => {
    setVisible(prevState => !prevState)
  }

  const condition = type === 'password' && visible && !disabled ? 'text' : type
  const colorPasswordIcon = disabled ? 'var(--color-dark-100)' : 'var(--color-light-100)'
  const colorSearchIcon = disabled ? 'var(--color-dark-300)' : 'var(--color-dark-100)'

  const mainStyle = clsx(
    styles.input,
    type === 'password' && styles.password,
    type === 'search' && styles.search,
    errorMessage && styles.error,
    className
  )

  const labelForTextfield = label && (
    <Typography variant={'body2'} className={`${styles.label} ${disabled ? styles.disabled : ''}`}>
      {label}
    </Typography>
  )
  const passwordIcon = type === 'password' && (
    <div
      className={`${styles.iconPassword} ${disabled ? styles.disabled : ''}`}
      onClick={changeVisible}
    >
      {visible ? (
        <EyeOffOutline color={colorPasswordIcon} />
      ) : (
        <EyeOutline color={colorPasswordIcon} />
      )}
    </div>
  )

  const searchIcon = type === 'search' && (
    <div className={`${styles.iconSearch} ${disabled ? styles.disabled : ''}`}>
      <SearchOutline color={colorSearchIcon} />
    </div>
  )

  const error = errorMessage && (
    <Typography variant={'caption'} className={styles.error}>
      {errorMessage}
    </Typography>
  )

  return (
    <div className={styles.main}>
      {labelForTextfield}
      <div className={styles.wrapper}>
        <input
          className={mainStyle}
          type={condition}
          onChange={handleChange}
          disabled={disabled}
          placeholder={placeholder}
          {...restProps}
        />
        {passwordIcon}
        {searchIcon}
      </div>
      {error}
    </div>
  )
}

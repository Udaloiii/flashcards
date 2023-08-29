import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import { Typography } from '../typography'

import s from './checkbox.module.scss'

type CheckboxPrimerProps = {
  label?: string
  asChild?: boolean
  defaultChecked?: boolean
  checked?: boolean
  onCheckedChange?: () => void
  disabled?: boolean
  required?: boolean
  name?: string
  value?: string
}
export const CheckBox = ({ checked, label, disabled }: CheckboxPrimerProps) => (
  <div className={s.container}>
    <div className={`${s.wrapper} ${disabled && s.disabled}`}>
      <Checkbox.Root
        className={s.CheckboxRoot}
        defaultChecked
        id="c1"
        disabled={disabled}
        checked={checked}
      >
        <Checkbox.Indicator className={`${s.CheckboxIndicator} ${disabled && s.disabled}`}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
    {label && (
      <>
        <Typography
          className={`${s.Label} ${disabled && s.disabled}`}
          variant={'body2'}
          as={'label'}
          htmlFor="c1"
        >
          {label}
        </Typography>
      </>
    )}
  </div>
)

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  className?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  id?: string
}
export const CustomCheckbox = (props: CheckboxProps) => {
  // @ts-ignore
  const { checked, onChange, disabled, required, label, id, className } = props

  return (
    <form>
      <div
        className={label ? s.wrapperWithText : ''}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <div className={`${s.checkboxWrapper} ${disabled ? s.wrapperDisabled : ''}`}>
          <Checkbox.Root
            className={s.checkboxRoot}
            id={id}
            onCheckedChange={onChange}
            checked={checked}
            disabled={disabled}
          >
            <Checkbox.Indicator className={s.checkboxIndicator}>
              <CheckIcon className={disabled ? `${s.icon} ${s.disabled}` : s.icon} />
            </Checkbox.Indicator>
          </Checkbox.Root>
        </div>
        <label className={disabled ? `${s.label} ${s.disabled}` : s.label} htmlFor={id}>
          {label}
        </label>
      </div>
    </form>
  )
}

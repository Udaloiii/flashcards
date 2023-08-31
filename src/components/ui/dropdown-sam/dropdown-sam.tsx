import { ReactNode, useState } from 'react'

import s from './dropdown-sam.module.scss'

type DropdownSamProps = {
  className?: string
  children?: ReactNode
}
export const DropdownSam = ({ children, className }: DropdownSamProps) => {
  const [trigger, setTrigger] = useState(false)
  const onChangeTrigger = () => setTrigger(prevState => !prevState)
  const offTrigger = () => {
    trigger && setTrigger(false)
  }

  return (
    <div className={`${s.container} ${className}`} onClick={offTrigger}>
      <div className={s.image} onClick={onChangeTrigger}>
        <div className={`${s.wrapperForLi} ${trigger ? s.visible : s.unVisible}`}>
          <div className={s.triangle}></div>
          <div className={s.li}>{children}</div>
        </div>
      </div>
    </div>
  )
}

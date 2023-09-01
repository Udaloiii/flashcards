// import { useState } from 'react'
//
// import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
// import {
//   HamburgerMenuIcon,
//   DotFilledIcon,
//   CheckIcon,
//   ChevronRightIcon,
// } from '@radix-ui/react-icons'
//
// import s from './dropdown-menu.module.scss'
//
// export const DropdownMenuDemo = () => {
//   const [bookmarksChecked, setBookmarksChecked] = useState(true)
//   const [urlsChecked, setUrlsChecked] = useState(false)
//   const [person, setPerson] = useState('pedro')
//
//   return (
//     <DropdownMenu.Root>
//       <DropdownMenu.Trigger asChild>
//         <button className={s.IconButton} aria-label="Customise options">
//           <HamburgerMenuIcon />
//         </button>
//       </DropdownMenu.Trigger>
//
//       <DropdownMenu.Portal>
//         <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>
//           <DropdownMenu.Item className={s.DropdownMenuItem}>
//             New Tab <div className={s.RightSlot}>⌘+T</div>
//           </DropdownMenu.Item>
//           <DropdownMenu.Item className={s.DropdownMenuItem}>
//             New Window <div className={s.RightSlot}>⌘+N</div>
//           </DropdownMenu.Item>
//           <DropdownMenu.Item className={s.DropdownMenuItem} disabled>
//             New Private Window <div className={s.RightSlot}>⇧+⌘+N</div>
//           </DropdownMenu.Item>
//           <DropdownMenu.Sub>
//             <DropdownMenu.SubTrigger className={s.DropdownMenuSubTrigger}>
//               More Tools
//               <div className={s.RightSlot}>
//                 <ChevronRightIcon />
//               </div>
//             </DropdownMenu.SubTrigger>
//             <DropdownMenu.Portal>
//               <DropdownMenu.SubContent
//                 className={s.DropdownMenuSubContent}
//                 sideOffset={2}
//                 alignOffset={-5}
//               >
//                 <DropdownMenu.Item className={s.DropdownMenuItem}>
//                   Save Page As… <div className={s.RightSlot}>⌘+S</div>
//                 </DropdownMenu.Item>
//                 <DropdownMenu.Item className={s.DropdownMenuItem}>
//                   Create Shortcut…
//                 </DropdownMenu.Item>
//                 <DropdownMenu.Item className={s.DropdownMenuItem}>Name Window…</DropdownMenu.Item>
//                 <DropdownMenu.Separator className={`${s.DropdownMenu} ${s.Separator}`} />
//                 <DropdownMenu.Item className={s.DropdownMenuItem}>
//                   Developer Tools
//                 </DropdownMenu.Item>
//               </DropdownMenu.SubContent>
//             </DropdownMenu.Portal>
//           </DropdownMenu.Sub>
//
//           <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
//
//           <DropdownMenu.CheckboxItem
//             className={s.DropdownMenuCheckboxItem}
//             checked={bookmarksChecked}
//             onCheckedChange={setBookmarksChecked}
//           >
//             <DropdownMenu.ItemIndicator className={s.DropdownMenuItemIndicator}>
//               <CheckIcon />
//             </DropdownMenu.ItemIndicator>
//             Show Bookmarks <div className={s.RightSlot}>⌘+B</div>
//           </DropdownMenu.CheckboxItem>
//           <DropdownMenu.CheckboxItem
//             className={s.DropdownMenuCheckboxItem}
//             checked={urlsChecked}
//             onCheckedChange={setUrlsChecked}
//           >
//             <DropdownMenu.ItemIndicator className={s.DropdownMenuItemIndicator}>
//               <CheckIcon />
//             </DropdownMenu.ItemIndicator>
//             Show Full URLs
//           </DropdownMenu.CheckboxItem>
//
//           <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
//
//           <DropdownMenu.Label className={s.DropdownMenuLabel}>People</DropdownMenu.Label>
//           <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
//             <DropdownMenu.RadioItem className={s.DropdownMenuRadioItem} value="pedro">
//               <DropdownMenu.ItemIndicator className={s.DropdownMenuItemIndicator}>
//                 <DotFilledIcon />
//               </DropdownMenu.ItemIndicator>
//               Pedro Duarte
//             </DropdownMenu.RadioItem>
//             <DropdownMenu.RadioItem className={s.DropdownMenuRadioItem} value="colm">
//               <DropdownMenu.ItemIndicator className={s.DropdownMenuItemIndicator}>
//                 <DotFilledIcon />
//               </DropdownMenu.ItemIndicator>
//               Colm Tuite
//             </DropdownMenu.RadioItem>
//           </DropdownMenu.RadioGroup>
//
//           <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
//         </DropdownMenu.Content>
//       </DropdownMenu.Portal>
//     </DropdownMenu.Root>
//   )
// }

import { ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import DeleteOutline from '../../../assets/icons/delete-outline.tsx'
import EditOutline from '../../../assets/icons/edit-outline.tsx'
import user from '../../../assets/icons/funny-user.jpg'
import Layer from '../../../assets/icons/layer.tsx'

import { DropdownItem } from './dropdown-item/dropdown-item.tsx'
import s from './dropdown-menu.module.scss'
import { DropdownUser } from './dropdown-user/dropdown-user.tsx'

// type ItemListProps = {
//   className?: string
// }
// const ItemList = ({ className }: ItemListProps) => {
//   return (
//     <div className={className}>
//       <DropdownItem title={'Learn'}>
//         <Layer color={'white'} />
//       </DropdownItem>
//       <DropdownItem title={'Edit'}>
//         <EditOutline color={'white'} />
//       </DropdownItem>
//       <DropdownItem title={'Delete'}>
//         <DeleteOutline color={'white'} />
//       </DropdownItem>
//     </div>
//   )
// }

type DropdownMenuProps = {
  variant?: string
  children?: ReactNode
}
export const DropdownMenuDemo = ({ variant, children }: DropdownMenuProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={s.IconButton} aria-label="Customise options">
          <img className={s.user} src={user} alt="user" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>
          <DropdownMenu.Item className={s.DropdownMenuItem}>{children}</DropdownMenu.Item>
          <div className={s.DropdownMenuItem}>{children}</div>
          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
          {/*<DropdownMenu.Item className={s.DropdownMenuItem}>New Window</DropdownMenu.Item>*/}
          {/*<DropdownMenu.Separator className={s.DropdownMenuSeparator} />*/}
          {/*<DropdownMenu.Item className={s.DropdownMenuItem}>New Window</DropdownMenu.Item>*/}
          <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

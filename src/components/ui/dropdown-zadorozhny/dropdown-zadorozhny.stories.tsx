import { Meta, StoryObj } from '@storybook/react'

import EditOutline from '../../../assets/icons/edit-outline.tsx'
import { Button } from '../button'

import { Dropdown, DropdownItemWithIcon } from './'

const meta = {
  title: 'Components/Dropdown-Zadorozhny',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownItemWithIcon icon={<EditOutline />} text="Изменить" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<EditOutline />} text="Удалить" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<EditOutline />} text="Удалить" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<EditOutline />} text="Удалить" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<EditOutline />} text="Удалить" onSelect={() => {}} />
      </>
    ),
    trigger: <Button>open</Button>,
  },
}

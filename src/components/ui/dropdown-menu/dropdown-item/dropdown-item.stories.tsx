import type { Meta, StoryObj } from '@storybook/react'

import DeleteOutline from '../../../../assets/icons/delete-outline.tsx'
import EditOutline from '../../../../assets/icons/edit-outline.tsx'
import Layer from '../../../../assets/icons/layer.tsx'
import LogOut from '../../../../assets/icons/log-out.tsx'
import PersonOutline from '../../../../assets/icons/person-outline.tsx'

import { DropdownItem } from './dropdown-item.tsx'

const meta = {
  title: 'Components/dropdown-item',
  component: DropdownItem,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DropdownItem>

export default meta
type Story = StoryObj<typeof meta>

export const Learn: Story = {
  args: {
    icon: <Layer color={'white'} />,
    title: 'Learn',
  },
}

export const Edit: Story = {
  args: {
    icon: <EditOutline color={'white'} />,
    title: 'Edit',
  },
}

export const Delete: Story = {
  args: {
    icon: <DeleteOutline color={'white'} />,
    title: 'Delete',
  },
}

export const Myprofile: Story = {
  args: {
    icon: <PersonOutline color={'white'} />,
    title: 'My Profile',
  },
}

export const SignOut: Story = {
  args: {
    icon: <LogOut color={'white'} />,
    title: 'Sign Out',
  },
}

import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { DropdownMenuDemo } from '../dropdown-menu'

import { Header } from './header.tsx'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderWithButton: Story = {
  args: {
    children: <Button>Sign in</Button>,
  },
}

export const HeaderWithDropDown: Story = {
  args: {
    children: <DropdownMenuDemo />,
  },
}

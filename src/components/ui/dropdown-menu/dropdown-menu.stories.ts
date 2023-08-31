import { Meta, StoryObj } from '@storybook/react'

import { DropdownMenuDemo } from './dropdown-menu.tsx'

const meta = {
  title: 'Components/DropdownMenuDemo',
  component: DropdownMenuDemo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DropdownMenuDemo>

export default meta
type Story = StoryObj<typeof meta>

export const DropdownMenu: Story = {
  args: {
    disabled: false,
  },
}

export const DropdownMenu1: Story = {
  args: {
    checked: false,
    disabled: false,
  },
}

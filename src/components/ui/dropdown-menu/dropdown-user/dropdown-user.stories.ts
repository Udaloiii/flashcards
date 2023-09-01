import { Meta, StoryObj } from '@storybook/react'

import { DropdownUser } from './dropdown-user.tsx'

const meta = {
  title: 'Components/DropdownUser',
  component: DropdownUser,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DropdownUser>

export default meta
type Story = StoryObj<typeof meta>

export const DropdownUser1: Story = {
  args: {},
}

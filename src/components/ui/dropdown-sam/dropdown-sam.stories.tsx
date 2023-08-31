import type { Meta, StoryObj } from '@storybook/react'

import { DropdownItemCustom } from './dropdown-item/dropdown-item-custom.tsx'
import { DropdownSam } from './dropdown-sam.tsx'

const meta = {
  title: 'Components/DropdownSam',
  component: DropdownSam,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DropdownSam>

export default meta
type Story = StoryObj<typeof meta>

export const DropDownWithImage: Story = {
  args: {
    // children: <Button>Sign in</Button>,
    children: <DropdownItemCustom />,
  },
}

export const DropDownWith: Story = {
  args: {
    children: <DropdownItemCustom />,
  },
}

import type { Meta, StoryObj } from '@storybook/react'

import { Textfield } from './text-field.tsx'

const meta = {
  title: 'Components/Textfield',
  component: Textfield,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['text', 'password', 'search'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Textfield>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'text',
    label: 'Label',
    placeholder: 'text',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    label: 'Label',
    placeholder: 'Password',
    disabled: false,
  },
}

export const Error: Story = {
  args: {
    type: 'text',
    label: 'Input with error',
    value: 'Wrong value',
    errorMessage: 'Error message',
    disabled: false,
  },
}

export const Disable: Story = {
  args: {
    type: 'text',
    label: 'Label',
    placeholder: 'Placeholder',
    disabled: true,
  },
}

export const Search: Story = {
  args: {
    type: 'search',
    label: 'Label',
    placeholder: 'search',
  },
}

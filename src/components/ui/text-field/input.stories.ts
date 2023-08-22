import { Meta, StoryObj } from '@storybook/react'

import { TextField } from './input.tsx'

const meta = {
  title: 'Components/CustomInput',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['text', 'password', 'search'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Input: Story = {
  args: {
    disabled: false,
    type: 'text',
  },
}

export const WithLabel: Story = {
  args: {
    disabled: false,
    type: 'text',
    label: 'text',
  },
}

export const WithPlaceholder: Story = {
  args: {
    type: 'text',
    disabled: false,
    placeholder: 'input',
  },
}

export const Disabled: Story = {
  args: {
    type: 'text',
    disabled: true,
  },
}

export const WithLabelDisabled: Story = {
  args: {
    type: 'text',
    disabled: true,
    placeholder: 'input',
  },
}

export const Password: Story = {
  args: {
    disabled: false,
    placeholder: 'password',
    type: 'password',
  },
}

export const Search: Story = {
  args: {
    disabled: false,
    placeholder: 'input search',
    type: 'search',
  },
}

export const InputWithError: Story = {
  args: {
    disabled: false,
    type: 'text',
    errorMessage: 'error',
    placeholder: 'error',
  },
}

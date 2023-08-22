import { Meta, StoryObj } from '@storybook/react'

import { TextField1 } from './primer-input.tsx'

const meta = {
  title: 'Components/primer-input',
  component: TextField1,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['text', 'password', 'search'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof TextField1>

export default meta
type Story = StoryObj<typeof meta>

export const Input: Story = {
  args: {
    disabled: false,
    type: 'text',
  },
}

export const WithPlaceholder1: Story = {
  args: {
    type: 'text',
    disabled: false,
    placeholder: 'input',
  },
}

export const WithLabel: Story = {
  args: {
    disabled: false,
    type: 'text',
    label: 'text',
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
    label: 'required',
  },
}

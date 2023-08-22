import { Meta, StoryObj } from '@storybook/react'

import { CustomCheckbox } from './checkbox'

const meta = {
  title: 'Components/CustomCheckbox',
  component: CustomCheckbox,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CustomCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const UncontrolCheckbox: Story = {
  args: {
    disabled: false,
  },
}

export const Checkbox: Story = {
  args: {
    checked: false,
    disabled: false,
  },
}

export const CheckboxWithLabel: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'checkbox',
  },
}

export const CheckboxChecked: Story = {
  args: {
    checked: true,
    disabled: false,
  },
}

export const CheckboxCheckedWithLabel: Story = {
  args: {
    checked: true,
    disabled: false,
    label: 'checkbox',
  },
}
export const CheckboxDisabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
}

export const CheckboxCheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}

export const CheckboxWithLabelDisabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'checkbox',
  },
}
export const CheckboxCheckedWithLabelDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'checkbox',
  },
}

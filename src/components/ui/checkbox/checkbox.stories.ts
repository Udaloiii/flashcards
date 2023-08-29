import { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from './checkbox'

const meta = {
  title: 'Components/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const UncontrolCheckbox1: Story = {
  args: {
    disabled: false,
  },
}

export const Checkbox1: Story = {
  args: {
    checked: false,
    disabled: false,
  },
}

export const CheckboxWithLabel1: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'checkbox',
  },
}

export const CheckboxChecked1: Story = {
  args: {
    checked: true,
    disabled: false,
  },
}

export const CheckboxCheckedWithLabel1: Story = {
  args: {
    checked: true,
    disabled: false,
    label: 'checkbox',
  },
}
export const CheckboxDisabled1: Story = {
  args: {
    checked: false,
    disabled: true,
  },
}

export const CheckboxCheckedDisabled1: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}

export const CheckboxWithLabelDisabled1: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'checkbox',
  },
}
export const CheckboxCheckedWithLabelDisabled1: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'checkbox',
  },
}

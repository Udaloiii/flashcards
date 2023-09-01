import { Meta, StoryObj } from '@storybook/react'

import Layer from '../../../assets/icons/layer.tsx'

import { DropdownItem } from './dropdown-item/dropdown-item.tsx'
import { DropdownMenuDemo } from './dropdown-menu.tsx'
import { DropdownUser } from './dropdown-user/dropdown-user.tsx'

const meta = {
  title: 'Components/DropdownMenuDemo',
  component: DropdownMenuDemo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DropdownMenuDemo>

export default meta
type Story = StoryObj<typeof meta>

export const DropdownMenuu: Story = {
  args: {
    children: <DropdownUser />,
  },
}

export const DropdownMenu1: Story = {
  args: {
    children: (
      <div>
        <DropdownItem title={'Learn'} icon={<Layer color={'white'} />} />
        {/*<DropdownMenu.Separator style={{ height: '1px', margin: '5px', color: 'black' }} />*/}
        {/*<DropdownItem title={'Edit'} icon={<EditOutline color={'white'} />} />*/}
        {/*<DropdownMenu.Separator style={{ height: '1px', margin: '5px', color: 'darkgray' }} />*/}
        {/*<DropdownItem title={'Delete'} icon={<DeleteOutline color={'white'} />} />*/}
      </div>
    ),
  },
}

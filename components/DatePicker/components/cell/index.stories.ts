import { Meta, StoryObj } from '@storybook/react';
import { Cell } from './index';

const meta = {
  title: 'Components/DatePicker/Cell',
  component: Cell,
  tags: ['autodoc'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Cell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '11',
  },
};

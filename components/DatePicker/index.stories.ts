import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './index';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodoc'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

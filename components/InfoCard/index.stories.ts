import { InfoCard } from './index';
import { Meta, StoryObj } from '@storybook/react';
import image from '../../public/assets/blog-1.png';
const meta = {
  title: 'Widgets/InfoCard',
  component: InfoCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: image.src,
    text: 'asdas',
  },
};

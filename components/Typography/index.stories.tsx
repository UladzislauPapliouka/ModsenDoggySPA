import { Typography } from './index';
import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;
const variants: ComponentProps<typeof Typography>['variant'][] = [
  'header-1',
  'header-2',
  'header-3',
  'header-4',
  'header-5',
  'body-1',
  'body-2',
  'body-3',
];
const weight: ComponentProps<typeof Typography>['weight'][] = [
  'normal',
  'bold',
];
export const Default: Story = {
  args: {
    children: 'Test',
  },
  render: ({ children }) => {
    return (
      <>
        {weight.map(weight =>
          variants.map(variant => (
            <div>
              <Typography weight={weight} variant={variant}>
                {children}
              </Typography>
            </div>
          ))
        )}
      </>
    );
  },
};

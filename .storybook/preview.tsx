import type { Preview } from '@storybook/react';
import { Cormorant, Tangerine } from 'next/font/google';
export const cormorant = Cormorant({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-cormorant',
});
export const tangerine = Tangerine({
  weight: ['700', '400'],
  subsets: ['latin'],
  variable: '--font-tangerine',
});

const preview: Preview = {
  decorators: [
    Story => (
      <div
        className={`${cormorant.variable}
              ${tangerine.variable}`}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

import type { Preview } from '@storybook/react';
import { Cormorant, Tangerine, Poppins } from 'next/font/google';
export const cormorant = Cormorant({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-cormorant',
});
export const tangerine = Tangerine({
  weight: ['700', '400'],
  subsets: ['latin'],
  variable: '--font-tangerine',
});

export const poppins = Poppins({
  weight: ['700', '500'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const preview: Preview = {
  decorators: [
    Story => (
      <div
        className={`${cormorant.variable}
              ${tangerine.variable} ${poppins.variable}`}>
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

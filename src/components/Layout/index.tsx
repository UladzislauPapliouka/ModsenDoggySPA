import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { FC, PropsWithChildren } from 'react';

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
export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <main
        className={`${cormorant.variable}
              ${tangerine.variable}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

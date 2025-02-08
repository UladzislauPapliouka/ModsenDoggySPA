import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Cormorant, Tangerine } from 'next/font/google';
import cn from 'classnames';
import '../styles/global.scss';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

const cormorant = Cormorant({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-cormorant',
});

const tangerine = Tangerine({
  weight: ['700', '400'],
  subsets: ['latin'],
  variable: '--font-tangerine',
});

export const metadata: Metadata = {
  title: 'ModsenDoggy',
  description: 'ModsenDoggySPA - website!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          tangerine.className,
          tangerine.variable,
          cormorant.className,
          cormorant.variable
        )}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

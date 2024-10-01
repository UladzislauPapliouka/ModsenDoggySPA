import { Header } from '@components/Header';
import { FC, PropsWithChildren } from 'react';
export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

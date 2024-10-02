import { Header } from '@components/Header';
import { FC, PropsWithChildren } from 'react';
export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

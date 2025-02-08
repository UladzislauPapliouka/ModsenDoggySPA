import Link, { LinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';
import style from './index.module.scss';
export const NavLink: FC<
  PropsWithChildren<LinkProps & { active?: boolean }>
> = ({ children, active, ...rest }) => {
  return (
    <Link className={`${style.main} ${active && style.active}`} {...rest}>
      {children}
    </Link>
  );
};

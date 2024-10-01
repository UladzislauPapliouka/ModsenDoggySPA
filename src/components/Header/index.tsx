import { usePathname } from 'next/navigation';
import { NavLink } from './NavLink';
import style from './index.module.scss';
import { routes } from 'shared/routes';
export const Header = () => {
  const currentPath = usePathname();
  return (
    <header className={style.header}>
      {routes.map(({ link, text }) => (
        <NavLink href={link} active={currentPath === link}>
          {text}
        </NavLink>
      ))}
    </header>
  );
};

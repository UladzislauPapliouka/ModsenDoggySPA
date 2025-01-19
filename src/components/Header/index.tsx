import { usePathname } from 'next/navigation';
import { NavLink } from './NavLink';
import style from './index.module.scss';
import { routes } from 'shared/routes';
import { useEffect, useState } from 'react';
export const Header = () => {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 700) {
        setIsOpen(false);
      }
    };
    addEventListener('resize', onResize);
    return () => {
      removeEventListener('resize', onResize);
    };
  }, []);
  return (
    <header className={`${style.header} ${isOpen && style.active}`}>
      <div className={style.links}>
        {routes.map(({ link, text }) => (
          <NavLink
            onClick={() => {
              setIsOpen(false);
            }}
            key={link}
            href={link}
            active={currentPath === link}>
            {text}
          </NavLink>
        ))}
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${style.burger} ${isOpen && style.active}`}>
        <span></span>
      </div>
    </header>
  );
};

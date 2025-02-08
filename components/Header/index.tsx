'use client';
import { usePathname } from 'next/navigation';
import { NavLink } from './NavLink';
import style from './index.module.scss';
import { routes } from 'shared/routes';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/assets/logo.png';
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
  const scrolledFromTop = useRef(0);
  const currentScrollDistance = useRef(0);
  const scrollDirection = useRef('down');
  const blockRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > scrolledFromTop.current) {
        scrollDirection.current = 'down';
      } else if (window.scrollY < scrolledFromTop.current) {
        scrollDirection.current = 'up';
      }
      currentScrollDistance.current = Math.abs(
        scrolledFromTop.current - window.scrollY
      );
      if (
        scrollDirection.current === 'down' &&
        currentScrollDistance.current > 100 &&
        window.innerWidth < 748 &&
        blockRef!.current!.getAttribute('data-is-open') === 'false'
      ) {
        console.log('hide header');
        blockRef!.current!.style.opacity = '0';
      } else if (
        scrollDirection.current === 'up' &&
        currentScrollDistance.current > 100 &&
        window.innerWidth < 748 &&
        blockRef!.current!.getAttribute('data-is-open') === 'false'
      ) {
        console.log('show header');
        blockRef!.current!.style.opacity = '1';
      }
    };
    const onScrollEnd = () => {
      scrolledFromTop.current = window.scrollY;
      console.log('scrolledFromTop', scrolledFromTop.current);
      console.log('scrollDirection', scrollDirection.current);
    };
    const onResize = () => {
      blockRef!.current!.style.opacity = '1';
    };
    addEventListener('scroll', onScroll);
    addEventListener('scrollend', onScrollEnd);
    addEventListener('resize', onResize);
    return () => {
      removeEventListener('scroll', onScroll);
      removeEventListener('scrollend', onScrollEnd);
      removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header
      ref={blockRef}
      data-is-open={isOpen}
      className={`${style.header} ${isOpen && style.active}`}>
      <Image className={style.logo} src={logo} alt={'logo'} />
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
      <div onClick={() => setIsOpen(!isOpen)} className={style.burger}>
        <span></span>
      </div>
    </header>
  );
};

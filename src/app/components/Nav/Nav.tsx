'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Nav.module.css';
import ContentArea from '../ContentArea/ContentArea';

export default function Nav() {
  const [ pathname, setPathName ] = useState<string>('');
  const navPathname = usePathname();

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [navPathname])

  return(
    <div className={styles['da-navs']}>
      <ContentArea>
        <ul className={`${styles.nav} ${styles['nav-cust']}`}>
          <li className={`${styles['nav-item']} ${styles['li-item-cust']}`}>
            <Link
              href='/'
              className={
                pathname === '/' ? `${styles['nav-link']} ${styles.active}` : `${styles['nav-link']} ${styles.inactive}`
              }
              data-active={
                pathname === '/' ? 'active-cust' : ''
              }
            >
              Home
            </Link>
          </li>
          <li className={`${styles['nav-item']} ${styles['li-item-cust']}`}>
            <Link
              href='/portfolio'
              className={pathname === '/portfolio' ? `${styles['nav-link']} ${styles.active}` : `${styles['nav-link']} ${styles.inactive}`}
              data-active={pathname === '/portfolio' ? 'active-cust' : ''}
            >
              Portfolio
            </Link>
          </li>
          <li className={`${styles['nav-item']} ${styles['li-item-cust']}`}>
            <Link
              href='/about'
              className={pathname === '/about' ? `${styles['nav-link']} ${styles.active}` : `${styles['nav-link']} ${styles.inactive}`}
              data-active={pathname === '/about' ? 'active-cust' : ''}
            >
              About Me
            </Link>
          </li>
        </ul>
      </ContentArea>
    </div>
  );
}

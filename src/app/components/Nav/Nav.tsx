'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './Nav.css';

export default function Nav() {
  const [ pathname, setPathName ] = useState<string>('');
  const navPathname = usePathname();

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [navPathname])

  return(
    <div className='da-navs'>
      <ul className='nav nav-cust'>
        <li className='nav-item li-item-cust'>
          <Link
            href='/'
            className={
              pathname === '/' ? 'nav-link active' : 'nav-link inactive'
            }
            data-active={
              pathname === '/' ? 'active-cust' : ''
            }
          >
            Home
          </Link>
        </li>
        <li className='nav-item li-item-cust'>
          <Link
            href='/portfolio'
            className={pathname === '/portfolio' ? 'nav-link active' : 'nav-link inactive'}
            data-active={pathname === '/portfolio' ? 'active-cust' : ''}
          >
            Portfolio
          </Link>
        </li>
        <li className='nav-item li-item-cust'>
          <Link
            href='/about'
            className={pathname === '/about' ? 'nav-link active' : 'nav-link inactive'}
            data-active={pathname === '/about' ? 'active-cust' : ''}
          >
            About Me
          </Link>
        </li>
      </ul>
    </div>
  );
}

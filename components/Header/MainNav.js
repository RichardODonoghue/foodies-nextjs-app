'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './MainNav.module.css';

export const MainNav = () => {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link
            href="/meals"
            className={path.startsWith('/meals') ? styles.active : undefined}
          >
            Browse Meals
          </Link>
        </li>
        <li>
          <Link
            href="/community"
            className={path === '/community' ? styles.active : undefined}
          >
            Community
          </Link>
        </li>
      </ul>
    </nav>
  );
};

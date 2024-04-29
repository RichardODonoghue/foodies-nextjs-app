import Link from 'next/link';
import { HeaderBackground } from './HeaderBackground';
import logo from '@/assets/logo.png';
import styles from './Header.module.css';
import Image from 'next/image';
import { MainNav } from './MainNav';

export const Header = () => {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <MainNav />
      </header>
    </>
  );
};

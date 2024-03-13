'use client'
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import Container from '../Container/Container';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
            APLIKASI PETA DASAR 
          </Link>
        </p>
      </Container>
    </header>
  );
};

export default Header;
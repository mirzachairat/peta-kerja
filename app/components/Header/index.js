'use client'

import { Link } from '@chakra-ui/next-js';
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
'use client'

import Head from 'next/head';
import styles from './Layout.module.scss';
import { Link } from '@chakra-ui/next-js';

const Layout = ({ children, className,...rest }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
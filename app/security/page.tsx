import React from 'react';
import styles from './styles.module.css'
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Olá, mundo!</h1>
      <p>Este é um exemplo de página no Next.js com TypeScript.</p>
    </div>
  );
};

export default HomePage;
import React from 'react';
import styles from './styles.module.css'
import Image from 'next/image';
import BlueBlock from '../../img/BlocoPage1.png'


const MyComponent: React.FC=() => {
  return (
    <div className={styles.container}>
        <div className={styles.imageAdjust}>
            <Image
                src={BlueBlock}
                alt="" 
                objectFit="cover" 
                style={{position:'relative', width: '100%', height: '100%', paddingLeft: '30.5vw', paddingBottom: '20vh'}}
            />
        </div>
        <h3></h3>
    </div>
  );
};

export default MyComponent;
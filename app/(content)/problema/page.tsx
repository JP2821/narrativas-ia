import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    moldure,
    title,
    mainTitle,
    line,
    firstTopic,
    secondTopic,
    arrow
} from './problematic-images'

const MyComponent: React.FC = () => {

  return (
    <div className={styles.container}>
        <div style={{ width: '100%', height: '100%', margin: 0, padding: 0 }}>
          <Image
            src={moldure}
            alt=""
            objectFit="cover"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div>
        <Image
          src={title}
          alt=""
          objectFit="cover"
          style={{ position:'relative' ,width: '80%', height: '80%', top:"-115vh", left:'-29vw' }}
        />
        <Image
          src={mainTitle}
          alt=""
          style={{ position:'relative' ,width: '100%', height: '100%', top:"-90vh", left:'-5vw'}}
        />
        <Image
          src={line}
          alt=""
          style={{ position:'relative' ,width: '70%', height: '70%', top:"-125vh", left:'39vw'}}
        />
        <Image
          src={line}
          alt=""
          style={{ position:'relative' ,width: '70%', height: '70%', top:"-115vh", left:'39vw'}}
        />
        <Image
          src={line}
          alt=""
          style={{ position:'relative' ,width: '70%', height: '70%', top:"-105vh", left:'39vw'}}
        />
        <Image
          src={firstTopic}
          alt=""
          style={{ position:'relative' ,width: '6%', height: '6%', top:"-121vh", left:'39vw'}}
        />
        <Image
          src={secondTopic}
          alt=""
          style={{ position:'relative' ,width: '6%', height: '6%', top:"-112vh", left:'39vw'}}
        />
        </div>
        <h2 className={styles.topicText}>
            Você conhece alguma IA?
        </h2>
        <h2 className={styles.topicText2}>
            IA no dia dia
        </h2>
        <Button style={{ background: 'transparent', border: 'none' }}>
            <Link href={`/problematica/page1`}>
              <Image src={arrow} alt="Seta" width={20} height={20} style={{ position:'relative', top:"-131vh", left:'46vw'}} />
            </Link>
        </Button>
        <Button style={{ background: 'transparent', border: 'none' }}>
            <Link href={`/problematica/page2`}>
              <Image src={arrow} alt="Seta" width={20} height={20} style={{ position:'relative', top:"-124.5vh", left:'46vw'}} />
            </Link>
        </Button>
    
    </div>
  );
};

export default MyComponent;

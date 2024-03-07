import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import initImage from '../img/imagem_1.png';

const ArtificialIntelligenceScreen = () => {
  return (
    <Link href="/problema/topicos">
      <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
        <Image src={initImage} alt="" objectFit="cover" style={{ width: '100%', height: '100%'}}/>
      </div>
    </Link>
  );
};

export default ArtificialIntelligenceScreen;

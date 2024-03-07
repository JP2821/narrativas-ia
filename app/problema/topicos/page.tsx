import React from 'react';
import Image from 'next/image';
import topicsImage from '../../img/imagem_3.png';
import seta from '../../img/seta.png';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ArtificialIntelligenceTopicsScreen = () => {
  
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800; 

  const buttonPositions = [50.5, 57.5, 64.5, 72];

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <Image src={topicsImage} alt="" objectFit="cover" style={{ width: '100vw', height: '100vh'}} />
      
      {/* Mapeia sobre as posições dos botões e renderiza cada botão */}
      {buttonPositions.map((position, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: `${position}%`,
            left: '96%',
            transform: 'translate(-50%, -50%)', 
          }}
        >
          <Button style={{ background: 'transparent', border: 'none' }}>
            <Link href={`/problema/topicos/topico${index + 1}`}>
              <Image src={seta} alt="Seta" width={15} height={15} />
            </Link>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ArtificialIntelligenceTopicsScreen;

import React from 'react';
import Image from 'next/image';
import topicImage from '../../../img/imagem_4.png';

const ArtificialIntelligenceScreen = () => {
  return (
    <div style={{ width: '99.1vw', height: '93vh'}}>
      <Image src={topicImage} alt="" objectFit="cover" style={{ width: '100%', height: '100%'}} />
    </div>
  );
};

export default ArtificialIntelligenceScreen;

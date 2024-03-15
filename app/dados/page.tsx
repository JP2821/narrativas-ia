import React from 'react';
import styles from './styles.module.css'
import Image from 'next/image';
import Office from '../img/Pexels.png'
import Teclado from '../img/teclado-de-aluminio-branco-em-close-up-tecnologia-e-comunicacao 1.png'
import PC from '../img/pc1.png'

const MyComponent: React.FC = () => {

    const text = "A interseção entre IA e privacidade de dados é um território complexo e multifacetado. Equilibrar os benefícios da inovação com a proteção da privacidade é essencial. As decisões éticas na implementação da IA, regulamentações robustas e esforços contínuos para aumentar a conscientização são cruciais para criar um ambiente onde a tecnologia pode prosperar sem comprometer os direitos fundamentais dos indivíduos."
    const text2 = "Nesse contexto, a perspectiva de teóricos como danah boyd, uma pesquisadora de renome no campo dos estudos de mídia e tecnologia, é particularmente relevante. Boyd argumenta que a opacidade algorítmica pode levar a consequências negativas, como discriminação algorítmica e falta de prestação de contas. Seus estudos destacam os desafios éticos e sociais associados à opacidade dos algoritmos na sociedade contemporânea, especialmente em áreas cruciais como contratações e determinações judiciais."
    const text3 = "a união entre inteligência artificial e legislação é uma resposta essencial à rápida evolução tecnológica. À medida que a IA permeia diversas esferas da sociedade, a necessidade de regulamentação torna-se evidente. Este panorama destaca tanto os benefícios potenciais da legislação como um mecanismo de controle quanto os desafios inerentes à criação de leis que acompanhem o ritmo acelerado da inovação."
  return (
    <div className={styles.container}>
      <div className={styles.firstDiv}>
        <div className={styles.textConfig1}>
              <h2>
              {text}
              </h2>
          </div>
          <div>
              <Image
                  src={Office}
                  alt="" 
                  objectFit="cover" 
                  style={{ position: 'relative',width: '100%', height: '100%', right: '-3.2vw', maxWidth:'1200px'}}
              />
          </div>
        </div>
      <div>

      </div>
        <div className={styles.SecondDiv}>
          <div>
              <Image
                  src={Teclado}
                  alt="" 
                  objectFit="cover" 
                  style={{ position: 'relative',width: '100%', height: '100%', maxWidth:'1200px'}}
              />
          </div>
          <div className={styles.textConfig2}>
              <h2>
              {text2}
              </h2>
          </div>
      </div>
    
      <div className={styles.ThreeDiv}>
          <div className={styles.tituloconfig}>
            <h1>
              Dessa forma,
            </h1>
          </div>
          <h2 className={styles.subTextConfig}>
            {text3} 
           </h2> 
      </div>
      <div>
          <Image
              src={PC}
              alt="" 
              objectFit="cover" 
              style={{ position: 'relative',width: '100%', height: '100%', maxWidth:'1600px', top: '-70vh',}}
          />
      </div>

    </div>
  
  );
};

export default MyComponent;

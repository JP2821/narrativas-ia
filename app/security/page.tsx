'use client'
import React, { useState} from 'react';
import styles from './styles.module.css'
import Image from 'next/image';
import BitsImagem from '../img/Group18.png';
import Cadeado from '../img/cadeado.svg';
import Texto from '../img/OqueProtegeOsMeusDados.png';
import LGPDImg from '../img/Frame6.png';
import Seta from '../img/seta.png';
import IMG_1 from '../img/Group19.png';
import IMG_2 from '../img/Group20.png';
import Legislar from '../img/LEGISLAÇÃO.png';
import Line from '../img/Line.png';
import Chevron from '../img/chevron-down.png';

const HomePage: React.FC = () => {
    const [selectedButton, setSelectedButton] = useState(1);
    const [showText5, setShowText5] = useState(false);
    const [showText6, setShowText6] = useState(false);
    const [showText7, setShowText7] = useState(false);


    const handleButtonConfigClick = () => {
        setShowText5(!showText5);
    };
    
    const handleButtonConfig2Click = () => {
        setShowText6(!showText6);
    };
    
    const handleButtonConfig3Click = () => {
        setShowText7(!showText7);
    };
    

    const handleButtonClick = (buttonNumber: number) => {
        setSelectedButton(buttonNumber);
    };

    const getTextByButton = (buttonNumber: number) => {
        switch (buttonNumber) {
            case 1:
                return text1;
            case 2:
                return text2;
            case 3:
                return text3;
            case 4:
                return text4;
            default:
                return '';
        }
    };

    const text1 = "A dinâmica natureza da IA apresenta desafios significativos para as legislações existentes, que muitas vezes lutam para acompanhar o ritmo acelerado das inovações. Isso pode levar a lacunas legais e falta de direcionamento específico. No cenário global, a União Europeia aprovou recentemente o Artificial Intelligence Act (AI Act), que estabelece regulamentações para o desenvolvimento e uso de sistemas de inteligência artificial. Esta legislação pode impor sanções às empresas e estabelecer obrigações e restrições específicas."
    const text2 = "Complexidade dos sistemas de IA pode tornar a interpretação das leis desafiadora, resultando em ambiguidades legais. Portanto, a definição clara de termos e conceitos específicos da IA é crucial na formulação de legislações eficazes"
    const text3 = "Leis excessivamente restritivas podem criar um ambiente que inibe a inovação, desencorajando empresas e pesquisadores de explorar plenamente o potencial da IA devido ao receio de implicações legais."
    const text4 = "A legislação em torno da IA desempenha um papel vital para equilibrar o potencial transformador da tecnologia com a proteção dos direitos individuais e a promoção de um uso ético. Encontrar o equilíbrio adequado entre regulamentação e inovação é um desafio contínuo, porém fundamental, para criar um ambiente onde a IA possa contribuir positivamente para a sociedade."
    const text5 = "A intersecção entre legislação e inteligência artificial (IA) tornou-se um tema crucial no Brasil, à medida que a adoção da tecnologia cresce. O país está em busca de um equilíbrio entre os benefícios da inovação tecnológica e a proteção dos direitos individuais, além de garantir uma utilização ética da IA. Em setembro de 2020, o Brasil promulgou a Lei Geral de Proteção de Dados (LGPD), estabelecendo diretrizes claras para o tratamento de dados pessoais. Inspirada no GDPR europeu, a LGPD tem como objetivo principal garantir a privacidade dos cidadãos brasileiros, incluindo a regulação do uso de IA. Além disso, o país está desenvolvendo políticas de ética para a IA, demonstrado pelo lançamento de uma consulta pública em 2019 para discutir princípios éticos para o desenvolvimento e uso de tecnologias disruptivas, incluindo a IA."
    const text6 = "Além da LGPD, o Brasil também tem iniciativas específicas voltadas para setores que utilizam IA, como o Projeto de Lei 21/2020, que trata da regulação do uso de reconhecimento facial em locais públicos. No entanto, um desafio significativo reside na implementação efetiva das leis existentes, o que requer esforços contínuos de fiscalização e conscientização. A rápida evolução da IA exige uma legislação adaptável, com atualizações regulares para lidar com novos desenvolvimentos tecnológicos e desafios éticos emergentes. Nesse sentido, o Projeto de Lei 2830/2023 representa um marco importante na regulamentação do desenvolvimento, implementação e uso de sistemas de inteligência artificial no Brasil. Ao estabelecer normas gerais para garantir a proteção dos direitos fundamentais e a segurança dos sistemas de IA, o PL visa promover um ambiente propício para a inovação tecnológica, ao mesmo tempo em que protege os interesses individuais dos cidadãos."
    const text7 = "A implementação do PL 2830 terá um impacto significativo nas estratégias de negócios das organizações que lidam com sistemas de IA, obrigando-as a se adaptarem às novas exigências legais, garantindo a transparência, a não-discriminação e o respeito aos direitos individuais dos usuários de seus sistemas. Além disso, o PL oferece oportunidades para empresas que buscam se destacar no mercado por meio de práticas éticas e responsáveis no desenvolvimento e uso de IA, construindo uma relação de confiança com seus clientes e stakeholders, agregando valor à sua marca e fortalecendo sua posição competitiva. Em um cenário em que a tecnologia avança rapidamente e novas questões éticas e legais surgem, é crucial que a legislação continue a evoluir para acompanhar essas mudanças. O PL 2830 é um passo importante nesse sentido, demonstrando o compromisso do Brasil em promover o desenvolvimento responsável da inteligência artificial e garantir que seus benefícios sejam amplamente compartilhados pela sociedade, em conformidade com os princípios democráticos e os direitos fundamentais."
  
    return (
    <div className={styles.container}>
        <div style={{ width: '100%', height: '100%', margin: 0, padding: 0 }}>
            <Image
                src={BitsImagem}
                alt="" 
                objectFit="cover" 
                style={{ width: '100%', height: '100%'}}
            />
        </div>
        <div style={{ position: 'relative', alignItems:'center',top:'-770px', maxWidth:'850px' }}>
            <Image
                src={Cadeado}
                alt="" 
                objectFit="cover" 
                style={{ width: '100%', height: '100%'}}
            />
        </div>
        <div style={{ position: 'relative', alignItems:'center',top:'-1300px', maxWidth:'1200px' }}>
            <Image
                src={Texto}
                alt="" 
                objectFit="cover" 
                style={{ width: '100%', height: '100%'}}
            />
        </div>
        <div style={{ position: 'relative', alignItems:'center',top:'-800px', maxWidth:'1600px' }}>
            <Image
                src={LGPDImg}
                alt="" 
                objectFit="cover" 
                style={{ width: '100%', height: '100%'}}
            />
        </div>
        <div className = {styles.purpleBlock}>
            <div className={styles.tituloRoxo}>
                <h1 className={styles.tituloconfig}>
                    Além disso,  
                </h1>
                <Image
                src={Seta}
                alt="" 
                objectFit="cover" 
                style={{ position: 'relative',width: '5%', height: '5%', top: '17vh'}}
            />
            </div>
            <h2 className = {styles.textleft}>
            legislações que incorporam diretrizes éticas podem orientar o
            </h2>
            <h2 className = {styles.textleft}>
            desenvolvimento e a implementação de sistemas de IA,
            </h2>
            <h2 className = {styles.textleft}>
            promovendo a criação de tecnologias alinhadas com valores 
            </h2>
            <h2 className = {styles.textleftPadding}>
            fundamentais e evitando consequências prejudiciais.
            </h2>
        </div>
        <div style={{ position: 'relative', top:"-80vh"}}>
            <div>
                <Image
                src={IMG_1}
                alt="" 
                objectFit="cover" 
                style={{position:'relative',top:'240px',left:'74vw', width: '25%', height: '25%'}}
                />
            </div>
            <div className={styles.buttonsMenu}>
                <div>
                <button className={`${styles.buttonStyle} ${selectedButton === 1 ? styles.selectedButton : ''}`} onClick={() => handleButtonClick(1)}>Dinâmica</button>
                <button className={`${styles.buttonStyle} ${selectedButton === 2 ? styles.selectedButton : ''}`} onClick={() => handleButtonClick(2)}>Complexidade</button>
                <button className={`${styles.buttonStyle} ${selectedButton === 3 ? styles.selectedButton : ''}`} onClick={() => handleButtonClick(3)}>Leis excessivas</button>
                <button className={`${styles.buttonStyle} ${selectedButton === 4 ? styles.selectedButton : ''}`} onClick={() => handleButtonClick(4)}>Legislação</button>
                </div>
            </div>
            <div className={styles.dinamicTextConfig}>
                {getTextByButton(selectedButton)}
            </div>
            <div>
                <Image
                    src={IMG_2}
                    alt="" 
                    objectFit="cover" 
                    style={{ width: '25%', height: '25%'}}
                />
            </div>
        </div>
        <div style={{ position: 'relative', alignItems:'center',top:'-60vh', maxWidth:'700px' }}>
            <Image
                src={Legislar}
                alt="" 
                objectFit="cover" 
                style={{ width: '100%', height: '100%'}}
            />
        </div>
        <div style={{maxWidth:"1500px"}}>
            <div>
                <Image
                    src={Line}
                    alt="" 
                    objectFit="cover" 
                    style={{position:'relative',top:'-25vh', width: '100%', height: '100%'}}
                />
            </div>
            <div className={styles.subtextAling}>
                <div className={styles.subtextStyle}>
                    <h1>
                        O Início
                    </h1>
                </div>
            </div>
            <button className={styles.buttonConfig} onClick={handleButtonConfigClick}>
                <Image src={Chevron} alt=''/>
            </button>
            {showText5 && (
                <h2 className={styles.subtituloText}>
                    {text5}
                </h2>
            )}
        </div>
        <div className={styles.subtextAling2} style={{ marginTop: showText5 ? '50px' : '0' }}>
            <div>
                <Image
                    src={Line}
                    alt="" 
                    objectFit="cover" 
                    style={{position:'relative',top:'-24vh', width: '100%', height: '100%'}}
                />
            </div>
            <div className={styles.subtextAling}>
                <div className={styles.subtextStyle2}>
                    <h1>
                        LGPD
                    </h1>
                </div>
            </div>
            <button className={styles.buttonConfig2} onClick={handleButtonConfig2Click}>
                <Image src={Chevron} alt=''/>
            </button>
            {showText6 && (
                <h2 className={styles.subtituloText2}>
                    {text6}
                </h2>
            )}
        </div>
        <div className={styles.subtextAling3} style={{ marginTop: showText6 ? '50px' : '0' }}>
            <div>
                <Image
                    src={Line}
                    alt="" 
                    objectFit="cover" 
                    style={{position:'relative',top:'-22vh', width: '100%', height: '100%'}}
                />
            </div>
            <div className={styles.subtextAling}>
                <div className={styles.subtextStyle3}>
                    <h1>
                        Projeto de Lei 20/2020
                    </h1>
                </div>
            </div>
            <button className={styles.buttonConfig3} onClick={handleButtonConfig3Click}>
                <Image src={Chevron} alt=''/>
            </button>
            {showText7 && (
                <h2 className={styles.subtituloText3}>
                    {text7}
                </h2>
            )}
        </div>
        <div>
            
            
        </div>
    </div>
  );
};

export default HomePage;
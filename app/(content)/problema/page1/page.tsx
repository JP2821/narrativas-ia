import React from 'react';
import styles from './styles.module.css'
import Image from 'next/image';
import { blockPage } from './page1-images';


const MyComponent: React.FC = () => {

    const text = "Apesar de o termo ter ganhado popularidade com chatbots, como o ChatGPT que você já deve conhecer, essa tecnologia está presente há mais tempo. Na década de 90, programas de xadrez computacional, como o Deep Thought, começaram a desafiar os campeões mundiais."
    const text2 = "O processo envolve o desenvolvimento de algoritmos e modelos que capacitam os computadores a tomar decisões estratégicas durante uma partida de xadrez."
    const text3 = "Essa tecnologia também está presente em sistemas de recomendação, como os da Amazon, que utilizam algoritmos de IA para analisar o histórico de compras e comportamento do usuário, oferecendo recomendações personalizadas."
    const text4 = "A Inteligência Artificial é como ensinamos computadores a pensar e aprender como seres humanos. É uma tecnologia que ajuda as máquinas a entenderem coisas. Mas, assim como tem pontos positivos, também pode ter desafios, como quando queremos manter nossas informações privadas, evitar decisões injustas ou entender como os computadores tomam decisões."
    const text5 = "A Inteligência Artificial é um campo da ciência da computação que busca desenvolver sistemas capazes de realizar tarefas que, tradicionalmente, demandam inteligência humana. Isso inclui a capacidade de aprender com experiências passadas, resolver problemas, reconhecer padrões e interagir de forma adaptativa com o ambiente."

  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
            <h2 className={styles.textConfig}>{text}</h2>
            <h2 className={styles.textConfig2}>
                {text2}<br />
                <br />{text3}
            </h2>
            <h2 className={styles.textConfig}>
                {text4}
            </h2>
        </div>
        <div style={{ width: '100%', height: '100%'}}>
            <Image
              src={blockPage}
              alt=""
              objectFit="cover"
              style={{ position: 'relative',width: '80%', height: '80%', marginTop:'11vh', marginBottom:'11.2vh', left:'8vw' }}
            />
            <div style={{ maxWidth:'800px'}}>
                <h1 className={styles.textContainerConfig}>
                {text5}
                </h1>
            </div>
        </div>
    </div>
  );
};

export default MyComponent;

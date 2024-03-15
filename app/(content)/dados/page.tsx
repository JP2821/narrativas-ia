import React from 'react';
import { Open_Sans } from 'next/font/google';

import Image from 'next/image';

import keyboardImage from 'public/assets/dados/keyboard.png'
import officeImage from 'public/assets/dados/study-man.png'
import notebookImage from 'public/assets/dados/notebook.svg'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--open-sans',
})

export default function DataPage() {
  return (
    <div className={`flex flex-col items-center text-white py-4 text-lg md:text-2xl lg:text-3xl ${openSans.className}`}>
      <div className="flex items-end gap-14 max-w-6xl flex-col-reverse sm:flex-row">
        <p className='max-w-md text-right'>
          A interseção entre IA e privacidade de dados é um território complexo e multifacetado. Equilibrar os benefícios da inovação com a proteção da privacidade é essencial. As decisões éticas na implementação da IA, regulamentações robustas e esforços contínuos para aumentar a conscientização são cruciais para criar um ambiente onde a tecnologia pode prosperar sem comprometer os direitos fundamentais dos indivíduos.
        </p>
        <div className='bg-gradient-to-t from-black to-transparent from-30% max-h-[1000px]'>
          <div className='max-w-full w-96 lg:w-[500px]'>
            <Image
              src={officeImage}
              objectFit="cover"
              alt="A man studying in a computer"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 flex items-end w-full flex-col-reverse sm:flex-row">
        <div className='max-w-full min-w-80 lg:min-w-[600px] w-[600px] left-0 relative'>
          <Image
            src={keyboardImage}
            objectFit="cover"
            alt="A super large keyboard keys"
          />
        </div>
        <p className="mx-auto mb-auto p-8 max-w-5xl">
          Nesse contexto, a perspectiva de teóricos como danah boyd, uma pesquisadora de renome no campo dos estudos de mídia e tecnologia, é particularmente relevante. Boyd argumenta que a opacidade algorítmica pode levar a consequências negativas, como discriminação algorítmica e falta de prestação de contas. Seus estudos destacam os desafios éticos e sociais associados à opacidade dos algoritmos na sociedade contemporânea, especialmente em áreas cruciais como contratações e determinações judiciais.
        </p>
      </div>

      <div className="bg-[#5E5CCA] w-full h-full justify-center items-center py-32 flex flex-col">
        <div className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[180px] font-bold">
          <h1>
            Dessa forma,
          </h1>
        </div>
        <h2 className="lg:text-4xl max-w-6xl text-center px-8">
          A união entre inteligência artificial e legislação é uma resposta essencial à rápida evolução tecnológica. À medida que a IA permeia diversas esferas da sociedade, a necessidade de regulamentação torna-se evidente. Este panorama destaca tanto os benefícios potenciais da legislação como um mecanismo de controle quanto os desafios inerentes à criação de leis que acompanhem o ritmo acelerado da inovação.
        </h2>
        <div className='relative h-72 bottom-0 lg:top-[-20vh]'>
          <div className='min-w-96'>
            <Image
              objectFit="cover"
              src={notebookImage}
              alt="A notebook draw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

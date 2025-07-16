"use client";

import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from "next/image";

import ImagemMobile from "../../public/tupa-bg-desktop.png";
import ImagemDesktop from "../../public/tupa-bg-mobile.png";


export function FundoResponsivo() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isDesktop = useMediaQuery({ query: '(orientation: portrait)' });


//evita erro de hidratação
  if (!isClient) {
    return null;
  }

  if (isDesktop) {
    return (

      <Image
        src={ImagemDesktop}
        alt="Imagem de fundo"
        className="absolute top-0 left-0 z-0 h-screen w-screen bg-cover bg-center"
      />

    );
    
  } else {
    return (
      <Image
        src={ImagemMobile}
        alt="Imagem de fundo"
        className="absolute -top-4 left-0 z-0 h-screen w-screen bg-cover bg-center"
      />
    );
  }

}
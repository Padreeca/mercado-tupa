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

  const isDesktop = useMediaQuery({ minWidth: 768 });


//evita erro de hidratação
  if (!isClient) {
    return null;
  }

  if (isDesktop) {
    return (

      <Image
        src={ImagemDesktop}
        alt="Imagem de fundo"
        className="-z-10"
      />

    );
    
  } else {
    return (
      <Image
        src={ImagemMobile}
        alt="Imagem de fundo"
        className="-z-10"
      />
    );
  }

}
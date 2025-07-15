"use client";

import { useState, useEffect } from 'react'; 
import { useMediaQuery } from 'react-responsive'; 
import Image from "next/image";

// Importe suas duas imagens.
// Crie ou renomeie sua imagem de desktop para uma melhor organização.
import ImagemMobile from "../../public/tupa-opacity.png";
import ImagemDesktop from "../../public/tupa-opacity-desktop.png";


// --- A CRIAÇÃO DO COMPONENTE ---
// Esta é a função que define nosso componente.

export function FundoResponsivo() {

  // ===================================================================================
  // A "TECNOLOGIA" QUE VOCÊ NÃO CONHECE: OS HOOKS
  // Pense nos hooks como "superpoderes" que damos aos nossos componentes.
  // ===================================================================================

  // --- O Hook: useState ---
  // 'useState' cria uma "caixinha de memória" para o componente.
  // Aqui, criamos uma memória chamada 'isClient' que começa com o valor 'false'.
  // 'setIsClient' é a função que usamos para MUDAR o valor guardado nessa memória.
  
  const [isClient, setIsClient] = useState(false);


  // --- O Hook: useEffect ---
  // 'useEffect' executa um código DEPOIS que o componente já apareceu na tela pela primeira vez.
  // O array vazio `[]` no final significa: "execute este efeito apenas uma vez".
  // Nós o usamos para mudar o valor de 'isClient' para 'true' assim que o código
  // começa a rodar no navegador. Este é o truque para evitar o conflito entre o servidor e o cliente.

  useEffect(() => {
    setIsClient(true);
  }, []);


  // --- A LÓGICA DE RESPONSIVIDADE ---
  // Aqui usamos o hook da biblioteca que instalamos.
  // 'isDesktop' será 'true' se a largura da tela for 768px (o breakpoint 'md') ou maior.

  const isDesktop = useMediaQuery({ minWidth: 768 });


  // --- A RENDERIZAÇÃO CONDICIONAL ---
  // Agora, decidimos o que mostrar na tela.

  // Guarda-costas da Hidratação: Se o código ainda não rodou no cliente ('isClient' ainda é 'false'),
  // não renderizamos NADA. Isso garante que o servidor e o cliente vejam a mesma coisa na primeira
  // renderização (nada), evitando o erro.
  if (!isClient) {
    return null;
  }

  // Lógica de Troca de Imagem: Agora que temos certeza que estamos no navegador,
  // verificamos se é um desktop e mostramos a imagem correspondente.
  return isDesktop ? (

    // Se 'isDesktop' for TRUE, mostre esta imagem:
    <Image
      src={ImagemDesktop}
      alt="Imagem de fundo para Desktop"
      layout="fill"
      objectFit="cover"
      className="-z-10"
      priority
    />

  ) : (

    // Se 'isDesktop' for FALSE, mostre esta imagem:
    <Image
      src={ImagemMobile}
      alt="Imagem de fundo para Mobile"
      layout="fill"
      objectFit="cover"
      className="-z-10"
      priority
    />

  );
}
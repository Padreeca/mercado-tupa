import Image from "next/image";
import Tupalogo from "../../public/tupa.png";
import TupaDesktop from "../../public/tupa-bg-desktop.png";
import Engrenagem from "../../public/engrenagem.png";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (

    <div className="h-screen w-screen flex justify-center items-center">
      <Image
        className="absolute top-0 left-0 z-0 h-screen w-screen bg-cover bg-center"
        src={TupaDesktop}
        alt="Mercado Tupã"
        placeholder="blur" // Efeito de blur enquanto carrega
      // priority={true} // Use 'priority' para imagens "acima da dobra" (a primeira que o usuário vê
      />

      <Image
        className="absolute z-1 top-5 w-40 sm:left-5  lg:left-1/2 lg:-translate-x-1/2 lg:w-52"
        src={Tupalogo}
        alt="Mercado Tupã"
        width={200}
        height={200}
        placeholder="blur" // Efeito de blur enquanto carrega
      // priority={true} // Use 'priority' para imagens "acima da dobra" (a primeira que o usuário vê
      />

      
      <div className="bg-zinc-100 z-1 opacity-90 rounded-xl shadow-lg min-h-60 h-2/5 w-3/4 landscape:w-5/12 flex flex-col md:flex-row justify-evenly items-center md:w-3/5 md:h-2/5 ">

        <Image
          className="animate-spin w-1/3 sm:w-1/5 md:1/6 lg:w-1/6"
          src={Engrenagem}
          alt="Engrenagem"
        // placeholder="blur" // Efeito de blur enquanto carrega
        // priority={true} // Use 'priority' para imagens "acima da dobra" (a primeira que o usuário vê
        />

        <div className={`font-extrabold text-[#0163b4] text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${poppins.className}`}>EM BREVE...</div>
      </div>

    </div>
  );
}
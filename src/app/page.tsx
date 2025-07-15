import Image from "next/image";
import Tupalogo from "../../public/tupa.png";
import TupaOpacity from "../../public/tupa-opacity.png";
import Engrenagem from "../../public/engrenagem.png";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (

    <div className="bg-zinc-300 ">
      <div className="h-screen w-screen flex justify-center items-center">
        <Image
          className="absolute top-0 left-0 z-0 h-screen w-screen bg-cover bg-center bg-no-repeat "
          src={TupaOpacity}
          alt="Mercado Tupã"
          width={1200} 
          height={1200} 
          placeholder="blur" // Efeito de blur enquanto carrega
        // priority={true} // Use 'priority' para imagens "acima da dobra" (a primeira que o usuário vê
        />

        <Image
          className="absolute z-1 top-5 left-1/2 -translate-x-1/2"
          src={Tupalogo}
          alt="Mercado Tupã"
          width={200} 
          height={200} 
          placeholder="blur" // Efeito de blur enquanto carrega
        // priority={true} // Use 'priority' para imagens "acima da dobra" (a primeira que o usuário vê
        />

        <div className="bg-zinc-100 w-3/5  h-96  z-1 rounded-xl shadow-lg flex justify-evenly items-center opacity-90">

            <Image
              className="animate-spin"
              src={Engrenagem}
              alt="Engrenagem"
              width={150} 
              height={200} 
              // placeholder="blur" // Efeito de blur enquanto carrega
            // priority={true} // Use 'priority' para imagens "acima da dobra" (a primeira que o usuário vê
            />

          <div className={`font-extrabold text-[#0163b4] text-6xl ${poppins.className}`}>EM BREVE</div>
        </div>

      </div>
    </div>
  );
}
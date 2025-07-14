import Image from "next/image";
import TupaLogo from "../../public/tupa.png"

export default function Home() {
  return (
    <div className="h-screen w-screen bg-zinc-300 flex justify-center items-center">
      <div className="bg-zinc-50 p-60 px-100">
        <Image
          src={TupaLogo}
          alt="Mercado Tupã"
          width={400} // Defina a largura
          height={400} // e a altura
          placeholder="blur" // Efeito de blur enquanto carrega
        // priority={true} // Use 'priority' para imagens "acima da dobra" (a primeira que o usuário vê
        />
      </div>
    </div>
  );
}

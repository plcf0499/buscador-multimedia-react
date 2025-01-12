import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (      
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] min-h-screen bg-cover bg-fixed bg-center" style={{backgroundImage: `url('/fondo-estrellas.jpg')`,}}>      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">      
        <Image
          className="dark:invert"          
          src = "/nasa-logo-spanish.jpg"
          alt="Nasa - logo"
          width={360}
          height={76}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h2 className="mb-4">
            Bienvenido al buscador multimedia de la NASA 
          </h2>
          <div className="mb-2">
            <ul>
              <li className="mb-2">Esta es una prueba técnica de {" "}        
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                  Growbiz
                </code>
                .
              </li>
              <li className="mb-3">
                Haz clic en el botón Buscar para acceder
              </li>
              <li className="mb-2">
                ¡Comencemos!
              </li>
            </ul>
          </div>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"               
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            <Link href="/buscador" replace>
              Buscar
            </Link>            
          </button>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://www.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Página oficial de la NASA
          </a>
        </div>
      </main>      
    </div>    
  );
}

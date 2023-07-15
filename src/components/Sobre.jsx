import Link from "next/link";

const Sobre = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white mt-16 ">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div
          className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1
     ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center "
        />
        <p className="text-center text-2xl text-gray-900  sm:leading-9 w-1/2 m-auto">
          Um repositório de paletas de cores populares de sistemas e marcas.
        </p>
        <p className="m-auto w-1/2 mt-8 text-justify">
          Meu objetivo é ajudar a comunidade em geral, seja desenvolvedores,
          designers, UX/UI ou usuários e entusiastas de tecnologia, a
          encontrarem as paletas de cores das marcas conhecidas, além de
          fornecer outras paletas de cores para inspiração e referência em seus
          projetos.
        </p>
        {/* Chamada para ação */}
        <div className="py-10">
          <button className="bg-[#000] hover:bg-[#39318c] text-white font-bold py-2 px-4 m-4 rounded">
            <Link href="/Paletas/Sistemas">Paletas de Sistemas</Link>
          </button>
          <button className="bg-[#000] hover:bg-[#d9af62] text-white font-bold py-2 px-4 m-4 rounded">
            <Link href="/Paletas/Marcas">Paletas de Marcas</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sobre;

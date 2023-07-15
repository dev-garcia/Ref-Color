import Link from "next/link";

const error = () => {
  return (
    <>
      <section className=" font-sans font-medium text-center">
        <div className=" isolate overflow-hidden bg-[#d9af62] py-24 h-screen">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1
     ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center "
          />
          <p className="text-base font-semibold">404</p>
          <h2 className="text-6xl pt-16">Ops..., essa página não existe.</h2>
          <h3 className="text-4xl p-8">
            Ou podemos estar realizando manutenção...
          </h3>
          <h4>Sugestões:</h4>
          <div className="mt-16">
            <Link
              href="/"
              className="rounded-md bg-[#000000] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#d9af62]"
            >
              Voltar para o início
            </Link>
            <Link href="/suporte" className="pl-4">
              Contatar o suporte <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default error;

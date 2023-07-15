import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="  bg-[#d9af62] font-semibold flex-col flex ">
        <nav className="p-4">
          <ul className="">
            <li>
              <Link href="/" className="p-4">
                Início
              </Link>
              <Link href="/Paletas/Sistemas" className="p-4">
                Sistemas
              </Link>
              <Link href="/Paletas/Marcas" className="p-4">
                Marcas
              </Link>
              <Link href="/Suporte" className="p-4">
                Suporte
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const PaletasdeSistemas = () => {
  return (
    <>
      <Header />

      <h2>Paletas de sistemas</h2>
      <div className="quadro-paletas-Um">
        <section className="WinClaro">
          <hr className="hr-Quadros" />
          <h3>
            Windows 10 <em>(Modo Claro)</em>
          </h3>
          <section className="paletaWin10Claro">
            <p className="paletaWin10ClaroCorUm">#FFFFFF</p>
            <p className="paletaWin10ClaroCorDois">#EEEEEE</p>
            <p className="paletaWin10ClaroCorTres">#E6E6E6</p>
            <p className="paletaWin10ClaroCorQuatro">#303030</p>
            <p className="paletaWin10ClaroCorCinco">#000000</p>
            <p className="paletaWin10ClaroCorSeis">#0078D7</p>
          </section>
        </section>
        <section className="WinEscuro">
          <hr className="hr-Quadros" />
          <h3>
            Windows 10 <em>(Modo Escuro)</em>
          </h3>
          <section className="paletaWin10Escuro">
            <p className="paletaWin10EscuroCorUm">#1F1F1F</p>
            <p className="paletaWin10EscuroCorDois">#000000</p>
            <p className="paletaWin10EscuroCorTres">#101010</p>
            <p className="paletaWin10EscuroCorQuatro">#3F3F3F</p>
            <p className="paletaWin10EscuroCorCinco">#FFFFFF</p>
            <p className="paletaWin10EscuroCorSeis">#0078D7</p>
          </section>
        </section>
        <section className="Win11Claro">
          <hr className="hr-Quadros" />
          <h3>
            Windows 11 <em>(Modo Claro)</em>
          </h3>
          <section className="paletaWin11Claro">
            <p className="paletaWin11ClaroCorUm">WIN 11</p>
            <p className="paletaWin11ClaroCorDois">EM BREVE!</p>
            <p className="paletaWin11ClaroCorTres">EM BREVE!</p>
            <p className="paletaWin11ClaroCorQuatro">EM BREVE!</p>
            <p className="paletaWin11ClaroCorCinco">EM BREVE!</p>
            <p className="paletaWin11ClaroCorSeis">EM BREVE!</p>
          </section>
        </section>
        <section className="Win11Escuro">
          <hr className="hr-Quadros" />
          <h3>
            Windows 11 <em>(Modo Escuro)</em>
          </h3>
          <section className="paletaWin11Escuro">
            <p className="paletaWin11EscuroCorUm">EM BREVE!</p>
            <p className="paletaWin11EscuroCorDois">EM BREVE!</p>
            <p className="paletaWin11EscuroCorTres">EM BREVE!</p>
            <p className="paletaWin11EscuroCorQuatro">EM BREVE!</p>
            <p className="paletaWin11EscuroCorCinco">EM BREVE!</p>
            <p className="paletaWin11EscuroCorSeis">EM BREVE!</p>
          </section>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default PaletasdeSistemas;

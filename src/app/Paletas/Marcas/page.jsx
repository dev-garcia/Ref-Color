import Footer from "@/components/Footer";
import Header from "@/components/Header";

const PaletasdeMarcas = () => {
  return (
    <>
      <Header />

      <h2>Paletas de Logos e Marcas</h2>
      {/* Segundo grid de paletas começa aqui */}
      <section className="quadro-paletas-Dois">
        <section>
          <hr className="hr-Quadros" />
          <h3>Google</h3>
          <section className="paletaGoogle">
            <p className="paletaGoogleCorUm">#4285F4</p>
            <p className="paletaGoogleCorDois">#DB4437</p>
            <p className="paletaGoogleCorTres">#F4B400</p>
            <p className="paletaGoogleCorQuatro">#0F9D58</p>
          </section>
        </section>
        <section>
          <hr className="hr-Quadros" />
          <h3>Microsoft</h3>
          <section className="paletaMicrosoft">
            <p className="paletaMicrosoftCorUM">#F25022</p>
            <p className="paletaMicrosoftCorDois">#7FBA00</p>
            <p className="paletaMicrosoftCorTres">#00A4EF</p>
            <p className="paletaMicrosoftCorQuatro">#FFB900</p>
            <p className="paletaMicrosoftCorCinco">#737373</p>
          </section>
        </section>
        <section>
          <hr className="hr-Quadros" />
          <h3>Android</h3>
          <section className="paletaAndroid">
            <p className="paletaAndroidCorUm">#78C257</p>
          </section>
        </section>
        <section>
          <hr className="hr-Quadros" />
          <h3>Apple</h3>
          <section className="paletaApple">
            <p className="paletaAppleCorUm">#000000</p>
          </section>
        </section>
      </section>
      {/* Terceiro grid de paletas começa aqui */}
      <section className="quadro-paletas-Tres">
        <section>
          <hr className="hr-Quadros" />
          <h3>Coca Cola</h3>
          <section className="paleta-CocaCola">
            <p className="paleta-CocaColaCorUm">#F40009</p>
            <p className="paleta-CocaColaCorDois">#1E1E1E</p>
          </section>
        </section>
        <section>
          <hr className="hr-Quadros" />
          <h3>Monster</h3>
          <section className="paleta-Moster">
            <p className="paleta-MosterCorUm">#95D600</p>
            <p className="paleta-MosterCorDois">#000000</p>
          </section>
        </section>
        <section>
          <hr className="hr-Quadros" />
          <h3>Red Bull</h3>
          <section className="paleta-RedBull">
            <p className="paleta-RedBullCorUm">#1E1E1E</p>
            <p className="paleta-RedBullCorDois">#FFCC00</p>
          </section>
        </section>
        <section>
          <hr className="hr-Quadros" />
          <h3>Sprite</h3>
          <section className="paleta-Sprite">
            <p className="paleta-SpriteCorUm">#008B47</p>
            <p className="paleta-SpriteCorDois">#F8CD24</p>
            <p className="paleta-SpriteCorTres">#6BB64A</p>
          </section>
        </section>
      </section>
      {/* Quarto grid de paletas começa aqui */}
      <section className="quadro-paletas-Quatro">
        <section>
          <hr className="hr-Quadros" />
          <h3>Spotify</h3>
          <section className="paleta-Spotify">
            <p className="paleta-SpotifyCorUm">#1db954</p>
            <p className="paleta-SpotifyCorDois">#FFFFFF</p>
            <p className="paleta-SpotifyCorTres">#191414</p>
          </section>
        </section>
        <section>
          <hr className="hr-Quadros" />
          <h3>YouTube</h3>
          <section className="paleta-YouTube">
            <p className="paleta-YouTubeCorUm">#FF0000</p>
            <p className="paleta-YouTubeCorDois">#282828</p>
            <p className="paleta-YouTubeCorTres">#FFFFFF</p>
          </section>
        </section>
        <section>
          <hr className="hr-Quadros" />
          <h3>Whatsapp</h3>
          <section className="paleta-Whatsapp">
            <p className="paleta-WhatsappCorUm">#128C7E</p>
            <p className="paleta-WhatsappCorDois">#075E54</p>
            <p className="paleta-WhatsappCorTres">#25D366</p>
            <p className="paleta-WhatsappCorQuatro">#34B7F1</p>
          </section>
        </section>
        <section>
          <hr className="hr-Quadros" />
          <h3>Instagram</h3>
          <section className="paleta-Instagram">
            <p className="paleta-InstagramCorUm">#405DE6</p>
            <p className="paleta-InstagramCorDois">#5B51D8</p>
            <p className="paleta-InstagramCorTres">#833AB4</p>
            <p className="paleta-InstagramCorQuatro">#C13584</p>
            <p className="paleta-InstagramCorCinco">#E1306C</p>
            <p className="paleta-InstagramCorSeis">#FD1D1D</p>
            <p className="paleta-InstagramCorSete">#F56040</p>
            <p className="paleta-InstagramCorOito">#F77737</p>
            <p className="paleta-InstagramCorNove">#FCAF45</p>
            <p className="paleta-InstagramCorDez"> #FFDC80</p>
          </section>
        </section>
      </section>

      <Footer />
    </>
  );
};

export default PaletasdeMarcas;

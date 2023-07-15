const Footer = () => {
  const instagram = ["https://www.instagram.com/cristiangarci.a/"];
  const linkedin = ["https://www.linkedin.com/in/cristian-garcia-web/"];
  const github = ["https://github.com/dev-garcia"];
  const portfolio = ["https://portfolio-dev-garcia.vercel.app/"];

  return (
    <>
      <footer className="bg-[#d9af62] py-4 font-sans font-medium">
        <div className="border-b-2 border-white p-6 ">
          <div className="flex items-center justify-center lg:justify-between">
            <div className="mr-12 hidden lg:block">
              <span>Conecte-se comigo:</span>
            </div>
            <div className="flex justify-center">
              <li>
                {instagram.map((instagram) => (
                  <a
                    href={instagram}
                    key={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6"
                  >
                    Instagram
                  </a>
                ))}
              </li>
              <li>
                {linkedin.map((linkedin) => (
                  <a
                    href={linkedin}
                    key={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6"
                  >
                    Linkedin
                  </a>
                ))}
              </li>
              <li>
                {github.map((github) => (
                  <a
                    href={github}
                    key={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6"
                  >
                    GitHub
                  </a>
                ))}
              </li>
              <li>
                {portfolio.map((portfolio) => (
                  <a
                    href={portfolio}
                    key={portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Portfólio
                  </a>
                ))}
              </li>
            </div>
          </div>
        </div>

        <div className=" p-6 text-center ">
          <span>© 2023 Copyright</span>
          <a className="font-semibold " href="">
            {" "}
            Cristian Garcia
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;

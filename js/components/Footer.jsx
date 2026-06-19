/* global React */
window.CCF = window.CCF || {};

/** Rodapé do site. props.navigate(path, sectionId?). */
window.CCF.Footer = function Footer({ navigate }) {
  const D = window.CCF_DATA;
  const go = (path, section) => (e) => {
    e.preventDefault();
    navigate(path, section);
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <span className="footer-brand">
            <span className="footer-brand__mark">
              <img
                src="./images/CCF.branco.icone (1).png"
                alt="logo"
                style={{ width: "18px" }}
              />
            </span>
            <span>
              <b>CCF</b>
              <small>COMUNIDADE CRISTÃ</small>
            </span>
          </span>
          <p>
            Uma igreja apoiada na Palavra de Deus, no coração de Fortaleza. Você
            é nosso convidado.
          </p>
          <div className="footer-social">
            <a
              href={D.social.instagram}
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <img src="images/insta.svg" alt="" width="19" height="19" />
            </a>
            <a
              href={D.social.facebook}
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <img src="images/facebook.svg" alt="" width="19" height="19" />
            </a>
            <a
              href={D.social.youtube}
              target="_blank"
              rel="noopener"
              aria-label="YouTube"
            >
              <img src="images/youtube.svg" alt="" width="21" height="21" />
            </a>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Rodapé">
          <h4>NAVEGAÇÃO</h4>
          <a href="#/" onClick={go("/", "quemsomos")}>
            Quem somos
          </a>
          <a href="#/" onClick={go("/", "nossavisao")}>
            Nossa visão
          </a>
          <a href="#/onde-estamos" onClick={go("/onde-estamos")}>
            Onde estamos
          </a>
          <a href="#/contribuicao" onClick={go("/contribuicao")}>
            Contribuição
          </a>
          <a href="#/roteiros-pgm" onClick={go("/roteiros-pgm")}>
            Roteiros de PGM
          </a>
          <a href="https://hinarioccf.netlify.app/" target="_blank" rel="noopener">
            Hinário
          </a>
        </nav>

        <div className="footer-contact">
          <h4>CONTATO</h4>
          <a
            href={"https://wa.me/" + D.contato.whatsapp}
            target="_blank"
            rel="noopener"
          >
            <img src="images/icontelefone.svg" alt="" />
            {D.contato.telefoneFmt}
          </a>
          <a href={"mailto:" + D.contato.email}>
            <img src="images/iconmail.svg" alt="" />
            {D.contato.email}
          </a>
          <span className="addr">
            <img src="images/iconlocation.svg" alt="" />
            <span>
              {D.contato.enderecoLinhas[0]}
              <br />
              {D.contato.enderecoLinhas[1]}
            </span>
          </span>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div>
          <span>
            © 2026 Comunidade Cristã em Fortaleza. Alguns direitos reservados.
          </span>
          <span>Feito com cuidado para a família CCF</span>
        </div>
      </div>
    </footer>
  );
};

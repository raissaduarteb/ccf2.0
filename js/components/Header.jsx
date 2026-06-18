/* global React */
window.CCF = window.CCF || {};

/**
 * Cabeçalho do site.
 * props.navigate(path, sectionId?) — função de navegação vinda do App.
 */
window.CCF.Header = function Header({ navigate }) {
  const { useState, useEffect } = React;
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // 'igreja' | 'conteudo' | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const D = window.CCF_DATA;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const go = (path, section) => (e) => {
    if (e) e.preventDefault();
    setOpenMenu(null);
    setMobileOpen(false);
    navigate(path, section);
  };

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <div className="site-header__bar">

        <a className="brand" href="#/" onClick={go("/")} aria-label="Página inicial">
          <span className="brand__mark"><span></span></span>
          <span className="brand__name">
            <b>CCF</b>
            <small>COMUNIDADE CRISTÃ</small>
          </span>
        </a>

        <nav className="nav" aria-label="Principal">
          <div className="nav__item"
               onMouseEnter={() => setOpenMenu("igreja")}
               onMouseLeave={() => setOpenMenu(null)}>
            <button className="nav__btn" type="button" aria-haspopup="true"
                    onClick={() => setOpenMenu(openMenu === "igreja" ? null : "igreja")}>
              IGREJA <span className="nav__caret"></span>
            </button>
            {openMenu === "igreja" && (
              <div className="nav__menu">
                <a href="#/" onClick={go("/", "quemsomos")}>Quem somos</a>
                <a href="#/" onClick={go("/", "nossavisao")}>Nossa visão</a>
                <a href="#/onde-estamos" onClick={go("/onde-estamos")}>Onde estamos</a>
              </div>
            )}
          </div>

          <a className="nav__link" href="#/contribuicao" onClick={go("/contribuicao")}>CONTRIBUIÇÃO</a>

          <div className="nav__item"
               onMouseEnter={() => setOpenMenu("conteudo")}
               onMouseLeave={() => setOpenMenu(null)}>
            <button className="nav__btn" type="button" aria-haspopup="true"
                    onClick={() => setOpenMenu(openMenu === "conteudo" ? null : "conteudo")}>
              CONTEÚDO <span className="nav__caret"></span>
            </button>
            {openMenu === "conteudo" && (
              <div className="nav__menu">
                <a href="#/roteiros-pgm" onClick={go("/roteiros-pgm")}>Roteiros PGM</a>
                <a href={D.social.youtube} target="_blank" rel="noopener">Mensagens</a>
              </div>
            )}
          </div>

          <a className="nav__link nav__cta btn btn--primary btn--sm" href="#/fale-conosco" onClick={go("/fale-conosco")}>FALE CONOSCO</a>
        </nav>

        <button className="nav-toggle" type="button" aria-label="Abrir menu" onClick={() => setMobileOpen(true)}>
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={"mobile-menu" + (mobileOpen ? " is-open" : "")} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="mobile-menu__top">
          <span className="brand">
            <span className="brand__mark"><span></span></span>
            <span className="brand__name"><b>CCF</b></span>
          </span>
          <button className="mobile-menu__close" type="button" aria-label="Fechar menu" onClick={() => setMobileOpen(false)}>&times;</button>
        </div>
        <div className="mobile-menu__group">
          <span className="mobile-menu__label">IGREJA</span>
          <button className="mobile-menu__link" onClick={go("/", "quemsomos")}>Quem somos</button>
          <button className="mobile-menu__link" onClick={go("/", "nossavisao")}>Nossa visão</button>
          <button className="mobile-menu__link" onClick={go("/onde-estamos")}>Onde estamos</button>
          <button className="mobile-menu__link" onClick={go("/contribuicao")}>Contribuição</button>
          <button className="mobile-menu__link" onClick={go("/roteiros-pgm")}>Roteiros PGM</button>
          <a className="mobile-menu__link" href={D.social.youtube} target="_blank" rel="noopener" onClick={() => setMobileOpen(false)}>Mensagens</a>
        </div>
        <a className="btn btn--primary mobile-menu__cta" href="#/fale-conosco" onClick={go("/fale-conosco")}>FALE CONOSCO</a>
      </div>
    </header>
  );
};

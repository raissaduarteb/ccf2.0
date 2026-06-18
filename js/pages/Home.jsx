/* global React */
window.CCF = window.CCF || {};

window.CCF.Home = function Home({ navigate }) {
  const D = window.CCF_DATA;
  window.CCF.useReveal();

  const go = (path, section) => (e) => { e.preventDefault(); navigate(path, section); };

  return (
    <main>
      {/* HERO */}
      <section className="hero" data-screen-label="Hero">
        <img className="hero__media" src="images/adoracao1.jpg" alt="" aria-hidden="true" />
        <video className="hero__video" autoPlay muted loop playsInline poster="images/adoracao1.jpg">
          {/* Vídeo de fundo original (dessaturado p/ legibilidade).
              1ª fonte = arquivo local (já existe em images/ no servidor da igreja);
              2ª = espelho CDN para pré-visualização. */}
          <source src="images/7589A376-FA01-45CE-95C1-82E0DCB06946.mp4" type="video/mp4" />
          <source src="https://cdn.jsdelivr.net/gh/raissaduarteb/ccf@main/images/7589A376-FA01-45CE-95C1-82E0DCB06946.mp4" type="video/mp4" />
        </video>
        <div className="hero__scrim"></div>
        <div className="hero__inner">
          <p className="hero__eyebrow">IGREJA EM FORTALEZA · CE</p>
          <h1><span className="serif-italic">Bem-vindo à</span>Comunidade Cristã em Fortaleza</h1>
          <p className="hero__lead">Uma família apoiada na Palavra de Deus, que se reúne para adorar, crescer e cuidar uns dos outros. Venha do jeito que você está.</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#/" onClick={go("/", "quemsomos")}>Conheça a igreja</a>
            <a className="btn btn--ghost" href={D.social.youtubeLive} target="_blank" rel="noopener"><span className="play-tri"></span>Assista ao vivo</a>
          </div>
        </div>
        <div className="hero__scroll"><span>ROLE</span><i></i></div>
      </section>

      {/* BARRA DE HORÁRIO */}
      <section className="schedule" aria-label="Próxima reunião">
        <div className="schedule__inner">
          <span className="schedule__live"><i></i>AO VIVO</span>
          <b>DOMINGO</b>
          <span className="schedule__sep"></span>
          <span className="muted">REUNIÃO DO PARTIR DO PÃO</span>
          <span className="schedule__sep"></span>
          <b>18H</b>
          <a className="btn btn--light btn--sm" href={D.social.youtubeLive} target="_blank" rel="noopener">Assista online →</a>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="section" id="quemsomos" data-screen-label="Quem Somos">
        <div className="container">
          <div className="split about reveal">
            <div className="about__media">
              <img className="about__img" src="images/488310235_1133611968795574_6362825387491750504_n.jpg" alt="Batismo na Comunidade Cristã em Fortaleza" loading="lazy" />
              <div className="about__badge"><b>+30</b><small>anos servindo Fortaleza</small></div>
            </div>
            <div>
              <p className="eyebrow">QUEM SOMOS</p>
              <h2 className="h-display">Somos uma igreja apoiada na <span className="serif-italic" style={{ color: "var(--brand)" }}>Palavra de Deus</span></h2>
              <p className="lead">Com Cristo como fundamento, promovemos o desenvolvimento da comunidade por meio da pregação do evangelho e do cuidado amoroso aos membros, visando à maturidade espiritual.</p>
              <div className="about__actions">
                <a className="btn btn--dark btn--sm" href="#/onde-estamos" onClick={go("/onde-estamos")}>Onde estamos</a>
                <a className="btn btn--outline btn--sm" href="#/" onClick={go("/", "nossavisao")}>Nossa visão</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOSSA VISÃO */}
      <section className="section section--dark" id="nossavisao" data-screen-label="Nossa Visão">
        <div className="container">
          <div className="split split--wide vision reveal">
            <div>
              <p className="eyebrow eyebrow--peach">NOSSA VISÃO</p>
              <h2 className="h-display">Cristo reinará em breve sobre a <span className="serif-italic" style={{ color: "var(--peach)" }}>Terra</span></h2>
              <p className="lead">Diante desse evento, a liderança tem como meta o desenvolvimento dos membros para a edificação da igreja e crescimento espiritual, para reinarem com Cristo no futuro.</p>
            </div>
            <div className="video-frame">
              <iframe src="https://www.youtube.com/embed/1qW5N0Rp3Qg" title="Vídeo da Comunidade Cristã em Fortaleza" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* MENSAGENS */}
      <section className="section" id="mensagens" data-screen-label="Mensagens">
        <div className="container">
          <div className="msgs__head reveal">
            <div>
              <p className="eyebrow">MENSAGENS</p>
              <h2 className="h-display">Seja edificado com a Palavra de Deus</h2>
            </div>
            <a className="link-arrow" href={D.social.youtube} target="_blank" rel="noopener">Ver todos no YouTube →</a>
          </div>
          <div className="msgs__grid reveal">
            <a className="msg-feature" href={D.social.youtube} target="_blank" rel="noopener">
              <div className="thumb">
                <span className="thumb__play"><span className="play-tri"></span></span>
                <span className="thumb__tag">última pregação · canal no YouTube</span>
              </div>
              <h3>Mensagem mais recente</h3>
              <p>Toque para assistir no canal da igreja</p>
            </a>
            <div className="msg-side">
              <a className="msg-item" href={D.social.youtube} target="_blank" rel="noopener">
                <div className="thumb"><span className="thumb__play"><span className="play-tri"></span></span></div>
                <div><h4>Série de domingo</h4><small>vídeo recente</small></div>
              </a>
              <a className="msg-item" href={D.social.youtube} target="_blank" rel="noopener">
                <div className="thumb"><span className="thumb__play"><span className="play-tri"></span></span></div>
                <div><h4>Estudo da Palavra</h4><small>vídeo recente</small></div>
              </a>
              <a className="btn btn--outline btn--sm" href={D.social.youtube} target="_blank" rel="noopener" style={{ marginTop: "2px" }}>Abrir o canal</a>
            </div>
          </div>
        </div>
      </section>

      {/* NOSSAS REUNIÕES */}
      <section className="section section--alt" data-screen-label="Reuniões">
        <div className="container">
          <div className="reun__head reveal">
            <p className="eyebrow">NOSSAS REUNIÕES</p>
            <h2 className="h-display">Você é o nosso <span className="serif-italic" style={{ color: "var(--brand)" }}>convidado</span></h2>
            <p className="lead">Encontros ao longo da semana para adorar, estudar e caminhar juntos.</p>
          </div>
          <div className="reun__grid reveal">
            {D.reunioes.map((r, i) => (
              <article className="reun-card" key={i}>
                <img src={r.img} alt={r.titulo} loading="lazy" />
                <div className="reun-card__body">
                  <span className="reun-card__tag">{r.tag}</span>
                  <h3>{r.titulo}</h3>
                  <p>{r.texto}</p>
                </div>
              </article>
            ))}
            <article className="pgm-card">
              <div className="pgm-card__body">
                <span className="reun-card__tag" style={{ color: "var(--peach)" }}><span style={{ color: "#f5858c" }}><span style={{ color: "#e94f1b" }}>PEQUENO GRUPO MULTIPLICADOR</span></span></span>
                <h3>Entre em um PGM</h3>
                <p>Encontros nas casas durante a semana — onde a igreja vira família e cada pessoa é cuidada de perto.</p>
                <a className="btn btn--light btn--sm" href={D.social.linktree} target="_blank" rel="noopener">Quero participar →</a>
              </div>
              <img src="images/reuniaodepgm.jpeg" alt="Pequeno Grupo Multiplicador" loading="lazy" />
            </article>
          </div>
        </div>
      </section>

      {/* REDES SOCIAIS */}
      <section className="section" data-screen-label="Redes">
        <div className="container">
          <div className="redes__grid reveal">
            <div className="redes__card">
              <div>
                <h2>Acesse nossas <span className="serif-italic" style={{ color: "var(--peach)" }}>redes</span></h2>
                <p>Siga-nos e faça parte da nossa comunidade também online.</p>
              </div>
              <div className="redes__links">
                <a href={D.social.instagram} target="_blank" rel="noopener"><img src="images/insta.svg" alt="" />@comunidadecristafortaleza</a>
                <a href={D.social.facebook} target="_blank" rel="noopener"><img src="images/facebook.svg" alt="" />Comunidade Cristã - Fortaleza</a>
                <a href={D.social.youtube} target="_blank" rel="noopener"><img src="images/youtube.svg" alt="" />@comunidadecristaemfortaleza</a>
              </div>
            </div>
            <div className="redes__feed">
              <iframe src="https://cdn.lightwidget.com/widgets/f5f7d9d5f1cd59029a9a2813ddf416db.html" scrolling="no" allowTransparency="true" title="Feed do Instagram"></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

/* global React */
window.CCF = window.CCF || {};

window.CCF.Home = function Home({ navigate }) {
  const D = window.CCF_DATA;
  window.CCF.useReveal();

  const [yt, setYt] = React.useState({ latest: null, playlists: [] });

  React.useEffect(() => {
    const API_KEY = "AIzaSyBvuEPxZxqWnC-OT-yVMn-lxdt12fCrYcs";
    const CHANNEL_ID = "UC9RfjDu1HvAVr5PpBnvu4cg";
    const CACHE_KEY = "ccf_yt_v3";
    const TTL = 60 * 60 * 1000;
    const PLAYLIST_IDS = [
      "PL__1Q8-wN2whg9SVmCgxymG2Y2Kr6Su2I",
      "PL__1Q8-wN2wjpctdlLTFvIBBzhDFC87oc",
      "PL__1Q8-wN2whcK6ceBOvnfNQpGXEUmLP6",
      "PL__1Q8-wN2wjC5EcTDL1T6r00xxmT9are",
    ];

    try {
      const c = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
      if (c && Date.now() - c.ts < TTL) {
        setYt(c.data);
        return;
      }
    } catch {}

    const uploadsId = CHANNEL_ID.replace(/^UC/, "UU");
    Promise.all([
      fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsId}&maxResults=1&key=${API_KEY}`,
      ).then((r) => r.json()),
      fetch(
        `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${PLAYLIST_IDS.join(",")}&key=${API_KEY}`,
      ).then((r) => r.json()),
    ])
      .then(([vd, pd]) => {
        const latest = vd.items?.[0]
          ? {
              videoId: vd.items[0].snippet.resourceId.videoId,
              title: vd.items[0].snippet.title,
            }
          : null;
        const playlists = (pd.items || []).map((p) => ({
          id: p.id,
          title: p.snippet.title,
          thumb:
            p.snippet.thumbnails?.medium?.url ||
            p.snippet.thumbnails?.default?.url,
        }));
        const data = { latest, playlists };
        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ ts: Date.now(), data }),
          );
        } catch {}
        setYt(data);
      })
      .catch((e) => console.error("YouTube:", e));
  }, []);

  const go = (path, section) => (e) => {
    e.preventDefault();
    navigate(path, section);
  };

  return (
    <main>
      {/* HERO */}
      <section className="hero" data-screen-label="Hero">
        <img
          className="hero__media"
          src="images/adoracao1.jpg"
          alt=""
          aria-hidden="true"
        />
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="images/adoracao1.jpg"
        >
          {/* Vídeo de fundo original (dessaturado p/ legibilidade).
              1ª fonte = arquivo local (já existe em images/ no servidor da igreja);
              2ª = espelho CDN para pré-visualização. */}
          <source
            src="images/7589A376-FA01-45CE-95C1-82E0DCB06946.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.jsdelivr.net/gh/raissaduarteb/ccf@main/images/7589A376-FA01-45CE-95C1-82E0DCB06946.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero__scrim"></div>
        <div className="hero__inner">
          <h1>
            <span className="serif-italic">Bem-vindo à</span>Comunidade Cristã
            em Fortaleza
          </h1>
          <p className="hero__lead">
            Uma família apoiada na Palavra de Deus, que se reúne para adorar,
            crescer e cuidar uns dos outros. Venha do jeito que você está.
          </p>
          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href="#/"
              onClick={go("/", "quemsomos")}
            >
              Conheça a igreja
            </a>
            <a
              className="btn btn--ghost"
              href={D.social.youtubeLive}
              target="_blank"
              rel="noopener"
            >
              <span className="play-tri"></span>Assista ao vivo
            </a>
          </div>
        </div>
        <div className="hero__scroll">
          <span>ROLE</span>
          <i></i>
        </div>
      </section>

      {/* BARRA DE HORÁRIO */}
      <section className="schedule" aria-label="Reunião no YouTube">
        <div className="schedule__inner">
          <span className="schedule__dot"></span>
          <img
            src="images/youtube.svg"
            alt=""
            width="18"
            height="14"
            style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
          />
          <span className="schedule__label">REUNIÃO DO PARTIR DO PÃO</span>
          <span className="schedule__sep"></span>
          <b>DOMINGO</b>
          <span className="schedule__sep"></span>
          <b>18H</b>
          <a
            className="btn btn--sm"
            href={D.social.youtubeLive}
            target="_blank"
            rel="noopener"
            style={{
              background: "rgb(233 79 27)",
              color: "#fff",
              border: "none",
            }}
          >
            Assista online →
          </a>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section
        className="section"
        id="quemsomos"
        data-screen-label="Quem Somos"
      >
        <div className="container">
          <div className="split about reveal">
            <div className="about__media">
              <img
                className="about__img"
                src="images/488310235_1133611968795574_6362825387491750504_n.jpg"
                alt="Batismo na Comunidade Cristã em Fortaleza"
                loading="lazy"
              />
              <div className="about__badge">
                <b>+30</b>
                <small>anos servindo Fortaleza e região</small>
              </div>
            </div>
            <div>
              <p className="eyebrow">QUEM SOMOS</p>
              <h2 className="h-display">
                Somos uma igreja apoiada na{" "}
                <span
                  className="serif-italic"
                  style={{ color: "var(--brand)" }}
                >
                  Palavra de Deus
                </span>
              </h2>
              <p className="lead">
                Com Cristo como fundamento, promovemos o desenvolvimento da
                comunidade por meio da pregação do evangelho e do cuidado
                amoroso aos membros, visando à maturidade espiritual.
              </p>
              <div className="about__actions">
                <a
                  className="btn btn--dark btn--sm"
                  href="#/onde-estamos"
                  onClick={go("/onde-estamos")}
                >
                  Onde estamos
                </a>
                <a
                  className="btn btn--outline btn--sm"
                  href="#/"
                  onClick={go("/", "nossavisao")}
                >
                  Nossa visão
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOSSA VISÃO */}
      <section
        className="section section--dark"
        id="nossavisao"
        data-screen-label="Nossa Visão"
      >
        <div className="container">
          <div className="split split--wide vision reveal">
            <div>
              <p className="eyebrow eyebrow--peach">NOSSA VISÃO</p>
              <h2 className="h-display">
                Cristo reinará em breve sobre a{" "}
                <span
                  className="serif-italic"
                  style={{ color: "var(--peach)" }}
                >
                  Terra
                </span>
              </h2>
              <p className="lead">
                Diante desse evento, a liderança tem como meta o desenvolvimento
                dos membros para a edificação da igreja e crescimento
                espiritual, para reinarem com Cristo no futuro.
              </p>
            </div>
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/1qW5N0Rp3Qg"
                title="Vídeo da Comunidade Cristã em Fortaleza"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
              <h2 className="h-display">
                Seja edificado com a Palavra de Deus
              </h2>
            </div>
            <a
              className="link-arrow"
              href={D.social.youtube}
              target="_blank"
              rel="noopener"
            >
              Ver todos no YouTube →
            </a>
          </div>
          <div className="msgs__grid reveal">
            {/* Esquerda: último vídeo */}
            <div className="videos-left">
              <div className="video-frame">
                {yt.latest ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${yt.latest.videoId}`}
                    title={yt.latest.title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="yt-placeholder" />
                )}
              </div>
              <h3 className="yt-title">
                {yt.latest ? yt.latest.title : "Última pregação"}
              </h3>
              <p className="yt-sub">Pregação mais recente do canal</p>
            </div>

            {/* Direita: playlists */}
            <div className="msg-playlists">
              <p className="eyebrow" style={{ marginBottom: "16px" }}>
                SÉRIES
              </p>
              {yt.playlists.length > 0
                ? yt.playlists.map((pl) => (
                    <a
                      key={pl.id}
                      className="playlist-item"
                      href={`https://www.youtube.com/playlist?list=${pl.id}`}
                      target="_blank"
                      rel="noopener"
                    >
                      <div className="playlist-thumb">
                        {pl.thumb && (
                          <img src={pl.thumb} alt="" loading="lazy" />
                        )}
                        <span className="playlist-play">
                          <span className="play-tri" />
                        </span>
                      </div>
                      <span className="playlist-title">{pl.title}</span>
                    </a>
                  ))
                : [0, 1, 2, 3].map((i) => (
                    <div key={i} className="playlist-item">
                      <div className="playlist-thumb playlist-thumb--empty" />
                      <span className="playlist-title playlist-title--empty" />
                    </div>
                  ))}
              <a
                className="btn btn--outline btn--sm"
                href={D.social.youtube}
                target="_blank"
                rel="noopener"
                style={{ marginTop: "4px", alignSelf: "flex-start" }}
              >
                Abrir o canal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NOSSAS REUNIÕES */}
      <section className="section section--alt" data-screen-label="Reuniões">
        <div className="container">
          <div className="reun__head reveal">
            <p className="eyebrow">NOSSAS REUNIÕES</p>
            <h2 className="h-display">
              Você é o nosso{" "}
              <span className="serif-italic" style={{ color: "var(--brand)" }}>
                convidado
              </span>
            </h2>
            <p className="lead">
              Encontros ao longo da semana para adorar, estudar e caminhar
              juntos.
            </p>
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
                <span
                  className="reun-card__tag"
                  style={{ color: "var(--peach)" }}
                >
                  <span style={{ color: "#f5858c" }}>
                    <span style={{ color: "#e94f1b" }}>
                      PEQUENO GRUPO MULTIPLICADOR
                    </span>
                  </span>
                </span>
                <h3>Entre em um PGM</h3>
                <p>
                  Encontros nas casas durante a semana — onde a igreja vira
                  família e cada pessoa é cuidada de perto.
                </p>
                <a
                  className="btn btn--light btn--sm"
                  href={D.social.linktree}
                  target="_blank"
                  rel="noopener"
                >
                  Quero participar →
                </a>
              </div>
              <img
                src="images/reuniaodepgm.jpeg"
                alt="Pequeno Grupo Multiplicador"
                loading="lazy"
              />
            </article>
          </div>
        </div>
      </section>

      {/* HINÁRIO */}
      <section className="hinario-banner reveal" data-screen-label="Hinário">
        <div className="hinario-banner__inner container">
          <span className="hinario-banner__icon">♪</span>
          <div className="hinario-banner__text">
            <h3>Hinário da Igreja</h3>
            <p>Acesse os hinos cantados na nossa comunidade a qualquer hora.</p>
          </div>
          <a
            className="btn btn--primary"
            href="https://hinarioccf.netlify.app/"
            target="_blank"
            rel="noopener"
          >
            Abrir hinário →
          </a>
        </div>
      </section>

      {/* REDES SOCIAIS */}
      <section className="section" data-screen-label="Redes">
        <div className="container">
          <div className="redes__grid reveal">
            <div className="redes__card">
              <div>
                <h2>
                  Acesse nossas{" "}
                  <span
                    className="serif-italic"
                    style={{ color: "var(--brand)" }}
                  >
                    redes
                  </span>
                </h2>
                <p>Siga-nos e faça parte da nossa comunidade também online.</p>
              </div>
              <div className="redes__links">
                <a href={D.social.instagram} target="_blank" rel="noopener">
                  <img src="images/insta.svg" alt="" />
                  @comunidadecristafortaleza
                </a>
                <a href={D.social.facebook} target="_blank" rel="noopener">
                  <img src="images/facebook.svg" alt="" />
                  Comunidade Cristã - Fortaleza
                </a>
                <a href={D.social.youtube} target="_blank" rel="noopener">
                  <img src="images/youtube.svg" alt="" />
                  @comunidadecristaemfortaleza
                </a>
              </div>
            </div>
            <div className="redes__feed">
              <iframe
                src="https://cdn.lightwidget.com/widgets/f5f7d9d5f1cd59029a9a2813ddf416db.html"
                scrolling="no"
                allowTransparency="true"
                title="Feed do Instagram"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

/* global React */
window.CCF = window.CCF || {};

window.CCF.RoteirosPgm = function RoteirosPgm() {
  const D = window.CCF_DATA;
  window.CCF.useReveal();

  // roteiro de data mais recente
  const atual = [...D.roteiros].sort(
    (a, b) => new Date(b.data) - new Date(a.data),
  )[0];
  const dataFmt = atual
    ? new Date(atual.data + "T00:00:00").toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;
  const viewerSrc = atual
    ? "https://drive.google.com/file/d/" + atual.driveId + "/preview"
    : null;

  return (
    <main>
      <section
        className="page-banner"
        style={{ height: "38vh", minHeight: "280px" }}
        data-screen-label="Banner"
      >
        <img
          className="page-banner__img"
          style={{ objectPosition: "center 50%" }}
          src="images/reuniaodepgm.jpeg"
          alt="Pequeno Grupo Multiplicador"
        />
        <div className="page-banner__scrim"></div>
        <div className="container page-banner__inner">
          <p className="eyebrow eyebrow--peach">PEQUENO GRUPO MULTIPLICADOR</p>
          <h1>
            Roteiros de <span className="serif-italic">PGM</span>
          </h1>
        </div>
      </section>

      <div className="container section" style={{ maxWidth: "1000px" }}>
        <div className="pgm-head reveal">
          <div>
            <p className="eyebrow">ROTEIRO ATUAL</p>
            <h2>Roteiro mais recente</h2>
            {dataFmt && (
              <span className="pgm-date">
                <i></i>Adicionado em {dataFmt}
              </span>
            )}
          </div>
          <a
            className="btn btn--primary"
            href="https://drive.google.com/drive/folders/1qAax68W9SQxLrRGtkch_4k6caUwgQc4S?usp=sharing"
            target="_blank"
            rel="noopener"
          >
            Ver todos os roteiros →
          </a>
        </div>

        <div className="pgm-viewer reveal">
          {viewerSrc && (
            <iframe src={viewerSrc} title="Roteiro de PGM atual"></iframe>
          )}
        </div>

        <a
          className="pgm-cta reveal"
          href={D.social.linktree}
          target="_blank"
          rel="noopener"
        >
          <span>
            <small style={{ color: "var(--brand)" }}>
              AINDA NÃO PARTICIPA?
            </small>
            <b>Entre em um PGM perto de você</b>
          </span>
          <span className="pgm-cta__arrow">→</span>
        </a>
      </div>
    </main>
  );
};

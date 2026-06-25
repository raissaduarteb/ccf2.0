/* global React */
window.CCF = window.CCF || {};

window.CCF.RoteirosPgm = function RoteirosPgm() {
  const D = window.CCF_DATA;
  window.CCF.useReveal();

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxhWfafxScxSBDJ-uXX22bOoWwWWcxsSHrVCiO5YkcfZd1aqYzDlvxux_5UnCCVAg3Edg/exec";
  const CACHE_KEY = "ccf_pgm_v2";
  const TTL = 60 * 60 * 1000;

  // Inicia com o fallback do data.js enquanto a API carrega
  const fallback = [...D.roteiros].sort(
    (a, b) => new Date(b.data) - new Date(a.data),
  )[0] || null;

  const [roteiro, setRoteiro] = React.useState(fallback);
  const [erro, setErro] = React.useState(false);

  React.useEffect(() => {
    try {
      const c = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
      if (c && Date.now() - c.ts < TTL) {
        setRoteiro(c.data);
        return;
      }
    } catch {}

    fetch(SCRIPT_URL)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        const files = Array.isArray(data) ? data : (data.files || []);
        if (files.length === 0) return;
        const latest = files[0];
        const result = {
          driveId: latest.id,
          data: latest.createdTime.slice(0, 10),
        };
        setRoteiro(result);
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data: result }));
        } catch {}
      })
      .catch(function (e) {
        console.error("[CCF] Drive API:", e);
        setErro(true);
      });
  }, []);

  const dataFmt = roteiro
    ? new Date(roteiro.data + "T00:00:00").toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const viewerSrc = roteiro
    ? "https://drive.google.com/file/d/" + roteiro.driveId + "/preview"
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
            {erro && (
              <span style={{ fontSize: "13px", color: "var(--ink-muted)", display: "block", marginTop: "6px" }}>
                Não foi possível verificar novos roteiros agora.
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

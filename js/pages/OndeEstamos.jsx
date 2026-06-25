/* global React */
window.CCF = window.CCF || {};

window.CCF.OndeEstamos = function OndeEstamos() {
  const { useState } = React;
  const D = window.CCF_DATA;
  const [zoom, setZoom] = useState(null);
  window.CCF.useReveal();

  return (
    <main>
      <section
        className="page-banner"
        style={{ height: "46vh", minHeight: "340px" }}
        data-screen-label="Banner"
      >
        <img
          className="page-banner__img"
          src="images/beira_5-26833450.webp"
          alt="Beira-mar de Fortaleza"
        />
        <div className="page-banner__scrim"></div>
        <div className="container page-banner__inner">
          <p className="eyebrow eyebrow--peach">FORTALEZA · CE</p>
          <h1>
            Onde <span className="serif-italic">estamos</span>
          </h1>
          <p>
            Reunimos em três locais pela cidade. Encontre o mais perto de você e
            venha nos visitar.
          </p>
        </div>
      </section>

      <div className="container section">
        <div className="locais">
          {D.locais.map((loc, i) => {
            const mapEl = (
              <iframe
                className="local__map"
                title={"Mapa " + loc.nome}
                src={loc.mapa}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            );
            const textEl = (
              <div className="local__text">
                <span className="badge-casa">{loc.casa}</span>
                <h2>{loc.nome}</h2>
                <p className="local__addr">{loc.endereco}</p>
                <div className="local__times">
                  {loc.reunioes.map((r, j) => (
                    <span className="time-row" key={j}>
                      <b>{r.quando}</b>
                      {r.titulo}
                    </span>
                  ))}
                </div>
                <div
                  className={
                    "local__gallery" +
                    (loc.galeria.length === 2 ? " cols-2" : "")
                  }
                >
                  {loc.galeria.map((src, j) => (
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      key={j}
                      onClick={() => setZoom(src)}
                    />
                  ))}
                </div>
              </div>
            );
            // alterna mapa/texto a cada casa
            const mapFirst = i % 2 === 1;
            return (
              <article className="local reveal" key={i}>
                {mapFirst ? mapEl : textEl}
                {mapFirst ? textEl : mapEl}
              </article>
            );
          })}
        </div>
      </div>

      <window.CCF.Lightbox src={zoom} onClose={() => setZoom(null)} />
    </main>
  );
};

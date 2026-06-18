/* global React */
window.CCF = window.CCF || {};

function CopyButton({ value }) {
  const { useState } = React;
  const [done, setDone] = useState(false);
  const copy = () => {
    const fallback = () => {
      const ta = document.createElement("textarea");
      ta.value = value; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
    };
    const ok = () => { setDone(true); setTimeout(() => setDone(false), 1800); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(ok).catch(() => { fallback(); ok(); });
    } else { fallback(); ok(); }
  };
  return <button className="pix-copy" type="button" onClick={copy}>{done ? "✓ Copiado" : "Copiar"}</button>;
}

window.CCF.Contribuicao = function Contribuicao() {
  window.CCF.useReveal();
  return (
    <main>
      <section className="page-banner" style={{ height: "42vh", minHeight: "320px" }} data-screen-label="Banner">
        <img className="page-banner__img" style={{ objectPosition: "center 40%" }} src="images/espiritualidade-e-religiao-as-maos-postas-em-oracao-sobre-uma-biblia-sagrada-na-igreja-conceito-de-fe.jpg" alt="Mãos em oração sobre a Bíblia" />
        <div className="page-banner__scrim"></div>
        <div className="container page-banner__inner">
          <p className="eyebrow eyebrow--peach">GENEROSIDADE</p>
          <h1>Contribuição</h1>
          <p>Sua oferta sustenta a obra da igreja e o avanço do evangelho. Cada gesto importa — e é com alegria.</p>
        </div>
      </section>

      <div className="container section" style={{ maxWidth: "1100px" }}>
        <div className="give-grid reveal">
          <article className="give-card">
            <span className="give-card__tag">DÍZIMOS E OFERTAS</span>
            <h2>Despesas ordinárias</h2>
            <p className="give-card__desc">Manutenção e funcionamento da igreja local.</p>
            <span className="give-card__label">CHAVE PIX (CNPJ)</span>
            <div className="pix-row"><code>53.939.100/0001-44</code><CopyButton value="53.939.100/0001-44" /></div>
            <div className="bank-row">
              <span className="bank-row__logo" style={{ fontSize: "13px" }}>ITAÚ</span>
              <div><small>Banco Itaú</small><b>Comunidade Cristã Ig. em Fortaleza</b></div>
            </div>
          </article>

          <article className="give-card">
            <span className="give-card__tag">OFERTAS PARA MISSÕES</span>
            <h2>Cooperadores do Evangelho</h2>
            <p className="give-card__desc">Missões no Brasil e na África.</p>
            <span className="give-card__label">CHAVE PIX (E-MAIL)</span>
            <div className="pix-row"><code>missoes@ccf.org.br</code><CopyButton value="missoes@ccf.org.br" /></div>
            <div className="bank-row">
              <span className="bank-row__logo" style={{ fontSize: "11px" }}>BRAD.</span>
              <div><small>Banco Bradesco</small><b>Comunidade Cristã Ig. em Fortaleza</b></div>
            </div>
          </article>
        </div>

        <p className="give-verse reveal">"Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria."</p>
        <p className="give-ref reveal">2 CORÍNTIOS 9:7</p>
      </div>
    </main>
  );
};

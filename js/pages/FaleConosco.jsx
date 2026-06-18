/* global React */
window.CCF = window.CCF || {};

window.CCF.FaleConosco = function FaleConosco() {
  const D = window.CCF_DATA;
  window.CCF.useReveal();
  return (
    <main>
      <section className="page-banner" style={{ height: "40vh", minHeight: "300px" }} data-screen-label="Banner">
        <img className="page-banner__img" style={{ objectPosition: "center 35%" }} src="images/espiritualidade-e-religiao-as-maos-postas-em-oracao-sobre-uma-biblia-sagrada-na-igreja-conceito-de-fe.jpg" alt="Mãos em oração sobre a Bíblia" />
        <div className="page-banner__scrim"></div>
        <div className="container page-banner__inner">
          <p className="eyebrow eyebrow--peach">ESTAMOS POR PERTO</p>
          <h1>Fale <span className="serif-italic">conosco</span></h1>
        </div>
      </section>

      <div className="container section" style={{ maxWidth: "1100px" }}>
        <div className="contact-grid reveal">
          <a className="contact-card" href={"https://wa.me/" + D.contato.whatsapp} target="_blank" rel="noopener">
            <span className="contact-card__icon"><img src="images/icontelefone.svg" alt="" /></span>
            <span><span className="contact-card__label">WHATSAPP</span><span className="contact-card__value">{D.contato.telefoneFmt}</span></span>
          </a>
          <a className="contact-card" href={"mailto:" + D.contato.email}>
            <span className="contact-card__icon"><img src="images/iconmail.svg" alt="" /></span>
            <span><span className="contact-card__label">E-MAIL</span><span className="contact-card__value">{D.contato.email}</span></span>
          </a>
          <a className="contact-card" href="https://www.google.com/maps/place/R.+Lauro+Maia,+1196+-+Jos%C3%A9+Bonifacio,+Fortaleza+-+CE,+60055-295" target="_blank" rel="noopener">
            <span className="contact-card__icon"><img src="images/iconlocation.svg" alt="" /></span>
            <span><span className="contact-card__label">ENDEREÇO</span><span className="contact-card__value">{D.contato.enderecoLinhas[0]}<br />{D.contato.enderecoLinhas[1]}</span></span>
          </a>
        </div>

        <div className="form-card reveal">
          <div className="form-card__intro">
            <p className="eyebrow eyebrow--peach">QUEREMOS OUVIR VOCÊ</p>
            <h2>Mande sua <span className="serif-italic" style={{ color: "var(--peach)" }}>mensagem</span></h2>
            <p>Dúvidas, pedidos de oração ou apenas um oi — respondemos com carinho.</p>
          </div>
          <div className="form-card__body">
            <form action={"https://formsubmit.co/" + D.contato.email} method="POST">
              <input type="hidden" name="_captcha" value="false" />
              <input className="field" type="text" name="nome" placeholder="Seu nome" aria-label="Nome" required />
              <input className="field" type="email" name="email" placeholder="Seu e-mail" aria-label="E-mail" required />
              <input className="field" type="text" name="cidade" placeholder="Cidade / UF" aria-label="Cidade e estado" required />
              <textarea className="field" name="mensagem" placeholder="Escreva sua mensagem" aria-label="Mensagem" rows="4" required></textarea>
              <button className="btn btn--primary" type="submit">Enviar mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

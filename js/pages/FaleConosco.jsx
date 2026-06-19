/* global React */
window.CCF = window.CCF || {};

window.CCF.FaleConosco = function FaleConosco() {
  const { useState } = React;
  const D = window.CCF_DATA;
  window.CCF.useReveal();

  const empty = { nome: "", email: "", cidade: "", mensagem: "" };
  const [fields, setFields] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const set = (k) => (e) => setFields((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    fetch("https://formsubmit.co/ajax/" + D.contato.email, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...fields, _captcha: "false" }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.success === "true" || data.success === true) {
          setStatus("sent");
          setFields(empty);
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  };

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
            {status === "sent" ? (
              <div className="form-success">
                <div className="form-success__icon">✓</div>
                <h3>Mensagem enviada!</h3>
                <p>Obrigado pelo contato. Responderemos em breve.</p>
                <button className="btn btn--primary" style={{ marginTop: "20px" }} onClick={() => setStatus("idle")}>
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input className="field" type="text" placeholder="Seu nome" aria-label="Nome" required value={fields.nome} onChange={set("nome")} />
                <input className="field" type="email" placeholder="Seu e-mail" aria-label="E-mail" required value={fields.email} onChange={set("email")} />
                <input className="field" type="text" placeholder="Cidade / UF" aria-label="Cidade e estado" required value={fields.cidade} onChange={set("cidade")} />
                <textarea className="field" placeholder="Escreva sua mensagem" aria-label="Mensagem" rows="4" required value={fields.mensagem} onChange={set("mensagem")}></textarea>
                {status === "error" && (
                  <p style={{ color: "var(--brand)", fontSize: "14px", margin: "0" }}>
                    Ocorreu um erro. Tente novamente ou entre em contato por e-mail.
                  </p>
                )}
                <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Enviando…" : "Enviar mensagem"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

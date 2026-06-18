/* global React, ReactDOM */
window.CCF = window.CCF || {};

/* ------------------------------------------------------------
   Hook: revela elementos .reveal ao entrarem na viewport
   ------------------------------------------------------------ */
window.CCF.useReveal = function useReveal() {
  const { useEffect } = React;
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

/* ------------------------------------------------------------
   Rotas
   ------------------------------------------------------------ */
const ROUTES = {
  "/":             "Home",
  "/onde-estamos": "OndeEstamos",
  "/contribuicao": "Contribuicao",
  "/fale-conosco": "FaleConosco",
  "/roteiros-pgm": "RoteirosPgm",
};

function parseHash() {
  const raw = (window.location.hash || "#/").replace(/^#/, "");
  return ROUTES[raw] ? raw : "/";
}

/* ------------------------------------------------------------
   App: roteador por hash + scroll para seção
   ------------------------------------------------------------ */
function App() {
  const { useState, useEffect, useRef } = React;
  const [path, setPath] = useState(parseHash());
  const pendingSection = useRef(null);

  // sincroniza com o hash da URL (botões voltar/avançar)
  useEffect(() => {
    const onHash = () => setPath(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // ao trocar de rota: rola ao topo, ou para a seção pedida
  useEffect(() => {
    const sec = pendingSection.current;
    pendingSection.current = null;
    if (sec) {
      // espera a página montar
      requestAnimationFrame(() => {
        const el = document.getElementById(sec);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo(0, 0);
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [path]);

  const navigate = (to, section) => {
    pendingSection.current = section || null;
    if (to === path) {
      // mesma rota: apenas rola para a seção
      if (section) {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      pendingSection.current = null;
    } else {
      window.location.hash = "#" + to;
    }
  };

  const PageName = ROUTES[path];
  const Page = window.CCF[PageName];

  return (
    <React.Fragment>
      <window.CCF.Header navigate={navigate} />
      {Page ? <Page navigate={navigate} /> : null}
      <window.CCF.Footer navigate={navigate} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

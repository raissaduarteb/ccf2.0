/* ============================================================
   Dados de conteúdo do site (editáveis sem mexer nos componentes)
   ============================================================ */
window.CCF_DATA = {

  contato: {
    whatsapp: "5585997104597",
    telefoneFmt: "(85) 99710-4597",
    email: "contato@ccf.org.br",
    enderecoLinhas: ["Rua Lauro Maia, 1196", "Bairro de Fátima · Fortaleza/CE"],
  },

  social: {
    instagram: "https://www.instagram.com/comunidadecristafortaleza/",
    facebook: "https://www.facebook.com/Igrejaemfortaleza",
    youtube: "https://www.youtube.com/@comunidadecristaemfortaleza",
    youtubeLive: "https://www.youtube.com/@comunidadecristaemfortaleza/streams",
    linktree: "https://linktr.ee/comunidadecristafortaleza",
  },

  // Roteiros de PGM — a página exibe sempre o de DATA mais recente.
  // Para publicar um novo, adicione um item (a ordem na lista não importa).
  // data: 'AAAA-MM-DD'  ·  driveId: ID do arquivo no Google Drive (entre /d/ e /preview)
  roteiros: [
    { data: "2026-06-15", driveId: "11_93EUPKEDhrtk1RELE9ffyOkBU5wDdI" },
    // { data: "2026-06-08", driveId: "COLE_AQUI_O_ID_DO_DRIVE" },
  ],

  // Casas onde a igreja se reúne
  locais: [
    {
      casa: "CASA 1",
      nome: "Bairro de Fátima",
      endereco: "Rua Lauro Maia, 1196 — Bairro de Fátima.",
      reunioes: [{ quando: "DOMINGO · 18H", titulo: "Reunião do Partir do Pão" }],
      galeria: ["images/img5.jpg", "images/reuniaopartirdopao.jpg", "images/img4.jpg"],
      mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.65956073721514!2d-38.52289853170285!3d-3.7498522617628907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748de02486af3%3A0x36481ef8784f4c56!2sComunidade%20crist%C3%A3%20em%20Fortaleza!5e0!3m2!1spt-BR!2sbr!4v1751914344964!5m2!1spt-BR!2sbr",
    },
    {
      casa: "CASA 2",
      nome: "Granja Portugal",
      endereco: "Rua Taquari, 2455 — Granja Portugal.",
      reunioes: [
        { quando: "SÁBADO · 19H30", titulo: "Reunião Ministerial" },
        { quando: "SEGUNDA · 20H", titulo: "Reunião de Oração" },
      ],
      galeria: ["images/ministerial.jpeg", "images/reuniaodeoracao.jpeg", "images/reuniaodejovens.jpeg"],
      mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.15709480768!2d-38.60269!3d-3.775977000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74c666705e7bf%3A0xdf5e78275dc789f1!2sR.%20Taquari%2C%202455%20-%20Granja%20Portugal%2C%20Fortaleza%20-%20CE%2C%2060541-525!5e0!3m2!1spt-BR!2sbr!4v1751995269566!5m2!1spt-BR!2sbr",
    },
    {
      casa: "CASA 3",
      nome: "José Walter",
      endereco: "Rua N, 515, Montenegro II — José Walter.",
      reunioes: [
        { quando: "SÁBADO · 19H", titulo: "Reunião Ministerial" },
        { quando: "SEGUNDA · 19H30", titulo: "Reunião de Oração" },
      ],
      galeria: ["images/reuniaodejovens.jpeg", "images/ministerial.jpeg", "images/reuniaodepgm.jpeg"],
      mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2065.4049096048966!2d-38.55146692653158!3d-3.8335878961402132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7514b66600253%3A0x4acc853b17f389!2sEspa%C3%A7o%20Premium%20eventos!5e0!3m2!1spt-BR!2sbr!4v1751995378666!5m2!1spt-BR!2sbr",
    },
  ],

  // Reuniões mostradas na home
  reunioes: [
    { tag: "DOMINGO · 18H", titulo: "Reunião da Mesa do Senhor", texto: "A ceia e a Palavra reunindo toda a família da igreja.", img: "images/reuniaopartirdopao.jpg" },
    { tag: "JOVENS & ADOLESCENTES", titulo: "Reunião de Jovens", texto: "Uma geração buscando a Deus com alegria e propósito.", img: "images/reuniaodejovens.jpeg" },
    { tag: "DURANTE A SEMANA", titulo: "Reunião da Palavra", texto: "Ensino bíblico para edificação e crescimento espiritual.", img: "images/ministerial.jpeg" },
    { tag: "DURANTE A SEMANA", titulo: "Reunião de Oração", texto: "Buscando juntos a presença e a direção de Deus.", img: "images/reuniaodeoracao.jpeg" },
  ],
};

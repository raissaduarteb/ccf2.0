/* global React */
window.CCF = window.CCF || {};

/**
 * Lightbox para ampliar imagens.
 * props: src (string|null), onClose ()
 */
window.CCF.Lightbox = function Lightbox({ src, onClose }) {
  const { useEffect } = React;
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className={"lightbox" + (src ? " is-open" : "")} role="dialog" aria-modal="true" aria-label="Imagem ampliada" onClick={onClose}>
      <button className="lightbox__close" type="button" aria-label="Fechar" onClick={onClose}>&times;</button>
      {src && <img className="lightbox__img" src={src} alt="Imagem ampliada" onClick={(e) => e.stopPropagation()} />}
    </div>
  );
};

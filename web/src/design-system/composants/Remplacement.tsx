// Contenus de remplacement : à remplacer par de vrais contenus dans les prototypes (ux-08).
import type { PropsImage, PropsTexte } from '../../projet/ui';
import './Remplacement.css';

export function Image({ alt }: PropsImage) {
  return alt
    ? <div className="ds-image" role="img" aria-label={alt} />
    : <div className="ds-image" aria-hidden="true" />;
}

export function Texte({ lignes = 3 }: PropsTexte) {
  return <div className="ds-texte" style={{ height: `calc(${lignes} * var(--ds-font-line-height-base) * 1em)` }} aria-hidden="true" />;
}

// Kit de wireframes : copie conforme de l'asset du skill ux-06. Implémente le contrat de src/projet/ui.ts.
import { useId } from 'react';
import { Link } from 'react-router';
import { useChemin } from '../../projet/navigation';
import { zones } from '../../projet/zones';
import type {
  AvecEnfants, Kit, PropsAlerte, PropsBloc, PropsBouton, PropsCarte, PropsChamp, PropsEtiquette,
  PropsGabarit, PropsImage, PropsLien, PropsModale, PropsNote, PropsTexte,
} from '../../projet/ui';
import './wireframe.css';

export function Gabarit({ zone, rubrique, ariane, children }: PropsGabarit) {
  const z = zones[zone];
  const chemin = useChemin();
  return (
    <>
      <header className="wf-entete">
        <Link className="wf-logo" to={chemin(z.accueil)}>LOGO</Link>
        {z.utilitaire.length > 0 && (
          <nav aria-label="Liens utilitaires">
            <ul className="wf-actions">
              {z.utilitaire.map((e) => (
                <li key={e.libelle}><Link className="wf-lien" to={chemin(e.vers)}>{e.libelle}</Link></li>
              ))}
            </ul>
          </nav>
        )}
      </header>
      <nav
        className={`wf-nav-globale${z.navigationMobile === 'onglets' ? ' wf-nav-globale--onglets' : ''}`}
        aria-label="Navigation principale"
      >
        <ul>
          {z.navigationGlobale.map((e) => (
            <li key={e.libelle}>
              <Link to={chemin(e.vers)} aria-current={e.rubrique && e.rubrique === rubrique ? 'page' : undefined}>
                {e.libelle}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {ariane && ariane.length > 0 && (
        <nav className="wf-ariane" aria-label="Fil d'Ariane">
          <ol>
            {ariane.map((a, i) => (
              <li key={a.libelle}>
                {a.vers && i < ariane.length - 1
                  ? <Link to={chemin(a.vers)}>{a.libelle}</Link>
                  : <span aria-current="page">{a.libelle}</span>}
              </li>
            ))}
          </ol>
        </nav>
      )}
      <main>{children}</main>
      {z.pied.length > 0 && (
        <footer className="wf-pied">
          <ul>
            {z.pied.map((e) => (
              <li key={e.libelle}><Link to={chemin(e.vers)}>{e.libelle}</Link></li>
            ))}
          </ul>
        </footer>
      )}
    </>
  );
}

export function Bouton({ variante = 'secondaire', vers, etat, desactive, type = 'button', children }: PropsBouton) {
  const chemin = useChemin();
  const classe = `wf-btn${variante === 'principal' ? ' wf-btn--principal' : ''}`;
  if (vers && !desactive) return <Link className={classe} to={chemin(vers, etat)}>{children}</Link>;
  return <button className={classe} type={type} disabled={desactive}>{children}</button>;
}

export function Lien({ vers, etat, children }: PropsLien) {
  const chemin = useChemin();
  return <Link className="wf-lien" to={chemin(vers, etat)}>{children}</Link>;
}

export function Champ({ id, libelle, type = 'text', options, aide, erreur, valeur, obligatoire }: PropsChamp) {
  const decrit = [aide && `${id}-aide`, erreur && `${id}-erreur`].filter(Boolean).join(' ') || undefined;
  const commun = {
    id,
    'aria-describedby': decrit,
    'aria-invalid': erreur ? true : undefined,
    required: obligatoire,
  };
  const valeurInitiale = type === 'file' ? undefined : valeur;
  return (
    <div className={`wf-champ${erreur ? ' wf-champ--erreur' : ''}`}>
      <label htmlFor={id}>{libelle}{obligatoire && ' (obligatoire)'}</label>
      {aide && <span id={`${id}-aide`} className="wf-aide">{aide}</span>}
      {options ? (
        <select {...commun} defaultValue={valeurInitiale}>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : type === 'textarea' ? (
        <textarea {...commun} defaultValue={valeurInitiale} />
      ) : (
        <input {...commun} type={type} defaultValue={valeurInitiale} />
      )}
      {erreur && <span id={`${id}-erreur`}><strong>Erreur :</strong> {erreur}</span>}
    </div>
  );
}

export function Liste({ children }: AvecEnfants) {
  return <ul className="wf-liste">{children}</ul>;
}

export function Ligne({ children }: AvecEnfants) {
  return <li>{children}</li>;
}

export function Carte({ vers, etat, titre, children }: PropsCarte) {
  const chemin = useChemin();
  const contenu = <>{titre && <strong>{titre}</strong>}{children}</>;
  if (vers) return <Link className="wf-carte" to={chemin(vers, etat)}>{contenu}</Link>;
  return <div className="wf-carte">{contenu}</div>;
}

export function Bloc({ titre, niveau = 2, children }: PropsBloc) {
  const id = useId();
  const Titre = niveau === 2 ? 'h2' : 'h3';
  return (
    <section className="wf-bloc" aria-labelledby={titre ? id : undefined}>
      {titre && <Titre id={id}>{titre}</Titre>}
      {children}
    </section>
  );
}

const prefixes = { erreur: 'Erreur :', succes: 'Succès :', avertissement: 'Attention :', information: 'Information :' };

export function Alerte({ type, titre, children }: PropsAlerte) {
  return (
    <div className="wf-alerte" role={type === 'erreur' ? 'alert' : 'status'}>
      <p><strong>{prefixes[type]}</strong> {titre}</p>
      {children}
    </div>
  );
}

export function Etiquette({ children }: PropsEtiquette) {
  return <span className="wf-etiquette">{children}</span>;
}

export function Image({ alt }: PropsImage) {
  return alt
    ? <div className="wf-image" role="img" aria-label={alt} />
    : <div className="wf-image" aria-hidden="true" />;
}

export function Texte({ lignes = 3 }: PropsTexte) {
  return <div className="wf-texte" style={{ height: `${lignes * 1.5}em` }} aria-hidden="true" />;
}

export function Modale({ titre, fermerVers, children }: PropsModale) {
  const id = useId();
  const chemin = useChemin();
  return (
    <div className="wf-modale">
      <div role="dialog" aria-modal="true" aria-labelledby={id}>
        <h2 id={id}>{titre}</h2>
        {children}
        {fermerVers && <p><Link className="wf-lien" to={chemin(fermerVers)}>Fermer</Link></p>}
      </div>
    </div>
  );
}

export function Pile({ children }: AvecEnfants) {
  return <div className="wf-pile">{children}</div>;
}

export function Grille({ children }: AvecEnfants) {
  return <div className="wf-grille">{children}</div>;
}

export function Colonnes({ children }: AvecEnfants) {
  return <div className="wf-colonnes">{children}</div>;
}

export function Actions({ children }: AvecEnfants) {
  return <div className="wf-actions">{children}</div>;
}

export function Note({ n }: PropsNote) {
  return <span className="wf-note" data-note={n} aria-label={`Annotation ${n}`} />;
}

export function Mobile({ children }: AvecEnfants) {
  return <div className="wf-mobile">{children}</div>;
}

export function Ordinateur({ children }: AvecEnfants) {
  return <div className="wf-ordinateur">{children}</div>;
}

export const kit = {
  Gabarit, Bouton, Lien, Champ, Liste, Ligne, Carte, Bloc, Alerte, Etiquette, Image, Texte, Modale,
  Pile, Grille, Colonnes, Actions, Note, Mobile, Ordinateur,
} satisfies Kit;

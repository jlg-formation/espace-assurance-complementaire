import type { PropsAlerte } from '../../projet/ui';
import './Alerte.css';

const prefixes = { erreur: 'Erreur :', succes: 'Succès :', avertissement: 'Attention :', information: 'Information :' };

export function Alerte({ type, titre, children }: PropsAlerte) {
  return (
    <div className={`ds-alerte ds-alerte--${type}`} role={type === 'erreur' ? 'alert' : 'status'}>
      <p><strong>{prefixes[type]}</strong> {titre}</p>
      {children}
    </div>
  );
}

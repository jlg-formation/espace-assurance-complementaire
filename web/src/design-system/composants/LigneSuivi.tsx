// Composant nouveau : une démarche (devis, pièce, arrêt, soin) et son statut. Fusionne Ligne + Lien ou span + Etiquette des wireframes.
import type { ReactNode } from 'react';
import type { EcranId } from '../../projet/ecrans';
import type { PropsEtiquette } from '../../projet/ui';
import { Etiquette } from './Etiquette';
import { Lien } from './Lien';
import './LigneSuivi.css';

export type StatutSuivi =
  | 'En cours' | 'À fournir' | 'Réponse disponible' | 'Retardée' | 'Acceptée' | 'Refusée' | 'Terminée';

const tons: Record<StatutSuivi, NonNullable<PropsEtiquette['ton']>> = {
  'En cours': 'information',
  'À fournir': 'avertissement',
  'Réponse disponible': 'succes',
  Retardée: 'avertissement',
  Acceptée: 'succes',
  Refusée: 'erreur',
  Terminée: 'neutre',
};

export interface PropsLigneSuivi {
  statut: StatutSuivi;
  vers?: EcranId;
  etat?: string;
  detail?: ReactNode;
  children: ReactNode;
}

export function LigneSuivi({ statut, vers, etat, detail, children }: PropsLigneSuivi) {
  return (
    <li className="ds-ligne-suivi">
      <span className="ds-ligne-suivi__objet">
        {vers ? <Lien vers={vers} etat={etat}>{children}</Lien> : <span>{children}</span>}
        {detail && <span className="ds-ligne-suivi__detail">{detail}</span>}
      </span>
      <Etiquette ton={tons[statut]}>{statut}</Etiquette>
    </li>
  );
}

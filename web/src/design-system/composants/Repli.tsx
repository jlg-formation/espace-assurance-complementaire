// Composant nouveau : explication repliée, motif de EC02, EC32, EC33, EC48 (details/summary dans les wireframes).
import type { ReactNode } from 'react';
import './Repli.css';

export interface PropsRepli {
  titre: string;
  ouvert?: boolean;
  children?: ReactNode;
}

export function Repli({ titre, ouvert, children }: PropsRepli) {
  return (
    <details className="ds-repli" open={ouvert}>
      <summary>{titre}</summary>
      <div className="ds-repli__contenu">{children}</div>
    </details>
  );
}

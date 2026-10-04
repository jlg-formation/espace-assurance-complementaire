import type { PropsEtiquette } from '../../projet/ui';
import './Etiquette.css';

export function Etiquette({ ton = 'neutre', children }: PropsEtiquette) {
  return <span className={`ds-etiquette ds-etiquette--${ton}`}>{children}</span>;
}

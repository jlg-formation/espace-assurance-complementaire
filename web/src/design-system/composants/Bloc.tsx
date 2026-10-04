import { useId } from 'react';
import type { PropsBloc } from '../../projet/ui';
import './Bloc.css';

export function Bloc({ titre, niveau = 2, children }: PropsBloc) {
  const id = useId();
  const Titre = niveau === 2 ? 'h2' : 'h3';
  return (
    <section className="ds-bloc" aria-labelledby={titre ? id : undefined}>
      {titre && <Titre id={id}>{titre}</Titre>}
      {children}
    </section>
  );
}

// Composant nouveau : accès au rappel par un conseiller (EC51). Fusionne les 6 formulations des wireframes.
import { Lien } from './Lien';
import './RecoursHumain.css';

export interface PropsRecoursHumain {
  question?: string;
}

export function RecoursHumain({ question = "Besoin d'aide ?" }: PropsRecoursHumain) {
  return <p className="ds-recours">{question} <Lien vers="EC51">Être rappelé</Lien></p>;
}

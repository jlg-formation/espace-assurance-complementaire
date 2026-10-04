import type { PropsChamp } from '../../projet/ui';
import './Champ.css';

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
    <div className={`ds-champ${erreur ? ' ds-champ--erreur' : ''}`}>
      <label htmlFor={id}>{libelle}{obligatoire && ' (obligatoire)'}</label>
      {aide && <span id={`${id}-aide`} className="ds-champ__aide">{aide}</span>}
      {options ? (
        <select {...commun} defaultValue={valeurInitiale}>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : type === 'textarea' ? (
        <textarea {...commun} defaultValue={valeurInitiale} />
      ) : (
        <input {...commun} type={type} defaultValue={valeurInitiale} />
      )}
      {erreur && <span id={`${id}-erreur`} className="ds-champ__erreur"><strong>Erreur :</strong> {erreur}</span>}
    </div>
  );
}

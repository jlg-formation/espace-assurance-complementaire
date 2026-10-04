// Lecture du format W3C Design Tokens (DTCG) : copie conforme de l'asset du skill ux-07. Sans dépendance Node.
export interface Token {
  chemin: string;
  type?: string;
  valeur: unknown;
  description?: string;
}

type Noeud = Record<string, unknown>;

const ALIAS = /^\{([^}]+)\}$/;

export function aplatir(arbre: Noeud, prefixe: string[] = [], typeParent?: string): Token[] {
  const type = (arbre.$type as string | undefined) ?? typeParent;
  if ('$value' in arbre) {
    return [{ chemin: prefixe.join('.'), type, valeur: arbre.$value, description: arbre.$description as string | undefined }];
  }
  return Object.entries(arbre)
    .filter(([cle]) => !cle.startsWith('$'))
    .flatMap(([cle, enfant]) => aplatir(enfant as Noeud, [...prefixe, cle], type));
}

export function alias(valeur: unknown): string | undefined {
  return typeof valeur === 'string' ? valeur.match(ALIAS)?.[1] : undefined;
}

export function nomCss(chemin: string): string {
  return `--ds-${chemin.replace(/\./g, '-')}`;
}

export function valeurCss(token: Token): string {
  const cible = alias(token.valeur);
  if (cible) return `var(${nomCss(cible)})`;
  if (Array.isArray(token.valeur)) {
    return token.valeur.map((police: string) => (police.includes(' ') ? `"${police}"` : police)).join(', ');
  }
  return String(token.valeur);
}

export function verifierAlias(tokens: Token[]): string[] {
  const chemins = new Set(tokens.map((t) => t.chemin));
  return tokens
    .filter((t) => alias(t.valeur) && !chemins.has(alias(t.valeur)!))
    .map((t) => `${t.chemin} → {${alias(t.valeur)}} introuvable`);
}

export function resoudre(tokens: Token[], chemin: string): unknown {
  const parChemin = new Map(tokens.map((t) => [t.chemin, t]));
  let token = parChemin.get(chemin);
  for (let i = 0; token && alias(token.valeur) && i < 20; i++) token = parChemin.get(alias(token.valeur)!);
  if (!token) throw new Error(`Token introuvable : ${chemin}`);
  return token.valeur;
}

export function genererCss(tokens: Token[]): string {
  const lignes = tokens.map((t) => `  ${nomCss(t.chemin)}: ${valeurCss(t)};`);
  return [
    '/* Généré par `bun run tokens` depuis tokens.json. Ne pas modifier à la main. */',
    ':root {',
    ...lignes,
    '}',
    '',
  ].join('\n');
}

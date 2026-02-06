import styles from './Tag.module.css'
import classNames from 'classnames';


/* export type TagValue = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos" | "2D" | "3D"; */

const tagClasses = {
  Livre: styles.livre,
  "10 anos": styles.dez,
  "12 anos": styles.doze,
  "14 anos": styles.catorze,
  "16 anos": styles.dezesseis,
  "2D": styles.doisD,
  "3D": styles.tresD,
};
// types.ts ou no topo do arquivo da Tag
export interface TagProps {
  value: string; // Ou use os tipos Categoria | Censura que você criou
}

export const Tag = ({ value }: TagProps) => {
  // Verificamos se 'value' existe antes de buscar no objeto de classes
  const tagClass = tagClasses[value as keyof typeof tagClasses] || '';
  const classes = classNames(styles.tag, tagClass);

  return (
    <span className={classes}>
      {value}
    </span>
  );
}
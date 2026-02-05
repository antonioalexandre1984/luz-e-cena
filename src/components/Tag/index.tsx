import React from 'react'
import styles from './Tag.module.css'
import classNames from 'classnames';

/* export type TagValue = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos" | "2D" | "3D"; */

type Categoria = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos"

type Censura = "2D" | "3D" 

interface TagProps {
  value: Categoria | Censura; 
}

export interface TagPropsState {
    value: TagProps;
}

const tagClasses = {
  Livre: styles.livre,
  "10 anos": styles.dez,
  "12 anos": styles.doze,
  "14 anos": styles.catorze,
  "16 anos": styles.dezesseis,
  "2D": styles.doisD,
  "3D": styles.tresD,
};
export const Tag = ({ value }: TagPropsState) => {
  const classes = classNames(styles.tag, tagClasses[value.value]);
  return (
    <span className={classes}>
      {value.value}
    </span>
  );
}



import React from 'react'
import styles from './InputText.module.css'


export const InputText = ({...props}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
  <input {...props} className={styles.input}/>
  )
}

import React from 'react'
import styles from '../Header.module.css'


export const HeaderList = ({...rest}: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={styles.cabecalho}{...rest}>
   {/*    {children} */}
    </ul>
  )
}

import React from 'react'
import styles from '../Header.module.css'

// No need for a custom interface, use React.HTMLAttributes<HTMLLIElement> directly

export const HeaderItem = ({...rest}: React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={styles.menuitem}{...rest}>
  {/*     {children} */}
    </li>
  )
}

import React from 'react'
import styles from './Link.module.css'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
}
export const Link = ({children,...rest}:LinkProps) => {
  return (
    <a className={styles.link}{...rest}>
      {children}
    </a>
  )
}

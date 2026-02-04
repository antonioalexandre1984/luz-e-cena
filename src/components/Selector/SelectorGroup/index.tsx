import React from 'react'
import styles from './SelectorGroup.module.css'

interface SelectorGroupProps extends React.HTMLAttributes<HTMLSelectElement> {
    children: React.ReactNode
    icon?: React.ReactNode
}
export const SelectorGroup = ({/* children, */icon,...rest}:SelectorGroupProps) => {
  return (
    <div className={styles.container}>
      {icon && <div className={styles.icone}>{icon}</div>}
        <select className={styles.selector} {...rest}>
          {/*   {children} */}
        </select>
    </div>
  )
}

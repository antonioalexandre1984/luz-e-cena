import React from 'react'
import styles from './Button.module.css'
import classNames from 'classnames'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
    variant?: "default" | "icon" | string
}

export const Button = ({children,variant="default",...rest}:ButtonProps) => {
    const classMap = {
        default: styles.default,
        icon: styles.icon,
    }
  return (
    <button
      className={classNames(
        styles.botao,
        classMap[variant as "default" | "icon"] || styles.default
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

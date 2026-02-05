import styles from './FieldSet.module.css'

interface FieldSetProps {
    variant: "primary" | "secondary"
    children: React.ReactNode
}
export const FieldSet = ({variant="primary",children}:FieldSetProps) => {
  return (
    <fieldset className={`${styles.inputWrapper} ${variant === "primary" ? styles.primary : styles.secondary}`}>
      {children}
    </fieldset>
  )
}

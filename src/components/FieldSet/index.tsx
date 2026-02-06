import styles from './FieldSet.module.css'

interface FieldSetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement>{
    variant: "primary" | "secondary"
}
export const FieldSet = ({variant="primary",children}:FieldSetProps) => {
  return (
    <fieldset className={`${styles.inputWrapper} ${variant === "primary" ? styles.primary : styles.secondary}`}>
      {children}
    </fieldset>
  )
}

import React from 'react'

interface SelectorOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement>{
 value: string
 label: string   
}

export const SelectorOption = ({value,label,...rest}:SelectorOptionProps) => {
  return (
    <option value={value} {...rest}>
      {label}
    </option>
  )
}

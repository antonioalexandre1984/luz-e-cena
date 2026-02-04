import React from 'react'
import { Link } from '../../Link'


interface MenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode
    href?: string
}
export const MenuItem = ({children,href='#',...props}:MenuItemProps) => {
  return (
    <li {...props}>
        <Link href={href}>{children}</Link>
          </li>
  )
}

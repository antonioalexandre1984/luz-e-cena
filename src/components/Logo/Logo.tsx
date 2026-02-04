import React from 'react'

export const Logo = ({...props}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <div>
      <img {...props}/>
    </div>
  )
}



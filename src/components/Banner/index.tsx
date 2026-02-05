import React from 'react'
import styles from './Banner.module.css'

interface BannerProps extends React.ImgHTMLAttributes<HTMLImageElement>{
    src: string;
    alt: string;

}
export const Banner = ({src,alt,...props}:BannerProps) => {
  return (
    <img src={src} alt={alt} {...props}className={styles.Banner}/>
  )
}
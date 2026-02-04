import React from 'react'
import styles from './Banner.module.css'

interface BannerProps{
    src: string;
    alt: string;

}
export const Banner = ({src,alt}:BannerProps) => {
  return (
    <img src={src} alt={alt} className={styles.Banner}/>
  )
}
 import { Banner } from "./components/Banner"
import banner from '../public/Imagens/Banner principal/Banner Desktop.png' 

import { Header } from "./components/Header"

import { MovieSection } from "./components/MovieSection"


export function App() {

  return (
    <>
    <Header/>
    <Banner
      src={banner}
      alt="descrição do banner"
     /> 
     <MovieSection/>
    </>
     
    
  )
}

export default App

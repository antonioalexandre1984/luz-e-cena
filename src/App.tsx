 import { Banner } from "./components/Banner"
import banner from '../public/Imagens/Banner principal/Banner Desktop.png' 
import BannerPromo from '../public/Imagens/Banner combo pipoca/Banner combo desktop.png'
import { Header } from "./components/Header"
import { NewsLetter } from "./components/NewsLetter"
import { MovieSection } from "./components/MovieSection"
import { Footer } from "./components/Footer"


export function App() {

  return (
    <>
    <Header/>
    <Banner
      src={banner}
      alt="descrição do banner"
     /> 
     <MovieSection/>
     <Banner
      src={BannerPromo}
      alt="descrição do banner"
     />
     <NewsLetter/>
     <Footer/>
    </>
  )
}

export default App

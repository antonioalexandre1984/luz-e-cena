 import { Banner } from "./components/Banner"
import banner from '../public/Imagens/Banner principal/Banner Desktop.png' 
import { Link } from "./components/Link"
import { Header } from "./components/Header"


export function App() {

  return (
    <>
    <Header/>
 <Banner
      src={banner}
      alt="descrição do banner"
     /> 
     <Link
      href="/"
      target="_blank"
     >
        Entrar
     </Link>
    </>
     
    
  )
}

export default App

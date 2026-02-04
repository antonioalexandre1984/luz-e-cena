
import { FaLocationDot } from 'react-icons/fa6'
import { SelectorGroup } from '../../Selector/SelectorGroup'
import { SelectorOption } from '../../Selector/SelectorOption'

const cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador", "Curitiba", "Porto Alegre"]
export const HeaderFormFilter = () => {
  return (
    <form>
        <SelectorGroup id="cidade" icon={<FaLocationDot/>}>
            <SelectorOption value="" label="Selecione uma cidade"/>
            {cidades.map((cidade) => (
                <SelectorOption key={cidade} value={cidade} label={cidade} />
            ))}
            </SelectorGroup> 
            
             </form>
  )
}


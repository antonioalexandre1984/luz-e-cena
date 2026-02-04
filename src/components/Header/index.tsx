import { Logo } from "../Logo/Logo";
import { HeaderItem } from "./components/HeaderItem";
import { HeaderList } from "./components/HeaderLIst";
import { HeaderLinks } from "./components/HeaderLInks";
import { HeaderFormFilter } from "./components/HeaderFormFilter";
import { HeaderActions } from "./components/HeaderActions";
import logo from '../../../public/Logo e Favicon/Logo.svg' 

export const Header = () => {
  return (
    <header>
      <HeaderList>
        <HeaderItem>
          <Logo src={logo} />
        </HeaderItem>
        <HeaderItem>
          <HeaderLinks />
        </HeaderItem>
        <HeaderItem>
          <HeaderFormFilter />
        </HeaderItem>
        <HeaderItem>
          <HeaderActions />
        </HeaderItem>
      </HeaderList>
    </header>
  );
};

import {
Container,
Content,
ImageLogo,

} from './style'

import logoSvg from '../../assets/icons/logo.svg';

export function Header(){
return (

<Container>

     <Content>
        <ImageLogo src={logoSvg}  alt="Exercíco_02"  />
        <button>
             <img src='https://github.com/CharlyesRodrigues.png'/>
        </button>
     </Content>
</Container>

);


}
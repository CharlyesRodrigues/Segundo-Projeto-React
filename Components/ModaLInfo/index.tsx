
import Modal from 'react-modal';
import { UserData } from '../../Types';
import {
 
 ImageUser,
 InfoUserContainer,
 Containers,

} from './styles';


import {X} from 'phosphor-react';
import {Container} from '../Header/style';

interface UserInfoModalProps{

    isOpen: boolean;
    onRequestClose: ()=> void;
    userSelected: UserData | undefined;



}

export function ModalInfo({isOpen, onRequestClose, userSelected }: UserInfoModalProps) {

return(
<Modal

/* Ele começou com esse comando depois trocou isOpen={false} , onRequestClose={() => {}}*/
isOpen={isOpen}
onRequestClose={onRequestClose}
overlayClassName="react-modal-overlay"
className="react-modal-content"
ariaHideApp={false}
contentLabel="Informações do usuário selecionado" // esse comondo serve para melhorar a acessibilidade

>
<button type="button" onClick={onRequestClose} className="react-modal-close">
< X size={24} color="#A8A8B3" weight="bold" />

</button>
  <Containers>
     <ImageUser>

     <img src={userSelected?.picture.medium}/>

     </ImageUser>
       <InfoUserContainer>
       
       <p><strong>Nome:</strong> {`${userSelected?.name.first} ${userSelected?.name.last}`}</p>
       <p><strong>E-mail:</strong> {userSelected?.email}</p>
       <p><strong>Celular:</strong> {userSelected?.cell}</p>
       <p><strong>Idade:</strong> {userSelected?.dob.age}</p>
          


       </InfoUserContainer>
        
  </Containers>



</Modal>

);



}
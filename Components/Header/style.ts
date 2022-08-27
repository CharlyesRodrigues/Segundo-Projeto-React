import styled from "styled-components";

export const Container = styled.div`
background: var(--dark-400)

`;
export const Content = styled.div`
max-widht: 1440px;
margin: 0 auto;

padding: 1em 5rem;
display: flex;
align-items: center;
justify-content: space-between;

button {

border: 0;
border-radius: 50%;
overflow: hidden;
width : 3rem;
height: 3rem;
background: var(--dark-300);
display-flex;
justify-content: center;
display: flex;
align-items: center;
transition: filter 0.2s;

  &:hover{
  filter: brightness(1.2);

  }
  img{

    width: 2.85rem;
    height: 2.85rem;
    border-radius: 50%;
        
  }

}

`;
export const ImageLogo = styled.img`
padding: 1px 4px;
background: var(--dark-300);
border-radius: 16px;
width: 3rem;
height: 3rem;
`;
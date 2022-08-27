import styled from "styled-components"

export const Container = styled.div` 
height: 100vh;


`;


export const Content = styled.div`
max-width: 1440px;
margin: 0 auto;

padding: 1rem 5rem;

h1{
  
 font-weight: 600; 
 font-size: 1.8rem;
 line-height: 2.1rem;
 color: var(--white);
 margin-top 2.5rem;
 
 display: flex;
 justify-content: center;

 padding: 1rem 5rem;
}

`;


export const FilterForm = styled.form`



justify-content: space-between;
display: flex;
align-items: center;

margin: 2.0 rem 0 0 0;
margin-left: 300px;

div{
   display: flex;
   flex-direction: column;
    width: 48%;
    

label{
  width: 150px;
font-weight: 600;
font-size: 1rem;
line-height: 1.3rem;
color: var(--grey-300);

}

input, select{


background: var(--dark-400);
border-radius: 8px;
margin-top: 8px;
border: none;
padding: 0.7rem 0.2rem;
width: 96%;
color: var(--white-600);
font-size: 1 rem;

&::placeholder{
color: var(--white-600);

   }

  }

}

`;

export const TableContent = styled.table`

margin-top: 2rem;
background: var(--dark-400);
border-radius: 8px;
padding: 1.6rem  3.0rem;
width:100%;

thead{
  
 
    th{
      
      text-align: initial;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.3rem;
      color: var(--grey-400);
      
  }

}

tbody{
  td{
    border-top: 1px solid  rgba(161, 161, 170, 0.3);
    font-weight: 500;    
    font-size: 1rem;
    line-height: 1.6rem;
    color: var(--white-400);
    padding: 0.75rem 0;
    
  }
   button{
   
    border-radius: 4px;
    border-color: var(--white);
    justify-content: space-between;
    font-weight: 600;       
    font-size: 1.1rem;
    line-height: 1.3rem;
  

   }
  

}



`;




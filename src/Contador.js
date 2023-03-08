import styled from 'styled-components';
 

export default function Contador(props, contPergunta){


return (

<Footer data-test="footer">
    
    <h1> {props.contPergunta}/{props.totalPerguntas} Conclúidas</h1> 

</Footer>
 
)

}

const Footer = styled.div `

display: flex;
width: 100%;
height: 70px;
background-color: white;
position: fixed;
bottom: 0;
color: black;
font-family: 'Recursive';
font-style: normal;
font-size: 18px;
align-items: center;
justify-content: center;
margin-top: 50px;

`

 
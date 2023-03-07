import logo from "./assets/logo.png"
import styled from 'styled-components';
import Cards from "./Cards.js"
// import cards from "./Cards.js"

const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

export default function App() {

  let total = cards.length;

  return (
    <Container>
      <Titulo>
      <Logo src={logo} alt="logo"   />
      <h1> ZappRecall</h1>
      </Titulo>  
      
      {cards.map((card, index) => <Cards 
      total = {total} card = {card} numeroPergunta = {index+1} key={index}/>)}
    
      </Container>
  );
}

const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
background-color: #FB6B6B;
width: 450px;
height: 667px;
overflow : auto;

`;

const Titulo=styled.div `

  display: flex;
  width: 667px;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  
  h1{ 

  padding-left: 15px;
  width: 203.17px;
  height: 44px;
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400px;
  font-size: 36px;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: #ffffff;

  }
 
`

const Logo = styled.img `

width: 52px;
height: 60px;

`

 
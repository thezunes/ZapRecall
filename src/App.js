import logo from "./assets/logo.png"
import styled from 'styled-components';
import mock from "./mock.js"
import Contador from "./Contador.js"
import Cards from "./Cards.js"


export default function App() {

function teste(){

alert("FUNCIONA")
console.log("chegou")
 

}



  return (
    <Container>
      <Titulo>
      <Logo src={logo} alt="logo" onClick={teste} />
      <h1> ZappRecall</h1>
      </Titulo>  
      <Cards/>
      <Contador/>

      </Container>
  );
}

const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
background-color: #FB6B6B;
width: 375px;
height: 667px;

`;


const Titulo=styled.div `

  display: flex;
  width: 667px;
  height: 100px;
  align-items: center;
  justify-content: center;
  
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

 
import logo from "./assets/logo.png"
import seta_play from "./assets/seta_play.png"
import styled from 'styled-components';
import mock from "./mock.js"



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
      <Card>
        <h1> Pergunta 1 </h1>
        <img src={seta_play} alt="play" />

      </Card>
      <Card>
        <h1> Pergunta 2 </h1>
        <img src={seta_play} alt="play" />

      </Card>
      <Card>
        <h1> Pergunta 3 </h1>
        <img src={seta_play} alt="play" />

      </Card>
      <Card>
        <h1> Pergunta 4 </h1>
        <img src={seta_play} alt="play" />

      </Card>


    <Footer>
      
     <h1> 0/4 concluídos </h1> 
      
       </Footer>

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


const Card = styled.div `



display: flex;
align-items: center;
justify-content: space-between;
background-color: #ffffff;
width: 300px;
height: 65px;
background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin-top: 26px;


h1 {
  height: 19px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  margin-left: 16px;
}

img {
  
  padding-right: 20px;

}


`

const Footer = styled.div `

display: flex;
width: 375px;
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

`


const Logo = styled.img `

width: 52px;
height: 60px;

`

 
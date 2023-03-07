import styled from 'styled-components';
import seta_play from "./assets/seta_play.png"
import seta_virar from "./assets/seta_virar.png"
import React, { useState } from "react";
import Contador from "./Contador.js"
import contar from "./Contador.js"
 
let contabilizar = 0;

export default function Cards(props) {

const [inicio, setInicio] = useState(false)
const [pergunta, setPergunta] = useState(false)
const [respondido, setRespondido] = useState(true)
const totalPerguntas = props.total;
 
function perguntar(){

if(respondido){
setInicio(true)
setRespondido(false)
}

}

function resposta(){

setPergunta(true)

}

function fim(){

setInicio(false)
contabilizar = contabilizar + 1;
alert (contabilizar)
contar()
 
}

return (


<>
<Deck>


  {!inicio ?
    <Card>
    <h1 data-test="flashcard-text"> Pergunta {props.numeroPergunta} </h1>
    <img data-test="play-btn" onClick={perguntar} src={seta_play} alt="play" />
    </Card> : (!pergunta ? <Question>     
    <h1 data-test="flashcard-text">{props.card.question}</h1>
    <img data-test="turn-btn" alt="seta de virar" onClick={resposta} src={seta_virar}/>
    </Question> : <Question> 

    <h1 data-test="flashcard-text">{props.card.answer}</h1>
    <Botoes>

    <Botao1  onClick={fim}> Não lembrei </Botao1>
    <Botao2 onClick={fim}> Quase não lembrei </Botao2>
    <Botao3 onClick={fim}> Zap! </Botao3>
    
    </Botoes>  
    </Question>) 
     }

</Deck>

<Contador  totalPerguntas = {totalPerguntas} contabilizar = {contabilizar}/>
 </>

);

}

const Deck = styled.div `

display:flex; 
justify-content:


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

const Pergunta = styled.div `

display: flex;
position: absolute;
width: 299px;
height: 131px;
background-color: #ffffff;

`
const Question = styled.div `

  width: 299px;
  height: 131px;
  background-color: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  margin-bottom: 20px;
  margin-top: 20px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;

  

  h1 {

  margin-left: 16px;
  margin-top: 16px;
  }

  img { 
    width: 30px;
    height: 20px;
    margin-left: 260px;
    margin-bottom: 6px;
  

  }

`

const Botoes = styled.div `

display: flex;
justify-content: space-between;
margin-left: 16px;
margin-right: 16px;
margin-bottom: 8px;


button {
   
  }


}


`


const Botao1 = styled.button `
width: 247.83px;
  width: 65.04px;
  height: 37.17px;
  height: 44px;
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: white;
  width: 86px;
  font-size: 12px;
  background-color:#FF3030; 

`

const Botao2 = styled.button `
width: 247.83px;
  width: 65.04px;
  height: 37.17px;
  height: 44px;
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: white;
  width: 86px;
  font-size: 12px;
  background-color:#FF922E; 

`

const Botao3 = styled.button `

width: 247.83px;
  width: 65.04px;
  height: 37.17px;
  height: 44px;
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: white;
  width: 86px;
  font-size: 12px;
  background-color:#2FBE34; 
`


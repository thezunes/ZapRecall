import styled from 'styled-components';
import seta_play from "./assets/seta_play.png"



export default function Cards(props) {


// const cards = cards.map((c)=>{ <p>`${c.question}</p>})


return (



<Deck>
    <Card>
    <h1> Pergunta {props.numeroPergunta} </h1>
    <img src={seta_play} alt="play" />
    </Card>
</Deck>
)

}

const Deck = styled.div `

// overflow: auto;

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
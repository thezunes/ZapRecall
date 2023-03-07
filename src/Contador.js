import styled from 'styled-components';
import React, { useState } from "react";


export default function Contador(contabilizar){

const [cont, setCont] = useState(0)

function contador(){

setCont(contabilizar)


}

return (

<Footer>
      
    <h1> {cont}/8 concluídos </h1> 
       
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
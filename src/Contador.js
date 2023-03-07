import styled from 'styled-components';
import React, { useState } from "react";


export default function Contador(){

const [cont, setCont] = useState(0)

return (

<Footer>
      
    <h1> {cont}/8 concluídos </h1> 
       
</Footer>
 

)

}

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
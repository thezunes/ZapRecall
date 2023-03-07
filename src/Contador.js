import styled from 'styled-components';
import React, { useState } from "react";


export default function Contador(props){


return (

<Footer data-test="footer">
    
    <h1> {props.cont}/{props.totalPerguntas} Conclúidas</h1> 
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

 
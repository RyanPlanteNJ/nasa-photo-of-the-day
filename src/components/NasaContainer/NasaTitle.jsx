import React from 'react';
import styled from 'styled-components'

const Title = styled.h3`
    padding-top: 20px;

`;


export default function NasaTitle(props) {
    return <Title>{props.title}</Title>;
   }
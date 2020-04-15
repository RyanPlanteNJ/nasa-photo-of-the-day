import React from 'react';
import styled from 'styled-components';

const Explain = styled.p`
    text-align: left;
    font-size: 20px;
    line-height: 3rem;
    margin-top: 20px;
`



export default function NasaExplain(props) {
    return (
    <Explain>{props.explain}</Explain>
    );
    
}
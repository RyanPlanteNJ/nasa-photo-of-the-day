import React from 'react'
import styled from 'styled-components'


const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoImage = styled.img`
    justify-content: 

`

export default function NasaHeader() {
    return (
        <LogoContainer>
            <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt ="Nasa Logo"/>
            <h1>Photo of the Day </h1>
        </LogoContainer>
    )
}
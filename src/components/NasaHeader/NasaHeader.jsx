import React from 'react'
import styled from 'styled-components'


const LogoContainer = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
`;


export default function NasaHeader() {
    return (
        <LogoContainer>
            <a href="https://nasa.gov"><img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt ="Nasa Logo"/></a>
            <h1>Photo of the Day </h1>
        </LogoContainer>
    )
}
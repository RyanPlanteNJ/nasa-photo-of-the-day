import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
    width: 100%;    
`;

const ImageSize = styled.img`
    width: 100%;
`;

export default function NasaImage(props) {
    const { image } = props;
    return (
        <ImageContainer>
            <ImageSize src={image.url} alt={image.desc} />
        </ImageContainer>
    );
}

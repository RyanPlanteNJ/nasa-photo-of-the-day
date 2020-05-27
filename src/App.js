import React from 'react';
import styled from 'styled-components';
import "./App.css";
import NasaHeader from './components/NasaHeader/NasaHeader';
import NasaContainer from './components/NasaContainer/NasaContainer';

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
  padding: 30px;
  text-align: center;
`;

function App() {
  return (
    <Container>
      <NasaHeader />
      <NasaContainer />
    </Container>
  );
}

export default App;

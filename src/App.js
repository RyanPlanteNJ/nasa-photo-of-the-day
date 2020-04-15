import React from 'react';
import "./App.css";
import NasaHeader from './components/NasaHeader/NasaHeader'
import NasaContainer from './components/NasaContainer/NasaContainer'


function App() {
  return (
    <div className="App">
      <NasaHeader />
      <NasaContainer />
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
    </div>
  );
}

export default App;

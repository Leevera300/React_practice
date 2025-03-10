import { useState } from 'react';
import CoreConcepts from './components/CoreConcepts';
import Header from "./components/Header/Header";
import Examples from './components/Examples';
import { EXAMPLES } from './data';

function App() {
  

  return (
    <>
      <Header />
      <main>
       <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;

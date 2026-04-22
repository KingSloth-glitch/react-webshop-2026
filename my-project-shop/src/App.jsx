import { useState } from 'react';
import SearchEngine from './SearchEngine';
import Header from './Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <h1>Välkommen till vår butik!</h1>
      <div>
        <SearchEngine />
      </div>
    </>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import MonsterList from "./components/MonsterList"

function App() {

  return (
    <div className="App">
      <div>
        <PartyInput />
        <ResultPreview />
      </div>

      <MonsterStatistics />
    </div>
  );
}

export default App;

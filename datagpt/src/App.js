import './App.css';
import { DataLoader } from './components/DataLoader';
import React from 'react'

function App() {
  const [text, setText] = React.useState('')
  return (
    <div className="App">
      <div className="App-header"> 
        <h1>
          DataGPT
        </h1> 
      </div>
      <DataLoader />
    </div>
  );
}

export default App;

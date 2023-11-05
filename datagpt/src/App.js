import './App.css';
import { DataLoader } from './components/DataLoader';
import { TextInput } from './components/TextInput';
import React from 'react';

function App() {
  const [input, setInput] = React.useState('');
  return (
    <div className="App">
      <div className="App-header"> 
        <h1>
          DataGPT
        </h1> 
      </div>
      <TextInput input={input} onInputUpdate={(newInput) => {
        setInput(newInput);
        console.log(input)
      }}/>
      <DataLoader />
    </div>
  );
}

export default App;

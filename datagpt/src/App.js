import './App.css';
import { DataLoader } from './components/DataLoader';
import { TextInput } from './components/TextInput';
import React from 'react';
import {Helmet} from 'react-helmet';

function App() {
  const [input, setInput] = React.useState('');
  return (
    <div className="App">
      <Helmet
        bodyAttributes={{style: 'background-color : #0a192f'}}
      />
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

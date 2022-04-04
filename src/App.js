import { useState } from 'react';
import './App.css';
import Dropdown from './components/dropdown';

function App() {
  const {picked, setPicked} = useState("Click here");
  return (
    <div className="App">
      <Dropdown picked={picked} setPicked={setPicked}/>
      </div>
  );
}

export default App;

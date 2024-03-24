import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let[Data,setData] = useState(null)
  let[print , setPrint] = useState(null)
  
  function Update(ev){
    console.warn(ev.target.value);
    setData(ev.target.value)
  }
  return (
    <div className="App">
        <h2>Enter anything Here...</h2>
        {
            print ? <h4>{Data}</h4> : null
        }
        <input type="text" placeholder="" onChange={Update}></input>

        <button onClick={()=>setPrint(true)} style={{margin:'5px'}}>Click me</button>
    </div>
  );
}

export default App;

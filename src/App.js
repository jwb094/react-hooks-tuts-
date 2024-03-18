import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


 export default() => {
        //variable , function
  //const [age,setAge]=  useState(21);
  const [age,setAge]=  useState(21);
  const [name,setName]=  useState('Peter');


  return (
      <div className="App">
      <header className="App-header">
        <div>
          <p>
            Name: <input type="text" name="" id="" value={name}
            onChange={ e => setName(e.target.value)}></input>
          </p>
          <p>            Age:{age}          </p>
          <button onClick={() => setAge(age + 1)}>Increment Age</button>
        
        <p>State: Age:{age},name :{name} </p>
        </div>
      </header>
    </div>
  )
  
 } 







// export default App;

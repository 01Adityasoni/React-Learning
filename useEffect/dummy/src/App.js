import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const[text , setText] = useState(''); 
  const[name , setName] = useState('Aditya');

// variation 1 => every render
 // useEffect(()=>{
   // console.log('useEffect called');
  // });

  // variation 2 => only first render
 // useEffect(()=>{
   //  console.log('useEffect called');
  // },[]);

   // variation 3 =>    whenever dependency changes when text changes
  useEffect(()=>{
     console.log('useEffect called');
   },[name]);
    
// variation 4 => to handle unmounting of a component , cleaning up 
//useEffect( ()=> {
  //console.log("listner added ");

  //return () => {
    //console.log("listner removed")
  //}

//},[text]);

  function changeHandler(event){ 
    console.log(text);
    setText(event.target.value);
  }
  return (
    <div className="App">
     <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;

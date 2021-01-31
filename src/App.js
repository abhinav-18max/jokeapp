import React, {useEffect, useState} from'react';
import './App.css';
import { Component} from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';


function App (){
  

 const [myArray, updateMyArray] = useState([]);
      var click=()=>{
      for(var i =0; i<10; i++){ 
           fetchData();
      }
      }
      var fetchData = async ()=> {
      const result = await axios.get('https://api.chucknorris.io/jokes/random');
      
      updateMyArray( arr => [...arr, `${result.data.value}`]);
   }
  

 
 return(
   <>
   
   <div className="return">
     
   <button onClick={click} className="btn"><h1>jokes</h1></button>
   </div>
   <div>{myArray.map( e =>
    <div className="list">{ e }</div>
      )}
  </div>
 
  
   </>
  );
 }


export default App;

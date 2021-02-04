import React, {useEffect, useState} from'react';

import { Component} from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

function App (){
  const [theme, setTheme] = useState('light');


const toggleTheme = () => {

  if (theme === 'light') {
    setTheme('dark');
  
  } else {
    setTheme('light');
  }
}

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
  <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
   <>
   <GlobalStyles />
   <div className="return">
   <div className="btn">
   <button onClick={toggleTheme}>Toggle theme</button>
   </div>
  <div className="btn"><button onClick={click} >Jokes</button></div>
   
   
   <div>{myArray.map( e =>
    <div className="list">{ e }</div>
      )}
  </div>
  </div>
  
   </>
   </ThemeProvider>
  );
 }


export default App;

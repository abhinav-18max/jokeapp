import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  .return  {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  .list{
    background-color:${({ theme }) => theme.body};
    color:${({ theme }) => theme.text} ;
    position: relative;
    margin:100px,auto ;
    padding:10px;
    margin-left: 25%;
    margin-right:25%;
    margin-bottom: 5px;
    border-radius: 10px;
    margin-top: 5px;
    
  }
  button.btn{
    background-color: ${({ theme }) => theme.body};
    position: absolute;
    color:${({ theme }) => theme.text} ;
    right:25px;
    top:25px;
    margin:100px,auto ;
    padding:0px;
    width:30px;
    height:30px;
    box-shadow: 5px 5px #968f8f;
    font-family: 'Times New Roman', Times, serif;
    margin-top: 10px;
    width:100px;
    height:100px;
  }
  button.btn1{
    background-color: ${({ theme }) => theme.body};
    position: absolute;
    color:${({ theme }) => theme.text} ;
    left:25px;
    top:25px;
    margin:100px,auto ;
    padding:0px;
    width:100px;
    height:100px;
    box-shadow: 5px 5px #968f8f;
    font-family: 'Times New Roman', Times, serif;
    margin-top: 10px;
  
  `;

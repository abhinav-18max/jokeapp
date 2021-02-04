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
  .btn{
    background-color: ${({ theme }) => theme.body};
    position: relative;
    color:${({ theme }) => theme.text} ;
    
    margin:100px,auto ;
    padding:100px;
    margin-left: 50%;
    box-shadow: 5px 5px #968f8f;
    font-family: 'Times New Roman', Times, serif;
    margin-top: 10px;
    
  }
  
  `;

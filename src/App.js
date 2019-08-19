import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>

        <img src={logo} className='App-logo' alt='logo' />

        <div className='melissa-custom-style'>
          <p className='first-p' >
          Melissa IS magnificent!!
          </p>
          <p className='second-p' >
            Um, hahahaha! Oshawott used water gun! Hehehehe.  Buhahaha!  ...hehehe.  he.  Stop it!
          </p>
        </div>

        <a className='App-link' href='https://www.netflix.com/' target='_blank' rel='noopener noreferrer' >
          Netflix
        </a>
        <a className='App-link' href='https://www.victoriaaveyard.com/' target='_blank' rel='noopener noreferrer' >
        My homie Victoria
        </a>
        <a className='App-link' href='https://www.codecademy.com/' target='_blank' rel='noopener noreferrer' >
          Learn to code
        </a>
        <a className='App-link' href='https://www.freecodecamp.org/' target='_blank' rel='noopener noreferrer' >
          Keep learning to code
        </a>
      </header>
    </div>
  );
}

export default App;

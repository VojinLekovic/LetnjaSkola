import React from 'react';
import './App.css';
import Joke from './components/ChuckNorris';

function App() {
  return (
    <div className='App'>
      <header className='App-Header'>
        <h1>Chuck Norris Jokes</h1>
        <Joke />
      </header>
    </div>
  );
};

export default App;

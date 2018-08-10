import React from 'react';
import './App.css';
import Display from './components/Display';

class App extends React.Component {
  render() {
    return (
      <div id="drum-machine">
        <Display />
      </div>
    );
  }
}

export default App;

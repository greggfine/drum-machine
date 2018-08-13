import React from 'react';
import './App.css';
import Display from './components/Display';

class App extends React.Component {
	constructor(props){
		super(props)

		this.state={
			shoe: 'gold'
		}
	}

	hello(){
		console.log('hi')
	}

  render() {
    return (
      <div id="drum-machine">
        <Display />
      </div>
    );
  }
}

export default App;

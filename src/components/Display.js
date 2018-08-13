import React from 'react';
import DrumPad from './DrumPad';
import sounds from './Sounds';

class Display extends React.Component {
  constructor(){
  	super();

  	this.state={
  			sounds
  	}
  }

  render() {

    return (
        <DrumPad 
          sounds={ this.state.sounds }
        />
    );
  }
}

export default Display;
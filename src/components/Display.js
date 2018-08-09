import React, { Component } from 'react';


class Display extends Component {
  constructor(){
  	super();

  	this.triggerAudio=this.triggerAudio.bind(this);
  }

  triggerAudio(e){
  	console.log(e)
  }


  render() {

    return (
      <div id="display">
      	<div data-key="65" onClick={(e) => this.triggerAudio(e)} className="drum-pad" id="kick">
      		<audio data-key="65" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id="Q"></audio>
				      	<kbd>Q</kbd>
      	</div>

      	<div className="drum-pad" id="snare">
      		<audio src="" id="W"></audio>
				      	<kbd>W</kbd>
      	</div>

      	<div className="drum-pad" id="closed-hat">
      		<audio src="" id="E"></audio>
				      	<kbd>E</kbd>
      	</div>

      	<div className="drum-pad" id="open-hat">
      		<audio src="" id="A"></audio>
				      	<kbd>A</kbd>
      	</div>

      	<div className="drum-pad" id="clap">
      		<audio src="" id="S"></audio>
				      	<kbd>S</kbd>
      	</div>

      	<div className="drum-pad" id="stick">
      		<audio src="" id="D"></audio>
				      	<kbd>D</kbd>
      	</div>

      	<div className="drum-pad" id="kick">
      		<audio src="" id="Z"></audio>
				      	<kbd>Z</kbd>
      	</div>

      	<div className="drum-pad" id="kick">
      		<audio src="" id="X"></audio>
				      	<kbd>X</kbd>
      	</div>

      	<div className="drum-pad" id="kick">
      		<audio src="" id="C"></audio>
				      	<kbd>C</kbd>
      	</div>

      </div>
    );
  }
}

export default Display;

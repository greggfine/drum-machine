import React, { Component } from 'react';



class Display extends Component {
  constructor(){
  	super();
  	this.myRef = React.createRef();
  	this.myRef2 = React.createRef();

  	this.state={
  			sounds: {
  				113: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",

  				119: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  				closedHat: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  			},
  			currentSound: 0
  			
  		
  	}

  	this.triggerAudio=this.triggerAudio.bind(this);
  	this.triggerSound=this.triggerSound.bind(this);
  }

  triggerAudio(e){
	this.setState({
  		currentSound: 113
  	})
  	e.target.children[0].currentTime = 0;
	e.target.children[0].play()
  }

  triggerSound(e){
  	this.setState({
  		currentSound: e.keyCode
  	})
  	this.myRef.current.currentTime = 0;
  	this.myRef.current.play()
  }


  componentDidMount(){
  	document.addEventListener('keypress', (e) => this.triggerSound(e))

  }

  render() {
  	const { kick, snare, closedHat } = this.state.sounds;

    return (
      <div id="display">

      	<div className="drum-pad" id="kick" onClick={this.triggerAudio}>
      	
      		<audio data-key="113" ref={ this.myRef } src={ this.state.sounds[this.state.currentSound]} id="Q"></audio>
				  <kbd>Q</kbd>
      	</div>

      	<div className="drum-pad" ref={ this.myRef2 }id="snare" onClick={this.triggerAudio}>
      		<audio src={ this.state.sounds[119] } id="W"></audio>
				      	<kbd>W</kbd>
      	</div>

      	

      	<div className="drum-pad" id="closed-hat" onClick={this.triggerAudio}>
      		<audio src={ closedHat } id="E"></audio>
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




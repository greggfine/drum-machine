import React from 'react';
import DrumPad from './DrumPad';

const sounds = [
  { url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", 
    id: 'kick',
    keyCode: 113
  },
  { url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3", 
    id: 'break-snare',
    keyCode: 119
  },
  { url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3", 
    id: 'hi-hat',
    keyCode: 101
  },
  { url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3", 
    id: 'o-hi-hat',
    keyCode: 97
  },
  { url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3", 
    id: 'side-stick',
    keyCode: 115
  },
  { url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", 
    id: 'oh',
    keyCode: 100
  },
  { url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3", 
    id: 'chord',
    keyCode: 122
  },
  { url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3", 
    id: 'light',
    keyCode: 120
  },
  { url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", 
    id: 'kick-hat',
    keyCode: 99
  },
]



class Display extends React.Component {
  constructor(){
  	super();

  	this.state={
  			sounds
  	}

  	this.triggerAudio=this.triggerAudio.bind(this);
  	this.triggerSound=this.triggerSound.bind(this);
  }

  triggerAudio(e){
    e.target.children[1].currentTime = 0;
    e.target.children[1].play()
  }

  triggerSound(e){
    console.log(e.keyCode)
  }



  render() {

    return (
        <DrumPad 
          sounds={ this.state.sounds }
          triggerAudio={(e) => this.triggerAudio(e)}
        />
    );
  }
}

export default Display;




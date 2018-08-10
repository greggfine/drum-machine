import React from 'react';

class DrumPad extends React.Component{
	constructor(props){
		super(props)

		this.triggerSound=this.triggerSound.bind(this);
	}

	 componentDidMount(){
	   document.addEventListener('keypress', (e) => this.triggerSound(e))
 	 }

 	 triggerSound(e){
 	  if(e.keyCode === this.props.keyCode){
 	  	console.log('yay')
 	  }
 	 }

 

	render(){

		const mappedSounds = this.props.sounds.map((sound) => {
			return <div className="drum-pad"
						onClick={(e)=> this.props.triggerAudio(e)}
					>
					{ sound.id } 
					<p>{ sound.keyCode }</p>
					<audio src={sound.url} />
					</div>
			})

		return (
			<div id="display">
				{ mappedSounds }
			</div>
		)

	}

}



export default DrumPad;
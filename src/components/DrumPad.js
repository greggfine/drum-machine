import React from 'react';

class DrumPad extends React.Component{
	constructor(props){
		super(props);

		this.triggerSound=this.triggerSound.bind(this);
		this.triggerAudio=this.triggerAudio.bind(this);
	}

	 componentDidMount(){
	   document.addEventListener('keypress', (e) => this.triggerSound(e))
 	 }

 	 triggerAudio(e, i){

 	   const sound = document.getElementById(this.props.sounds[i].char)
 	   const innerText = document.getElementById(this.props.sounds[i].id)
 	   sound.currentTime = 0;
 	   sound.play()
 	   innerText.innerHTML = this.props.sounds[i].id
 	   sound.onended = () => {
 	   	innerText.innerHTML = this.props.sounds[i].char
 	   }
 	 }

 	 componentWillReceiveProps(){
 	 	return false;
 	 }

 	 triggerSound(e){
 	 	this.props.sounds.forEach((sound, i) => {
 	 		if(e.keyCode === sound.keyCode){
		 	  	this.playSound(e, i)
		 	 	const innerText = document.getElementById(this.props.sounds[i].id)
		 	 	innerText.innerHTML = this.props.sounds[i].id
 	 		} else {
 	 			return;
 	 		}
 	 	})
 	 }

 	 playSound(e, i){
 	 	 const innerText = document.getElementById(this.props.sounds[i].id)
 	 	const sound = document.getElementById(e.key)
 	 	sound.currentTime = 0;
 	 	sound.play()
 	 	sound.onended = () => {
 	 		innerText.innerHTML = this.props.sounds[i].char
 	 	}
 	 }

	render(){

		const mappedSounds = this.props.sounds.map((sound, i) => {
			return <div className="drum-pad"
						onClick={(e)=> this.triggerAudio(e, i)}
						key={ sound.id }
					>
					<kbd id={ sound.id }>{ sound.char }</kbd>
					<audio id={ sound.char } src={sound.url} />
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
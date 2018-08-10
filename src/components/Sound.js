import React from 'react';

const Sound = ( { data, triggerAudio }) => {
	return (
			<div>
				<audio 
					onClick={triggerAudio}
					src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id="Q">
				      	
				      	<kbd>Q</kbd>
				 </audio>
				      	{ data }
			</div>
	)
}

export default Sound;
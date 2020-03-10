import React from 'react';


function Matka (props){
 
	return (
		<p>
	{ /* näytettään objektin tiedot */ }
Otsikko: {props.test.otsikko} <br/>
Päivä: {props.test.paiva} <br/>
Sää: {props.test.saa} 	<br/>
Kuvaus: {props.test.kuvaus} <br/>
</p>

		);
}

export default Matka; 
